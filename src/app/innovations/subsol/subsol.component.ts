import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPlacesService, MapService } from '@atticadt/services';
import { GeometryType } from 'src/app/interfaces/geojson';
import { AnySourceData } from 'mapbox-gl';

@Component({
  selector: 'app-subsol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subsol.component.html',
  styleUrls: ['./subsol.component.scss'],
})
export class SubsolComponent implements OnInit, OnDestroy {
  stopAnimation = false;

  map = this.mapService.map;
  constructor(
    private mapPlacesService: MapPlacesService,
    private mapService: MapService
  ) {}

  pins = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          id: 'pumping-point',
          type: 'Feature',
          properties: {
            title: 'Pumping Point',
            description: `
            <img src="assets/images/subsol-pump.png" width="100%">
            <h5>Pumping Point</h5>
            <p>Karstic water is abstracted and transferred from Makaria springs to the treatment unit (about 1700m)</p>
            `,
          },
          geometry: {
            type: GeometryType.Point,
            coordinates: [24.011162575196238, 38.15472437493136],
          },
        },
        {
          id: 'water-treatment-plant',
          type: 'Feature',
          properties: {
            title: 'Water Treatment Plant',
            description: `
            <div class="d-flex justify-space-between">
              <img src="assets/images/subsol-treat0.jpg" width="50%">
              <img src="assets/images/subsol-treat1.png" width="50%">
            </div>
            <h5>Water Treatment Plant</h5>
            <p>Brackish water is treated in a water treatment plant with novel hybrid pollution remediation techniques, including Reverse Osmosis (RO) and Advanced Oxidation Methods (AOPs) to produce water for recharging the upper alluvial aquifer.</p>
            `,
          },
          geometry: {
            type: GeometryType.Point,
            coordinates: [24.014837736386056, 38.14168561319872],
          },
        },
        {
          id: 'injection-point',
          type: 'Feature',
          properties: {
            title: 'Injection Point',
            description: `
            <img src="assets/images/subsol-inj.png" width="100%">
            <h5>Injection Point</h5>
            <p>The artificial recharge site, consists of four wells, three vertical and one horizontal, to address saltwater intrusion and improve groundwater quality.</p>
            `,
          },
          geometry: {
            type: GeometryType.Point,
            coordinates: [24.017385291301963, 38.13859800847504],
          },
        },
      ],
    },
  };

  flowScheme = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          id: 'flow-scheme',
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [
              [24.011162575196238, 38.15472437493136],
              [24.014002472479348, 38.15469153463047],
              [24.014837736386056, 38.14168561319872],
              [24.017385291301963, 38.13859800847504],
            ],
            type: 'LineString',
          },
        },
      ],
    },
  };

  step = 0;

  dashArraySequence = [
    [0, 4, 3],
    [1, 4, 2],
    [2, 4, 1],
    [3, 4, 0],
  ];

  ngOnInit(): void {
    this.mapPlacesService.flyTo('subsol');
    this.showPins();
    this.animateDashArray(0);
  }

  ngOnDestroy(): void {
    this.stopAnimation = true;
    this.cleanup();
  }

  cleanup() {
    this.map.removeLayer('points');
    this.map.removeLayer('places');
    this.map.removeSource('pins');
    this.map.removeLayer('line-background');
    this.map.removeLayer('line-dashed');
    this.map.removeSource('flow-scheme');
  }

  showPins() {
    this.map.addSource('pins', this.pins as AnySourceData);
    this.map.addSource('flow-scheme', this.flowScheme as AnySourceData);
    this.map.addLayer({
      type: 'line',
      source: 'flow-scheme',
      id: 'line-background',
      paint: {
        'line-color': '#183efa',
        'line-width': 6,
        'line-opacity': 0.4,
      },
    });
    this.map.addLayer({
      type: 'line',
      source: 'flow-scheme',
      id: 'line-dashed',
      paint: {
        'line-color': '#183efa',
        'line-width': 6,
        'line-dasharray': [0, 4, 3],
      },
    });
    this.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'pins',
      layout: {
        'icon-image': 'custom-marker',
        'icon-allow-overlap': true,
        // get the title name from the source's "title" property
        'text-field': ['get', 'title'],
        'text-size': 12,
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-offset': [0, 1.25],
        'text-anchor': 'top',
        'icon-offset': [0, -30],
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': '#4264fb',
        'text-halo-width': 2,
      },
    });
    this.map.addLayer({
      id: 'places',
      type: 'circle',
      source: 'pins',
      paint: {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    });
  }

  animateDashArray = (timestamp: number) => {
    if (this.stopAnimation) return;
    // Update line-dasharray using the next value in dashArraySequence. The
    // divisor in the expression `timestamp / 50` controls the animation speed.
    const newStep = parseInt(
      String((timestamp / 50) % this.dashArraySequence.length)
    );
    if (newStep !== this.step) {
      this.map.setPaintProperty(
        'line-dashed',
        'line-dasharray',
        this.dashArraySequence[this.step]
      );
      this.step = newStep;
    }

    // Request the next frame of the animation.
    requestAnimationFrame(this.animateDashArray);
  };
}
