export interface MapWhere {
  point: { x: number; y: number };
  lngLat: { lng: number; lat: number };
  properties?: {
    category_en?: string;
    class?: string;
    maki?: string;
    name?: string;
    name_local?: string;
    name_script?: string;
    type?: string;
    iso_3166_1?: string;
    filterrank?: number;
    sizerank?: number;
  };
}
import { createAction, createReducer, props, on } from '@ngrx/store';
import { AppState } from 'src/app/state';

export interface MapState {
  style: string;
  bounds: number[][];
  bearing: number;
  pitch: number;
  zoom: number;
  center: number[];
  lat: number;
  lng: number;
  follow: boolean;
  where: MapWhere;
  antialias: boolean;
  skyLayer: boolean;
  terrain: boolean;
  shadows: boolean;
  dateTime: Date;
}

const MapInitialState: MapState = {
  style: 'mapbox://styles/mapbox/light-v10',
  bounds: [
    [-180, -85.0511],
    [180, 85.0511],
  ],
  bearing: 0,
  pitch: 0,
  zoom: 1,
  center: [0, 0],
  lat: 0,
  lng: 0,
  follow: false,
  where: {
    point: { x: 0, y: 0 },
    lngLat: { lng: 0, lat: 0 },
  },
  antialias: false,
  skyLayer: false,
  terrain: false,
  shadows: false,
  dateTime: new Date(),
};

// Map Actions

export const update = createAction(
  '[Map] Update',
  props<{ attrs: Partial<MapState> }>()
);

export const setStyle = createAction(
  '[Map] Set Style',
  props<{ style: string }>()
);

export const setBounds = createAction(
  '[Map] Set Bounds',
  props<{ bounds: number[][] }>()
);

export const setBearing = createAction(
  '[Map] Set Bearing',
  props<{ bearing: number }>()
);

export const setPitch = createAction(
  '[Map] Set Pitch',
  props<{ pitch: number }>()
);

export const setZoom = createAction(
  '[Map] Set Zoom',
  props<{ zoom: number }>()
);

export const setCenter = createAction(
  '[Map] Set Center',
  props<{ center: number[] }>()
);

export const setLat = createAction('[Map] Set Lat', props<{ lat: number }>());

export const setLng = createAction('[Map] Set Lng', props<{ lng: number }>());

export const setFollow = createAction(
  '[Map] Set Follow',
  props<{ follow: boolean }>()
);

export const setWhere = createAction(
  '[Map] Set Where',
  props<{ where: MapWhere }>()
);

export const setAntialias = createAction(
  '[Map] Set Antialias',
  props<{ antialias: boolean }>()
);

export const setSkyLayer = createAction(
  '[Map] Set Sky Layer',
  props<{ skyLayer: boolean }>()
);

export const setTerrain = createAction(
  '[Map] Set Terrain',
  props<{ terrain: boolean }>()
);

export const setShadows = createAction(
  '[Map] Set Shadows',
  props<{ shadows: boolean }>()
);

export const setDateTime = createAction(
  '[Map] Set Date Time',
  props<{ dateTime: Date }>()
);

export const toggleFollow = createAction('[Map] Toggle Follow');

export const toggleAntialias = createAction('[Map] Toggle Antialias');

export const toggleSkyLayer = createAction('[Map] Toggle Sky Layer');

export const toggleTerrain = createAction('[Map] Toggle Terrain');

export const toggleShadows = createAction('[Map] Toggle Shadows');

// Map Reducer

export const mapReducer = createReducer(
  MapInitialState,
  //   Map update action
  on(update, (state, action) => {
    const center = action.attrs['center'];
    if (center) {
      const [lng, lat] = center;
      action.attrs['lng'] = lng;
      action.attrs['lat'] = lat;
    }
    return {
      ...state,
      ...action.attrs,
    };
  }),
  //   Set Style action
  on(setStyle, (state, action) => ({
    ...state,
    style: action.style,
  })),
  //   Set Bounds action
  on(setBounds, (state, action) => ({
    ...state,
    bounds: action.bounds,
  })),
  //   Set Bearing action
  on(setBearing, (state, action) => ({
    ...state,
    bearing: action.bearing,
  })),
  //   Set Pitch action
  on(setPitch, (state, action) => ({
    ...state,
    pitch: action.pitch,
  })),
  //   Set Zoom action
  on(setZoom, (state, action) => ({
    ...state,
    zoom: action.zoom,
  })),
  //   Set Center action
  on(setCenter, (state, action) => {
    const [lng, lat] = action.center;
    return {
      ...state,
      center: action.center,
      lng,
      lat,
    };
  }),
  //   Set Lat action
  on(setLat, (state, action) => {
    const center = [state.lng, action.lat];
    return {
      ...state,
      center,
      lat: action.lat,
    };
  }),
  //   Set Lng action
  on(setLng, (state, action) => {
    const center = [action.lng, state.lat];
    return {
      ...state,
      center,
      lng: action.lng,
    };
  }),
  //   Set Follow action
  on(setFollow, (state, action) => ({
    ...state,
    follow: action.follow,
  })),
  //   Set Where action
  on(setWhere, (state, action) => ({
    ...state,
    where: action.where,
  })),
  //   Set Antialias action
  on(setAntialias, (state, action) => ({
    ...state,
    antialias: action.antialias,
  })),
  //   Set Sky Layer action
  on(setSkyLayer, (state, action) => ({
    ...state,
    skyLayer: action.skyLayer,
  })),
  //   Set Terrain action
  on(setTerrain, (state, action) => ({
    ...state,
    terrain: action.terrain,
  })),
  //   Set Shadows action
  on(setShadows, (state, action) => ({
    ...state,
    shadows: action.shadows,
  })),
  //   Set DateTime action
  on(setDateTime, (state, action) => ({
    ...state,
    dateTime: action.dateTime,
  })),

  //   Toggle Follow action
  on(toggleFollow, (state) => ({
    ...state,
    follow: !state.follow,
  })),
  //   Toggle Antialias action
  on(toggleAntialias, (state) => ({
    ...state,
    antialias: !state.antialias,
  })),
  //   Toggle Sky Layer action
  on(toggleSkyLayer, (state) => ({
    ...state,
    skyLayer: !state.skyLayer,
  })),
  //   Toggle Terrain action
  on(toggleTerrain, (state) => ({
    ...state,
    terrain: !state.terrain,
  })),
  //   Toggle Shadows action
  on(toggleShadows, (state) => ({
    ...state,
    shadows: !state.shadows,
  }))
);

// Map Selectors

export const selectMapState = (state: AppState) => state.map;

export const selectMapStyle = (state: AppState) => state.map.style;

export const selectMapBounds = (state: AppState) => state.map.bounds;

export const selectMapBearing = (state: AppState) => state.map.bearing;

export const selectMapPitch = (state: AppState) => state.map.pitch;

export const selectMapZoom = (state: AppState) => state.map.zoom;

export const selectMapCenter = (state: AppState) => state.map.center;

export const selectMapLat = (state: AppState) => state.map.lat;

export const selectMapLng = (state: AppState) => state.map.lng;

export const selectMapFollow = (state: AppState) => state.map.follow;

export const selectMapWhere = (state: AppState) => state.map.where;

export const selectMapAntialias = (state: AppState) => state.map.antialias;

export const selectMapSkyLayer = (state: AppState) => state.map.skyLayer;

export const selectMapTerrain = (state: AppState) => state.map.terrain;

export const selectMapShadows = (state: AppState) => state.map.shadows;

export const selectMapDateTime = (state: AppState) => state.map.dateTime;

// Map Effects
