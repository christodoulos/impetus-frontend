import { AuthState } from './auth';
import { MetadataState as EurostatMetadataState } from '../eurostat/eurostat-state';
import { NutsState } from './nuts';
import { MapState } from './map';
import { DropDownsState } from './dropdowns';

export interface AppState {
  auth: AuthState;
  nuts: NutsState;
  'eurostat-metadata': EurostatMetadataState;
  map: MapState;
  dropdowns: DropDownsState;
}
export * from './auth';
export * from './nuts';
export * from '../eurostat/eurostat-state';
export * from './map';
export * from './router';
export * from './dropdowns';
