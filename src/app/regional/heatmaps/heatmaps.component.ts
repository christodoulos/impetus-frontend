import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from 'src/app/ui/select/select.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeatmapsService } from './heatmaps.service';
import { DisabledInputComponent } from 'src/app/ui/disabled-input/disabled-input.component';
import { InputComponent } from 'src/app/ui/input/input.component';
import { MapComponent } from 'src/app/map/map.component';

import { FeatureCollection } from 'src/app/interfaces/geojson';
import { MapService } from 'src/app/map/map.service';

import { polygon, Polygon, Feature, booleanPointInPolygon } from '@turf/turf';
import * as interpolateHeatmapLayer from 'interpolateheatmaplayer';
import * as mapboxgl from 'mapbox-gl';

window.mapboxgl = mapboxgl;

@Component({
  selector: 'app-heatmaps',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    SelectComponent,
    InputComponent,
    DisabledInputComponent,
    MapComponent,
  ],
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.scss'],
})
export class HeatmapsComponent implements OnInit, AfterViewInit, OnDestroy {
  map = this.mapService.map;
  metrics = [
    { key: 'temperature', value: 'Temperature' },
    { key: 'windSpeed', value: 'Wind Speed (km/h)' },
    { key: 'beaufort', value: 'Wind Speed (beaufort)' },
    { key: 'humidity', value: 'Humidity' },
    { key: 'atmosphericPressure', value: 'Atmospheric Pressure' },
    { key: 'highestDailyTemperature', value: 'Highest Daily Temperature' },
    { key: 'lowestDailyTemperature', value: 'Lowest Daily Temperature' },
    { key: 'precipitation', value: 'Precipitation' },
    { key: 'highestDailyGust', value: 'Highest Daily Gust' },
  ];
  form = new FormGroup({
    metric: new FormControl('', Validators.required),
  });
  timeOfObservation = '';
  min: number | null = null;
  max: number | null = null;
  unit = '';
  roi = [];
  tpoly: Feature | null = null;

  constructor(
    private service: HeatmapsService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.form.controls.metric.valueChanges.subscribe((value) => {
      this.service.getHeatmap(value).subscribe((data) => {
        this.removeLayersAndSources(false);
        if (data) {
          const properties = data.properties;
          if (properties) {
            this.timeOfObservation = properties['TimeOfObservation'];
            this.unit = properties['unit'];
          }
          this.crateHeatmap(data, value ?? '');
          this.createLabels(data, value ?? '');
        } else {
          this.timeOfObservation = '';
          this.unit = '';
          this.min = null;
          this.max = null;
        }
      });
    });
    this.mapService.fitToAttica();
    this.service.getAtticaNUTS().subscribe((data) => {
      console.log('NUTS', data);
      this.roi = data.geometry.coordinates[0][0];
      // this.atticaBoundary(data.features[0]);
      console.log('ROI', this.roi);
      console.log('Turff', polygon(data.geometry.coordinates[0]));
      this.tpoly = polygon(data.geometry.coordinates[0]);
    });
  }

  ngAfterViewInit(): void {
    // this.mapService.fitToAttica();
    // this.service.getAtticaNUTS().subscribe((data) => {
    //   this.roi = data.geometry.coordinates[0][0];
    //   // this.atticaBoundary(data.features[0]);
    // });
  }

  ngOnDestroy(): void {
    this.removeLayersAndSources(true);
  }

  removeLayersAndSources(boundary: boolean) {
    if (this.map.getLayer('heatmap')) {
      this.map.removeLayer('heatmap');
    }
    if (this.map.getLayer('labels')) {
      this.map.removeLayer('labels');
    }
    // if (boundary && this.map.getLayer('attica_boundary')) {
    //   this.map.removeLayer('attica_boundary');
    // }
    if (this.map.getSource('data')) {
      this.map.removeSource('data');
    }
  }

  crateHeatmap(data: FeatureCollection, metric: string): void {
    const points = [];

    const skata = this.roi as unknown as Polygon;
    console.log(skata);

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
        console.log('in');
        points.push(point);
      }
      // points.push(point);
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
