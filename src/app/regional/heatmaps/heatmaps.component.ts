import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from 'src/app/ui/select/select.component';

import { HeatmapsService } from './heatmaps.service';
import { DisabledInputComponent } from 'src/app/ui/disabled-input/disabled-input.component';
import { InputComponent } from 'src/app/ui/input/input.component';
import { MapComponent } from 'src/app/map/map.component';

import { FeatureCollection } from 'src/app/interfaces/geojson';
import { MapService } from 'src/app/map/map.service';

import { polygon, Polygon, Feature, booleanPointInPolygon } from '@turf/turf';
import * as interpolateHeatmapLayer from 'interpolateheatmaplayer';
import * as mapboxgl from 'mapbox-gl';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Subscription } from 'rxjs';

window.mapboxgl = mapboxgl;

@Component({
  selector: 'app-heatmaps',
  standalone: true,
  imports: [
    CommonModule,
    NgbAlertModule,
    SelectComponent,
    InputComponent,
    DisabledInputComponent,
    MapComponent,
  ],
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.scss'],
})
export class HeatmapsComponent implements OnInit, OnDestroy {
  map = this.mapService.map;

  timeOfObservation = '';
  min: number | null = null;
  max: number | null = null;
  unit = '';
  roi = [];
  tpoly: Feature | null = null;
  subscription: Subscription | null = null;

  constructor(
    private service: HeatmapsService,
    private mapService: MapService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.mapService.fitToAttica();
    this.service.getAtticaNUTS().subscribe((data) => {
      console.log('NUTS', data);
      this.roi = data.geometry.coordinates[0][0];

      this.tpoly = polygon(data.geometry.coordinates[0]);

      this.localStorageService.storage$.subscribe((storage) => {
        const metric = storage['heatmap'];
        this.service.getHeatmap(metric).subscribe((data) => {
          this.removeLayersAndSources(false);
          if (data) {
            const properties = data.properties;
            if (properties) {
              this.timeOfObservation = properties['TimeOfObservation'];
              this.unit = properties['unit'];
            }
            this.crateHeatmap(data, metric ?? '');
            this.createLabels(data, metric ?? '');
          } else {
            this.timeOfObservation = '';
            this.unit = '';
            this.min = null;
            this.max = null;
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.removeLayersAndSources(true);
    this.subscription?.unsubscribe();
  }

  removeLayersAndSources(boundary: boolean) {
    if (this.map.getLayer('heatmap')) {
      this.map.removeLayer('heatmap');
    }
    if (this.map.getLayer('labels')) {
      this.map.removeLayer('labels');
    }

    if (this.map.getSource('data')) {
      this.map.removeSource('data');
    }
  }

  crateHeatmap(data: FeatureCollection, metric: string): void {
    const points = [];

    for (let index = 0; index < data.features.length; index++) {
      const element = data.features[index];
      const point = {
        lon: element.geometry.coordinates[0],
        lat: element.geometry.coordinates[1],
        val: element.properties![metric],
      };

      if (
        booleanPointInPolygon(
          [point.lon, point.lat],
          this.tpoly as unknown as Polygon
        )
      ) {
        points.push(point);
      }
    }

    this.min = Math.min(...points.map((p) => p.val));
    this.max = Math.max(...points.map((p) => p.val));

    const layer = interpolateHeatmapLayer.create({
      layerId: 'heatmap',
      opacity: 0.9,
      points,
      roi: this.roi,
    });

    this.map.addLayer(layer);
  }

  createLabels(data: any, metric: string) {
    this.map.addSource('data', {
      type: 'geojson',
      data: data,
    });
    this.map.addLayer({
      id: 'labels',
      type: 'symbol',
      source: 'data',
      layout: {
        'text-field': ['get', metric],
        'text-size': 11,
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      },
      paint: {
        'text-color': '#FFFFFF',
      },
    });
  }

  atticaBoundary(data: any) {
    this.map.addSource('attica_boundary_source', {
      type: 'geojson',
      data: data,
    });
    this.map.addLayer({
      id: 'attica_boundary',
      type: 'line',
      source: 'attica_boundary_source',
      paint: { 'line-color': '#000080', 'line-width': 4 },
    });
  }
}
