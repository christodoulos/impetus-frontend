import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { AppState } from '.';
import { FeatureCollection } from '../interfaces/geojson';

export interface DropDownsState {
  heatmap: string;
  farmair: {
    vineyard: string;
    date: string;
    layer: string;
    geojson: FeatureCollection;
  };
  nuts: string;
  hellinikonLayer: string;
}

// dropdowns actions

export const updateHeatmap = createAction(
  '[DropDowns] Update Heatmap',
  props<{ heatmap: string }>()
);

export const updateFarmair = createAction(
  '[DropDowns] Update Farmair',
  props<{
    farmair: {
      vineyard: string;
      date: string;
      layer: string;
      geojson: FeatureCollection;
    };
  }>()
);

export const updateNuts = createAction(
  '[DropDowns] Update Nuts',
  props<{ nuts: string }>()
);

export const updateHellinikonLayer = createAction(
  '[DropDowns] Update Hellinikon Layer',
  props<{ hellinikonLayer: string }>()
);

export const dropdownsInitialState: DropDownsState = {
  heatmap: '',
  farmair: {
    vineyard: '',
    date: '',
    layer: '',
    geojson: {} as FeatureCollection,
  },
  nuts: '',
  hellinikonLayer: '',
};

export const dropdownsReducer = createReducer(
  dropdownsInitialState,
  on(updateHeatmap, (state, action) => ({
    ...state,
    heatmap: action.heatmap,
  })),
  on(updateFarmair, (state, action) => ({
    ...state,
    farmair: action.farmair,
  })),
  on(updateNuts, (state, action) => ({
    ...state,
    nuts: action.nuts,
  })),
  on(updateHellinikonLayer, (state, action) => ({
    ...state,
    hellinikonLayer: action.hellinikonLayer,
  }))
);

// Dropdowns Selectors

export const selectDropdownsState = (state: AppState) => state.dropdowns;

export const selectHeatmap = createSelector(
  selectDropdownsState,
  (state: DropDownsState) => state.heatmap
);

export const selectFarmair = createSelector(
  selectDropdownsState,
  (state: DropDownsState) => state.farmair
);

export const selectNuts = createSelector(
  selectDropdownsState,
  (state: DropDownsState) => state.nuts
);

export const selectHellinikonLayer = createSelector(
  selectDropdownsState,
  (state: DropDownsState) => state.hellinikonLayer
);
