import { createAction, createReducer, on, props } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeatureCollection } from '../interfaces/geojson';
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs';
import { GeoJsonService } from './geojson.service';

export interface NutsState {
  nuts0: FeatureCollection;
  nuts1: FeatureCollection;
  nuts2: FeatureCollection;
  nuts3: FeatureCollection;
}

export const update = createAction('[Nuts] Update', props<{ level: string }>());

export const updateSuccess = createAction(
  '[Nuts] Update Success',
  props<{ level: string; featureCollection: FeatureCollection }>()
);

export const nutsInitialState: NutsState = {
  nuts0: {
    type: 'FeatureCollection',
    features: [],
  },
  nuts1: {
    type: 'FeatureCollection',
    features: [],
  },
  nuts2: {
    type: 'FeatureCollection',
    features: [],
  },
  nuts3: {
    type: 'FeatureCollection',
    features: [],
  },
};

export const nutsReducer = createReducer(
  nutsInitialState,
  on(updateSuccess, (state, action) => ({
    ...state,
    [action.level]: action.featureCollection,
  }))
);

@Injectable()
export class NutsEffects {
  constructor(private actions$: Actions, private service: GeoJsonService) {
    console.log('NutsEffects constructor called');
  }

  loadNuts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(update),
      exhaustMap((action) =>
        this.service.getFeatureCollection(action.level).pipe(
          map((featureCollection) =>
            updateSuccess({
              level: action.level,
              featureCollection,
            })
          )
        )
      )
    )
  );
}
