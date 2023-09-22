import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from 'src/app/ui/select/select.component';

import { DisabledInputComponent } from 'src/app/ui/disabled-input/disabled-input.component';
import { InputComponent } from 'src/app/ui/input/input.component';
import { MapComponent } from 'src/app/map/map.component';

import { FeatureCollection } from 'src/app/interfaces/geojson';

import { polygon, Polygon, Feature, booleanPointInPolygon } from '@turf/turf';
import { Subscription } from 'rxjs';
import { HeatmapsLegendControl } from './heatmaps-legend';
import { Store } from '@ngrx/store';
import { AppState, selectHeatmap } from 'src/app/state';

import { MapService, HeatmapsService } from '@atticadt/services';

import * as moment from 'moment';
import * as interpolateHeatmapLayer from 'interpolateheatmaplayer';
import * as mapboxgl from 'mapbox-gl';

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
  tb = this.mapService.tb;

  timeOfObservation = '';
  min: number | null = null;
  max: number | null = null;
  unit = '';
  roi = [];
  tpoly: Feature | null = null;
  subscription: Subscription | null = null;
  legend: HeatmapsLegendControl | null = null;

  heatmapSelection$ = this.store.select(selectHeatmap);

  constructor(
    private service: HeatmapsService,
    private mapService: MapService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.mapService.flyTo('attica');

    // this.tb.terrain = false;
    this.mapService.zeroExaggeration();

    this.service.getAtticaNUTS().subscribe((data) => {
      this.roi = data.geometry.coordinates[0][0];

      this.tpoly = polygon(data.geometry.coordinates[0]);

      this.subscription = this.heatmapSelection$.subscribe((metric) => {
        console.log('HEATMAPS', metric);
        this.service.getHeatmap(metric).subscribe((data) => {
          this.clearOldData(data);
          console.log(data);
          this.removeLayersAndSources();
          const properties = data.properties;
          console.log(properties);
          if (properties) {
            this.timeOfObservation = properties['TimeOfObservation'];
            this.unit = properties['FeatureUnit'];
          }
          this.crateHeatmap(data, metric ?? '');
          this.createLabels(data, metric ?? '');
        });
      });
    });
  }

  clearOldData(data: any) {
    for (let index = 0; index < data.features.length; index++) {
      const element = data.features[index];
      const datetime = moment(element.properties.TimeOfObservation);
      if (moment().diff(datetime, 'days') > 0) {
        data.features.splice(index, 1);
      }
    }
  }

  ngOnDestroy(): void {
    this.removeLayersAndSources();
    this.subscription?.unsubscribe();
    if (this.legend) this.map.removeControl(this.legend);
    // this.tb.terrain = true;
    this.mapService.restoreExaggeration();
  }

  removeLayersAndSources() {
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
        // if (point.val !== 30.8) points.push(point); // A station seems to be stuck at 30.8
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
      renderingMode: '3d',
    });

    this.map.addLayer(layer);

    if (this.legend) {
      this.map.removeControl(this.legend);
    }
    this.legend = new HeatmapsLegendControl(
      metric,
      this.min,
      this.max,
      this.unit,
      this.timeOfObservation
    );
    this.map.addControl(this.legend, 'top-left');
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
}
