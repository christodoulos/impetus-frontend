import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MapService,
  GeoJsonService,
  MapPlacesService,
  MapSourcesService,
} from '@atticadt/services';

import geoblaze from 'geoblaze';
import proj4 from 'proj4';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { HellinikonLegendControl } from './hellinikon-legend';
import { CustomLayerInterface, LngLat, LngLatLike, Marker } from 'mapbox-gl';

declare var THREE: any;

type GeoJsonPointFeature = {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: number[];
  };
  properties: {
    [key: string]: number | string;
  };
};

@Component({
  selector: 'app-hellinikon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hellinikon.component.html',
  styleUrls: ['./hellinikon.component.scss'],
})
export class HellinikonComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  tb = this.mapService.tb;

  tif: any;
  legend: HellinikonLegendControl | null = null;

  threeDLayer: CustomLayerInterface | undefined;

  legendWhere: LngLatLike = [0, 0];
  legendDepth = 0;

  marker = new Marker({ color: 'red' });
  originalMaxZoom = this.map.getMaxZoom();

  constructor(
    private mapService: MapService,
    private mapSourcesService: MapSourcesService,
    private mapPlacesService: MapPlacesService,
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.map.setMaxZoom(18);
    this.mapPlacesService.flyTo('hellinikon-flood');
    this.mapSourcesService.addHellinikonInnundation();
    this.map.addLayer({
      id: 'hellinikon-innundation',
      type: 'fill',
      source: 'hellinikon-innundation', // reference the data source
      layout: {},
      paint: {
        'fill-color': '#add8e6', // blue color fill
        'fill-opacity': 0.9,
      },
    });

    this.tif = await firstValueFrom(
      this.http.get('/assets/maxdepth.tif', {
        responseType: 'blob',
      })
    );

    this.legend = new HellinikonLegendControl();
    this.map.addControl(this.legend, 'top-left');

    const _lnglatData = await fetch('/assets/lnglat_data.json');
    const lnglatData: { lng: number; lat: number; value: number }[] =
      await _lnglatData.json();

    const geojson: {
      type: 'FeatureCollection';
      features: GeoJsonPointFeature[];
    } = {
      type: 'FeatureCollection',
      features: [],
    };

    const wgs84 = 'EPSG:4326'; // WGS84 projection used by GPS
    const epsg2100 =
      '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs'; // Greek grid

    // Register the projections
    proj4.defs(wgs84);
    proj4.defs('EPSG:2100', epsg2100);

    lnglatData.forEach((item: { lng: number; lat: number; value: number }) => {
      const coords = proj4('EPSG:2100', wgs84, [item.lng, item.lat]);

      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          // coordinates: [item.coordx, item.coordy],
          coordinates: coords,
        },
        properties: {
          flooddepth: item.value,
        },
      } as GeoJsonPointFeature;
      geojson.features.push(feature);
    });

    this.map.addSource('point-data', {
      type: 'geojson',
      data: geojson,
    });

    this.map.addLayer(
      {
        id: 'point-layer',
        type: 'circle',
        source: 'point-data',
        paint: {
          'circle-color': {
            property: 'flooddepth', // The property to base the gradient on
            stops: [
              [0, '#add8e6'], // Lowest depth, assign a color
              [3, '#006994'], // Highest depth, assign a color
            ],
          },
          'circle-radius': 3,
          'circle-opacity': 0.9,
        },
      },
      '3d-buildings'
    );

    this.map.on('dblclick', this.onDblClick);

    this.glbFlood();
  }

  ngOnDestroy(): void {
    this.map.removeLayer('3d-model-hellilikon-flood');
    this.map.removeLayer('hellinikon-innundation');
    this.map.removeLayer('point-layer');
    this.map.removeSource('hellinikon-innundation');
    this.map.removeSource('point-data');
    this.map.off('dblclick', this.onDblClick);
    if (this.legend) this.map.removeControl(this.legend);
    this.marker.remove();
    this.map.setMaxZoom(this.originalMaxZoom);
  }

  onDblClick = async (e: any): Promise<void> => {
    e.preventDefault();

    var features = this.map.queryRenderedFeatures(e.point, {
      layers: ['hellinikon-innundation'],
    });

    if (features.length > 0) {
      this.marker.setLngLat(e.lngLat).addTo(this.map);
      this.legendWhere = e.lngLat;
      const longitude = e.lngLat.lng;
      const latitude = e.lngLat.lat;

      // Define the projections
      const wgs84 = 'EPSG:4326'; // WGS84 projection used by GPS
      const epsg2100 =
        '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs'; // Greek grid

      // Register the projections
      proj4.defs(wgs84);
      proj4.defs('EPSG:2100', epsg2100);

      // Convert the coordinates
      const [x, y] = proj4(wgs84, 'EPSG:2100', [longitude, latitude]);

      const georaster = await geoblaze.parse(this.tif);

      const value = (await geoblaze.identify(georaster, [x, y])) as number[]; // for raster could have multiple bands
      console.log('GEOBLAZE VALUE', value);
      this.legendDepth = value[0];

      this.legend?.update(this.legendWhere as LngLat, this.legendDepth);
    }
  };

  glbFlood() {
    // GLB layer
    this.threeDLayer = this.mapService.customLayers['hellilikon-flood'];
    this.mapService.addLayer(this.threeDLayer);
    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.tb.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.tb.scene.add(directionalLight2);
  }
}
