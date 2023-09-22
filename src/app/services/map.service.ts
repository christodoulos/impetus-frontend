import { Injectable } from '@angular/core';
import {
  Map,
  LngLatBoundsLike,
  LngLatLike,
  MapMouseEvent,
  MapLayerEventType,
  NavigationControl,
  AnySourceData,
  AnyLayer,
  MapboxGeoJSONFeature,
  ScaleControl,
  CustomLayerInterface,
} from 'mapbox-gl';
import { Store } from '@ngrx/store';
import * as MapState from '../state/map';
import { AppState, mapload, maploaded } from '../state';
import { debounce } from 'lodash-es';
import { saveAs } from 'file-saver';

declare global {
  interface Window {
    tb: any;
  }
}
window.tb = window.tb || {};

declare let Threebox: any;
declare let THREE: any;

export type AnchorType =
  | 'auto'
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type ThreeDType = { x: number; y: number; z: number };

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  tb: any;

  customLayers: { [id: string]: CustomLayerInterface } = {};
  threeDModels: { [id: string]: any } = {};

  plantNurseryLayer!: CustomLayerInterface;
  hellinikonFloodLayer!: CustomLayerInterface;

  floodModel!: any;
  modelLoaded: Promise<any>;
  modelResolve!: (value: any) => void;

  private exaggeration = 0.4;

  places = (place: string) => {
    switch (place) {
      case 'attica':
        return {
          center: {
            lng: 23.70585417391692,
            lat: 38.01577475657271,
          },
          zoom: 9.097581678448197,
          pitch: 0,
          bearing: 0,
        };
      case 'europe':
        return {
          center: {
            lng: 15.164831706104877,
            lat: 53.69874679296251,
          },
          zoom: 3.3926060103197466,
          pitch: 0,
          bearing: 0,
        };
      case 'athens-plant-nursery':
        return {
          center: [23.783535537759576, 37.986796706691095] as LngLatLike,
          zoom: 16.777210158888213,
          bearing: 122.61132170386838,
          pitch: 81.0008753894744,
        };
      case 'hellinikon-flood':
        return {
          center: [23.73508263685423, 37.87729612062206] as LngLatLike,
          zoom: 15.26,
          bearing: 46.8,
          pitch: 75.5,
        };
      case 'kokkotou-vineyards':
        return {
          center: [23.89076532854162, 38.12430221183547] as LngLatLike,
          zoom: 17,
          bearing: 90,
          pitch: 50,
        };
      default:
        return {};
    }
  };

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

  constructor(private store: Store<AppState>) {
    this.modelLoaded = new Promise((resolve) => {
      this.modelResolve = resolve;
    });
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
        this.map.fitBounds(bounds as LngLatBoundsLike);
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
        this.map.setCenter(center as LngLatLike);
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

  newThreebox() {
    return new Threebox(this.map, this.map.getCanvas().getContext('webgl'), {
      willReadFrequently: true,
      // realSunlight: true,
      sky: true,
      terrain: true,
      enableSelectingObjects: true,
      enableSelectingFeatures: true,
      enableDraggingObjects: true,
      enableRotatingObjects: true,
      defaultLights: true,
    });
  }

  newMap(container: HTMLDivElement): Map {
    this.map = new Map({
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      container,
      antialias: true,
      attributionControl: false,
      preserveDrawingBuffer: true,
      bearingSnap: 0,
      pitch: 0,
      accessToken:
        'pk.eyJ1IjoiY2hyaXN0b2RvdWxvcyIsImEiOiJja3luYTd3eW0ydGFiMm9xcHRmMGJyOHVrIn0.c1mSurunkjU4Wyf2hxcy0g',
    });

    // Add zoom and rotation controls to the map.
    this.map.addControl(new NavigationControl());
    this.map.addControl(new ScaleControl());
    // this.map.scrollZoom.disable();

    this.map.loadImage('/assets/markers/custom_marker.png', (error, image) => {
      if (error) throw error;
      this.map.addImage('custom-marker', image as HTMLImageElement);
    });

    window.tb = this.tb = this.newThreebox();

    this.map.on('style.load', () => {
      this.add3DBuildingsLayer();
      this.map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: this.exaggeration,
      });
    });
    this.map.on('load', async () => {
      await this.onMapLoad();
    });

    return this.map;
  }

  triggerRepaint() {
    this.map.triggerRepaint();
  }

  async onMapLoad() {
    await this.glbLayer(
      'plant-nursery',
      [23.781372557061157, 37.988260208268386],
      71.76, // elevation
      'assets/glbs/tank.glb',
      { x: 0.5, y: 0.5, z: 0.5 }, // scale
      { x: 180, y: 90, z: 270 }, // rotation
      'center',
      true, // modelCastShadow
      'Sewer Mining Technology'
    );
    await this.glbLayer(
      'hellilikon-flood',
      [23.728049, 37.871938],
      0, // elevation
      'assets/glbs/flood.glb',
      { x: 1, y: 1, z: 0.34 }, // scale
      { x: 0, y: 0, z: 180 }, // rotation
      'bottom-left',
      true, // modelCastShadow
      ''
    );
    this.store.dispatch(maploaded());
  }

  downloadMap() {
    // Τhanks to https://tinyurl.com/22vht9zc accepted answer
    const img = new Image();
    const mapCanvas = document.querySelector(
      '.mapboxgl-canvas'
    ) as HTMLCanvasElement;
    if (mapCanvas) {
      img.src = mapCanvas.toDataURL();
      saveAs(img.src, 'map.png');
    }
  }

  incExaggeration() {
    this.exaggeration += 0.05;
    try {
      this.map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: this.exaggeration,
      });
    } catch (e) {
      console.log(e);
    }
  }

  decExaggeration() {
    this.exaggeration -= 0.05;
    try {
      this.map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: this.exaggeration,
      });
    } catch (e) {
      console.log('exaggeration cannot be less than 0.1');
    }
  }

  zeroExaggeration() {
    this.map.setTerrain({
      source: 'mapbox-dem',
      exaggeration: 0,
    });
  }

  restoreExaggeration() {
    this.map.setTerrain({
      source: 'mapbox-dem',
      exaggeration: this.exaggeration,
    });
  }

  addSource(id: string, source: AnySourceData) {
    this.map.addSource(id, source);
  }

  removeSource(id: string) {
    if (this.map.getSource(id)) this.map.removeSource(id);
  }

  addLayer(layer: AnyLayer) {
    this.map.addLayer(layer);
  }

  removeLayer(id: string) {
    if (this.map.getLayer(id)) this.map.removeLayer(id);
  }

  fitBounds(bounds: LngLatBoundsLike) {
    this.map.fitBounds(bounds);
  }

  on(
    event: keyof MapLayerEventType,
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
      | MapboxGeoJSONFeature
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

  add3DBuildingsLayer() {
    if (this.map.getLayer('building')) {
      this.map.removeLayer('building');
    }

    if (this.map.getSource('composite')) {
      this.map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',

          // Use an 'interpolate' expression to
          // add a smooth transition effect to
          // the buildings as the user zooms in.
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height'],
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height'],
          ],
          'fill-extrusion-opacity': 1,
        },
      });
    }
  }

  glbLayer(
    id: string,
    where: LngLatLike,
    elevation = 0,
    modelFile: string,
    scale: ThreeDType = { x: 1, y: 1, z: 1 },
    rotation: ThreeDType = { x: 0, y: 0, z: 0 },
    anchor: AnchorType = 'bottom-left',
    modelCastShadow: boolean = true,
    modelToolTip: string = ''
  ): Promise<CustomLayerInterface> {
    // Get the elevation of the terrain at the given location
    const terrainElevation = this.map.queryTerrainElevation(where, {
      exaggerated: true,
    });
    console.log(`Map elevation at ${where} is ${terrainElevation} meters`);

    return new Promise((resolve) => {
      const options = {
        obj: modelFile,
        type: 'gltf',
        scale,
        units: 'meters',
        rotation,
        anchor,
      };
      this.tb.loadObj(options, (model: any) => {
        this.threeDModels[id] = model;
        const pos = [...(where as number[]), elevation];
        model.setCoords(pos);
        if (modelToolTip) model.addTooltip(modelToolTip, true);
        model.modelCastShadow = modelCastShadow;
        this.tb.lights.dirLight.target = model;
        this.customLayers[id] = {
          id: `3d-model-${id}`,
          type: 'custom',
          renderingMode: '3d',
          onAdd: () => {
            this.tb.add(model);
          },
          render: () => {
            this.tb.update();
          },
        };
        resolve(this.customLayers[id]);
      });
    });
  }

  // glbLayer(
  //   id: string,
  //   where: LngLatLike,
  //   elevated: boolean,
  //   modelFile: string,
  //   scale: { x: number; y: number; z: number } = { x: 1, y: 1, z: 1 },
  //   rotation: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 },
  //   anchor: AnchorType = 'bottom-left',
  //   modelCastShadow: boolean = true,
  //   modelToolTip: string = ''
  // ): CustomLayerInterface {
  //   // Elevate the model if needed
  //   let elevation = 0;
  //   if (elevated) {
  //     elevation =
  //       this.map.queryTerrainElevation(where, { exaggerated: false }) ?? 0;
  //   }
  //   console.log(
  //     `MapService.addGLBLayer: elevation is ${elevation} meters at ${where}`
  //   );

  //   // Return a custom layer
  //   return {
  //     id: `3d-model-${id}`,
  //     type: 'custom',
  //     renderingMode: '3d',
  //     onAdd: () => {
  //       const options = {
  //         obj: modelFile,
  //         type: 'gltf',
  //         scale,
  //         units: 'meters',
  //         rotation,
  //         anchor,
  //       };
  //       this.tb.loadObj(options, (model: any) => {
  //         const pos = elevated ? [...(where as number[]), elevation] : where;
  //         model.setCoords(pos);
  //         if (modelToolTip) model.addTooltip(modelToolTip, true);
  //         model.modelCastShadow = modelCastShadow;
  //         this.tb.lights.dirLight.targer = model;
  //         // this.floodModel = model;
  //         // console.log('AAAAAAAAAAAAAAA', this.floodModel);
  //         this.tb.add(model);
  //         // this.modelResolve(model);
  //       });
  //     },
  //     render: () => {
  //       this.tb.update();
  //     },
  //   };
  // }

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

  onMouseMove(e: MapMouseEvent, map: Map) {
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

  onZoomEnd(map: Map) {
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

  flyTo(place: string) {
    this.store.dispatch(mapload());
    this.map.flyTo(this.places(place));
    this.map.once('moveend', () => {
      this.store.dispatch(maploaded());
    });
  }
}
