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

// declare let interpolateHeatmapLayer: any;
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
  unit = '';
  roi = [];

  constructor(
    private service: HeatmapsService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.form.controls.metric.valueChanges.subscribe((value) => {
      this.service.getHeatmap(value).subscribe((data) => {
        this.removeLayersAndSources();
        if (data) {
          const properties = data.properties;
          if (properties) {
            this.timeOfObservation = properties['TimeOfObservation'];
            this.unit = properties['unit'];
          }
          this.crateHeatmap(data, value ?? '');
          // this.createLabels(data, value ?? '');
        } else {
          this.timeOfObservation = '';
          this.unit = '';
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.map.fitBounds([
      24.1028392959052, 38.40303239502197, 23.30886905192861, 37.62646012564626,
    ]);
    this.service.getAtticaNUTS().subscribe((data) => {
      this.roi = data.geometry.coordinates[0][0];
      // this.atticaBoundary(data);
    });
  }

  ngOnDestroy(): void {
    this.removeLayersAndSources();
  }

  removeLayersAndSources() {
    if (this.map.getLayer('heatmap')) {
      this.map.removeLayer('heatmap');
    }
    if (this.map.getLayer('labels')) {
      this.map.removeLayer('labels');
    }
    if (this.map.getLayer('attica_boundary')) {
      this.map.removeLayer('attica_boundary');
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
      points.push(point);
    }

    const layer = interpolateHeatmapLayer.create({
      layerId: 'heatmap',
      opacity: 0.8,
      points,
      roi: this.roi,
    });
    // this.mapService.removeSkyLayer();

    this.map.addLayer(layer);
    console.log(this.map.getStyle().layers);
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
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
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
      paint: { 'line-color': '#000000', 'line-width': 4 },
    });
  }
}
