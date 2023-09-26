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
import { Subscription, firstValueFrom } from 'rxjs';
import { HellinikonLegendControl } from './hellinikon-legend';
import { CustomLayerInterface, LngLat, LngLatLike, Marker } from 'mapbox-gl';
import { FeatureCollection } from 'src/app/interfaces/geojson';
import { Store } from '@ngrx/store';
import { AppState, selectHellinikonLayer } from 'src/app/state';

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
  // tb = this.mapService.tb;

  rasterTif: any;
  selectedLayer = '';

  legend: HellinikonLegendControl | null = null;

  // threeDLayer: CustomLayerInterface | undefined;

  legendWhere: LngLatLike = [0, 0];
  legendDepth = 0;

  marker = new Marker({ color: 'red' });
  originalMaxZoom = this.map.getMaxZoom();

  layerSelection$ = this.store.select(selectHellinikonLayer);
  subscription: Subscription | null = null;

  constructor(
    private mapService: MapService,
    private mapSourcesService: MapSourcesService,
    private mapPlacesService: MapPlacesService,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription = this.layerSelection$.subscribe((layer) => {
      console.log('layer', layer);
      this.selectedLayer = layer;
      if (this.legend) this.map.removeControl(this.legend);
      this.marker.setLngLat([0, 0]);
      this.onLayerChange(layer);
    });

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

    // this.legend = new HellinikonLegendControl();
    // this.map.addControl(this.legend, 'top-left');

    this.map.on('dblclick', this.onDblClick);

    // this.glbFlood();
  }

  async onLayerChange(layer: string): Promise<void> {
    this.legend = new HellinikonLegendControl();
    this.map.addControl(this.legend, 'top-left');
    this.rasterTif =
      layer === 'depth'
        ? await firstValueFrom(
            this.http.get('/assets/maxdepth.tif', {
              responseType: 'blob',
            })
          )
        : await firstValueFrom(
            this.http.get('/assets/velocity.tif', {
              responseType: 'blob',
            })
          );

    const geojson =
      layer === 'depth'
        ? await this.json2FeatureCollection(
            '/assets/depth_lnglat_data.json',
            'depth'
          )
        : await this.json2FeatureCollection(
            '/assets/velocity_lnglat_data.json',
            'velocity'
          );

    if (this.map.getLayer('point-layer')) this.map.removeLayer('point-layer');
    if (this.map.getSource('point-data')) this.map.removeSource('point-data');

    this.map.addSource('point-data', {
      type: 'geojson',
      data: geojson,
    });

    const stops =
      layer === 'depth'
        ? [
            [0, '#add8e6'],
            [3, '#006994'],
          ]
        : [
            [0, '#fef2f2'],
            [5, '#e23433'],
          ];
    this.map.addLayer(
      {
        id: 'point-layer',
        type: 'circle',
        source: 'point-data',
        paint: {
          'circle-color': {
            property: layer === 'depth' ? 'depth' : 'velocity', // The property to base the gradient on
            stops,
          },
          'circle-radius': 3,
          'circle-opacity': 0.9,
        },
      },
      '3d-buildings'
    );
  }

  async json2FeatureCollection(
    jsonPath: string,
    propertyName: string
  ): Promise<FeatureCollection> {
    console.log('feature collection', jsonPath, propertyName);

    const _data = await fetch(jsonPath);
    const lnglatData: { lng: number; lat: number; value: number }[] =
      await _data.json();

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
        properties: {},
      } as GeoJsonPointFeature;

      feature.properties[propertyName] = item.value;

      geojson.features.push(feature);
    });

    return geojson as FeatureCollection;
  }

  ngOnDestroy(): void {
    // this.map.removeLayer('3d-model-hellilikon-flood');
    this.map.removeLayer('hellinikon-innundation');
    this.map.removeLayer('point-layer');
    this.map.removeSource('hellinikon-innundation');
    this.map.removeSource('point-data');
    this.map.off('dblclick', this.onDblClick);
    if (this.legend) this.map.removeControl(this.legend);
    this.marker.remove();
    this.map.setMaxZoom(this.originalMaxZoom);
    this.subscription?.unsubscribe();
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

      const georaster = await geoblaze.parse(this.rasterTif);

      const value = (await geoblaze.identify(georaster, [x, y])) as number[]; // for raster could have multiple bands
      console.log('GEOBLAZE VALUE', value);
      const rasterValue = value[0];

      this.legend?.update(
        this.legendWhere as LngLat,
        this.selectedLayer,
        rasterValue
      );
    }
  };

  // glbFlood() {
  //   // GLB layer
  //   this.threeDLayer = this.mapService.customLayers['hellilikon-flood'];
  //   this.mapService.addLayer(this.threeDLayer);
  //   // create two three.js lights to illuminate the model
  //   const directionalLight = new THREE.DirectionalLight(0xffffff);
  //   directionalLight.position.set(0, -70, 100).normalize();
  //   this.tb.scene.add(directionalLight);

  //   const directionalLight2 = new THREE.DirectionalLight(0xffffff);
  //   directionalLight2.position.set(0, 70, 100).normalize();
  //   this.tb.scene.add(directionalLight2);
  // }
}
