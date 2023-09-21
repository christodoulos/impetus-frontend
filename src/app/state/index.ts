import { createSelector } from '@ngrx/store';

import { AuthState } from './auth';
import { MetadataState as EurostatMetadataState } from '../eurostat/eurostat-state';
import { NutsState, nutsIsLoading } from './nuts';
import { MapState, selectMapIsLoading } from './map';
import { DropDownsState } from './dropdowns';
import { MapSourceState, sourceIsLoading } from './mapSources';

export interface AppState {
  auth: AuthState;
  nuts: NutsState;
  'eurostat-metadata': EurostatMetadataState;
  map: MapState;
  mapSources: MapSourceState;
  dropdowns: DropDownsState;
}

export const isLoading = createSelector(
  (AppState) => AppState,
  nutsIsLoading,
  sourceIsLoading,
  selectMapIsLoading
);

export * from './auth';
export * from './nuts';
export * from '../eurostat/eurostat-state';
export * from './map';
export * from './router';
export * from './dropdowns';
export * from './mapSources';
