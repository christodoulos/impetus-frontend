import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeatureCollection } from 'src/app/interfaces/geojson';
import { AppState } from '.';
import { Injectable } from '@angular/core';
import { GeoJsonService } from '@atticadt/services';
import { map, mergeMap } from 'rxjs';

export interface MapSourceState {
  isLoading: boolean;
  hellinikonInnundation: FeatureCollection | null;
}

// MapSource Actions

export const mapSourceUpdate = createAction(
  '[MapSource] Update',
  props<{ source: string }>()
);

export const mapSourceUpdateSuccess = createAction(
  '[MapSource] Update Success',
  props<{ source: string; featureCollection: FeatureCollection }>()
);

export const mapSourceInitialState: MapSourceState = {
  isLoading: false,
  hellinikonInnundation: null,
};

export const mapSourceReducer = createReducer(
  mapSourceInitialState,
  on(mapSourceUpdate, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(mapSourceUpdateSuccess, (state, action) => ({
    ...state,
    [action.source]: action.featureCollection,
    isLoading: false,
  }))
);

// MapSource Selectors

export const selectMapSourceState = (state: AppState) => state.mapSources;

export const selectHellinikonInnnundation = createSelector(
  selectMapSourceState,
  (state: MapSourceState) => state.hellinikonInnundation
);

export const sourceIsLoading = createSelector(
  selectMapSourceState,
  (state: MapSourceState) => state.isLoading
);

// MapSource Effects

@Injectable()
export class MapSourceEffects {
  constructor(
    private actions$: Actions,
    private geoJsonService: GeoJsonService
  ) {}

  loasSource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mapSourceUpdate),
      mergeMap((action) =>
        this.geoJsonService.getFeatureCollection(action.source).pipe(
          map((featureCollection) =>
            mapSourceUpdateSuccess({
              source: action.source,
              featureCollection,
            })
          )
        )
      )
    )
  );
}
