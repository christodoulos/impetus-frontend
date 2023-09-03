import { ElementRef, Injectable, NgZone } from '@angular/core';
// import {
//   Map,
//   LngLatBoundsLike,
//   LngLatLike,
//   MapMouseEvent,
//   MapLayerEventType,
// } from 'mapbox-gl';
// import * as mapboxgl from 'mapbox-gl';
import { Store } from '@ngrx/store';
import * as MapState from './map.state';
import { AppState } from '../state';
import { debounce } from 'lodash-es';

declare global {
  interface Window {
    tb: any;
  }
}
window.tb = window.tb || {};

declare let Threebox: any;
declare let THREE: any;
declare let mapboxgl: any;

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: mapboxgl.Map;
  tb: any;
  style$ = this.store.select(MapState.selectMapStyle);
  bounds$ = this.store.select(MapState.selectMapBounds);
  bearing$ = this.store.select(MapState.selectMapBearing);
  pitch$ = this.store.select(MapState.selectMapPitch);
  zoom$ = this.store.select(MapState.selectMapZoom);
  skyLayer$ = this.store.select(MapState.selectMapSkyLayer);
  center$ = this.store.select(MapState.selectMapCenter);
  dateTime$ = this.store.select(MapState.selectMapDateTime);
  follow$ = this.store.select(MapState.selectMapFollow);
  terrain$ = this.store.select(MapState.selectMapTerrain);
  shadows$ = this.store.select(MapState.selectMapShadows);

  followMouse = debounce((e) => this.onMouseMove(e, this.map), 100);

  constructor(private store: Store<AppState>, private ngZone: NgZone) {
    // Global MapboxGL
    (window as any).mapboxgl = mapboxgl;

    // Subscribe to map selectors and respond to changes
    // Map Style changes
    this.style$.subscribe((style) => {
      if (this.map) {
        this.map.setStyle(style);
      }
    });

    // Map Bounds changes
    this.bounds$.subscribe((bounds) => {
      if (this.map) {
        this.map.fitBounds(bounds as mapboxgl.LngLatBoundsLike);
      }
    });

    // Map Bearing changes
    this.bearing$.subscribe((bearing) => {
      if (this.map) {
        this.map.setBearing(bearing);
      }
    });

    // Map Pitch changes
    this.pitch$.subscribe((pitch) => {
      if (this.map) {
        this.map.setPitch(pitch);
      }
    });

    // Map Zoom changes
    this.zoom$.subscribe((zoom) => {
      if (this.map) {
        this.map.setZoom(zoom);
      }
    });

    // Map Sky Layer changes
    this.skyLayer$.subscribe((visible) => {
      if (visible) {
        this.addSkyLayer();
      } else {
        this.removeSkyLayer();
      }
    });

    // Map Center changes
    this.center$.subscribe((center) => {
      if (this.map) {
        this.map.setCenter(center as mapboxgl.LngLatLike);
      }
    });

    // Map DateTime changes
    this.dateTime$.subscribe((dateTime) => {
      if (this.tb) {
        this.tb.setDateTime(dateTime);
      }
    });

    // Map Follow changes
    this.follow$.subscribe((follow) => {
      if (follow) {
        this.map && this.map.on('mousemove', this.followMouse);
      } else {
        this.map && this.map.off('mousemove', this.followMouse);
      }
    });

    // Map Terrain changes
    this.terrain$.subscribe((visible) => {
      if (this.tb) {
        this.tb.terrain = visible;
      }
    });

    // Map Shadows changes
    this.shadows$.subscribe((visible) => {
      if (this.map)
        if (visible) {
          this.tb.setBuildingShadows({
            map: this.map,
            layerId: 'building-shadows',
            buildingsLayerId: '3d-buildings',
            minAltitude: 0.1,
          });
        } else {
          this.tb.removeLayer('building-shadows');
        }
    });
  }

  newTreebox(map: mapboxgl.Map) {
    return new Threebox(map, map.getCanvas().getContext('webgl'), {
      willReadFrequently: true,
      realSunlight: true,
      sky: true,
      terrain: true,
      enableSelectingObjects: true,
      enableSelectingFeatures: true,
      defaultLights: true,
    });
  }

  newMap(container: ElementRef): { map: mapboxgl.Map; tb: any } {
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      container: container.nativeElement,
      antialias: true,
      attributionControl: false,
      preserveDrawingBuffer: true,
      bearingSnap: 0,
      accessToken:
        'pk.eyJ1IjoiY2hyaXN0b2RvdWxvcyIsImEiOiJja3luYTd3eW0ydGFiMm9xcHRmMGJyOHVrIn0.c1mSurunkjU4Wyf2hxcy0g',
    });

    // window.tb = this.tb = this.newTreebox(this.map);

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl());
    // this.map.scrollZoom.disable();

    return { map: this.map, tb: this.tb };
  }

  addSource(id: string, source: mapboxgl.AnySourceData) {
    this.map.addSource(id, source);
  }

  removeSource(id: string) {
    if (this.map.getSource(id)) this.map.removeSource(id);
  }

  addLayer(layer: mapboxgl.AnyLayer) {
    this.map.addLayer(layer);
  }

  removeLayer(id: string) {
    if (this.map.getLayer(id)) this.map.removeLayer(id);
  }

  fitBounds(bounds: mapboxgl.LngLatBoundsLike) {
    this.map.fitBounds(bounds);
  }

  on(
    event: keyof mapboxgl.MapLayerEventType,
    layer: string,
    listener: (e: any) => void
  ) {
    this.map.on(event, layer, listener);
  }

  getSource(id: string) {
    return this.map.getSource(id);
  }

  setFeatureState(
    feature:
      | mapboxgl.MapboxGeoJSONFeature
      | { source: string; id: string | number; sourceLayer?: string },
    state: any
  ) {
    this.map.setFeatureState(feature, state);
  }

  setFilter(layerId: string, filter: any[]) {
    this.map.setFilter(layerId, filter);
  }

  setStyle(style: string) {
    this.map.setStyle(style);
  }

  addSkyLayer() {
    this.map?.setLight({ anchor: 'map' });
    this.map?.addLayer({
      id: 'sky-layer',
      type: 'sky',
      paint: {
        'sky-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          0,
          5,
          0.3,
          8,
          1,
        ],
        // set up the sky layer for atmospheric scattering
        'sky-type': 'atmosphere',
        // explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
        // 'sky-atmosphere-sun': this.getSunPosition(),
        // set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
        'sky-atmosphere-sun-intensity': 100,
      },
    });
  }

  addGLBLayer(
    where: mapboxgl.LngLatLike,
    elevated: boolean,
    modelFile: string,
    scale: { x: number; y: number; z: number } = { x: 1, y: 1, z: 1 },
    rotation: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 },
    anchor:
      | 'center'
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right' = 'bottom-left',
    modelCastShadow: boolean = true,
    modelToolTip: string = ''
  ) {
    // Elevate the model if needed
    let elevation = 0;
    if (elevated) {
      elevation =
        this.map.queryTerrainElevation(where, { exaggerated: true }) ?? 0;
    }
    console.log(
      `MapService.addGLBLayer: elevation is ${elevation} meters at ${where}`
    );

    // Add a custom layer to the map
    this.map.addLayer({
      id: `3d-model-${where}`,
      type: 'custom',
      renderingMode: '3d',
      onAdd: () => {
        const options = {
          obj: modelFile,
          type: 'gltf',
          scale,
          units: 'meters',
          rotation,
          anchor,
        };
        this.tb.loadObj(options, (model: any) => {
          const pos = elevated ? [...(where as number[]), elevation] : where;
          model.setCoords(pos);
          if (modelToolTip) model.addTooltip(modelToolTip, true);
          model.modelCastShadow = modelCastShadow;
          this.tb.lights.dirLight.targer = model;
          this.tb.add(model);
        });
      },
      render: () => {
        this.tb.update();
      },
    });
  }

  removeSkyLayer() {
    this.map?.removeLayer('sky-layer');
  }

  getMapBounds(): number[][] {
    const bounds = this.map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    return [
      [ne.lng, ne.lat],
      [sw.lng, ne.lat],
    ];
  }

  getMapCenter(): number[] {
    const center = this.map.getCenter();
    const lng = center.lng;
    const lat = center.lat;
    return [lng, lat];
  }

  getMapZoom(): number {
    const zoom = this.map.getZoom();
    return Math.round((zoom + Number.EPSILON) * 100) / 100;
  }

  getMapBearing(): number {
    const bearing = this.map.getBearing();
    return Math.round((bearing + Number.EPSILON) * 100) / 100;
  }

  getMapPitch(): number {
    const pitch = this.map.getPitch();
    return Math.round((pitch + Number.EPSILON) * 100) / 100;
  }

  onMouseMove(e: mapboxgl.MapMouseEvent, map: mapboxgl.Map) {
    const point = { x: e.point.x, y: e.point.y };
    const lngLat = { lng: e.lngLat.lng, lat: e.lngLat.lat };
    const features = map.queryRenderedFeatures(e.point);
    const properties = features.length ? features[0]['properties'] : {};
    const where = {
      point,
      lngLat,
      properties: properties as { [key: string]: any },
    };
    this.store.dispatch(MapState.setWhere({ where }));
  }

  onZoomEnd(map: mapboxgl.Map) {
    let zoom = map.getZoom();
    zoom = Math.round((zoom + Number.EPSILON) * 100) / 100;
    this.store.dispatch(MapState.setZoom({ zoom }));
  }

  onBoxZoomEnd() {
    console.log('Box Zoom End, waiting 1 sec to update dashboard ...');
    setTimeout(() => {
      const bounds = this.getMapBounds();
      const zoom = this.getMapZoom();
      const center = this.getMapCenter();
      this.store.dispatch(MapState.update({ attrs: { bounds, zoom, center } }));
    }, 1000);
  }

  onWheel() {
    const bounds = this.getMapBounds();
    const center = this.getMapCenter();
    const zoom = this.getMapZoom();
    this.store.dispatch(MapState.update({ attrs: { bounds, center, zoom } }));
  }

  onRotateEnd() {
    this.store.dispatch(MapState.setBearing({ bearing: this.getMapBearing() }));
  }

  onPitchEnd() {
    this.store.dispatch(MapState.setPitch({ pitch: this.getMapPitch() }));
  }

  onDragEnd() {
    this.store.dispatch(MapState.setCenter({ center: this.getMapCenter() }));
  }
}