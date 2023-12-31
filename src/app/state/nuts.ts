import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeatureCollection } from '../interfaces/geojson';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs';

import { GeoJsonService } from '@atticadt/services';
import { AppState } from 'src/app/state';

export interface NutsState {
  isLoading: boolean;
  nuts0: FeatureCollection | null;
  nuts1: FeatureCollection | null;
  nuts2: FeatureCollection | null;
  nuts3: FeatureCollection | null;
}

// nuts actions

export const nutsUpdate = createAction(
  '[Nuts] Update',
  props<{ level: string }>()
);

export const nutsUpdateSuccess = createAction(
  '[Nuts] Update Success',
  props<{ level: string; featureCollection: FeatureCollection }>()
);

export const nutsInitialState: NutsState = {
  isLoading: false,
  nuts0: null,
  nuts1: null,
  nuts2: null,
  nuts3: null,
};

export const nutsReducer = createReducer(
  nutsInitialState,
  on(nutsUpdate, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(nutsUpdateSuccess, (state, action) => ({
    ...state,
    [action.level]: action.featureCollection,
    isLoading: false,
  }))
);

// Nuts Selectors

export const selectNutsState = (state: AppState) => state.nuts;

export const nutsIsLoading = createSelector(
  selectNutsState,
  (state: NutsState) => state.isLoading
);

export const nuts0 = createSelector(
  selectNutsState,
  (state: NutsState) => state.nuts0
);

export const nuts1 = createSelector(
  selectNutsState,
  (state: NutsState) => state.nuts1
);

export const nuts2 = createSelector(
  selectNutsState,
  (state: NutsState) => state.nuts2
);

export const nuts3 = createSelector(
  selectNutsState,
  (state: NutsState) => state.nuts3
);

@Injectable()
export class NutsEffects {
  constructor(private actions$: Actions, private service: GeoJsonService) {
    // console.log('NutsEffects constructor called');
  }

  loadNuts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nutsUpdate),
      mergeMap((action) =>
        this.service.getFeatureCollection(action.level).pipe(
          map((featureCollection) => {
            if (featureCollection) {
              featureCollection.features = featureCollection.features.map(
                (feature) => {
                  feature.id = feature._id;
                  return feature;
                }
              );
            }
            return nutsUpdateSuccess({
              level: action.level,
              featureCollection,
            });
          })
        )
      )
    )
  );
}
