import { AuthState } from './auth';
import { MetadataState as EurostatMetadataState } from '../eurostat/eurostat-state';
import { NutsState } from './nuts';
import { MapState } from '../map/map.state';

export interface AppState {
  router: any;
  auth: AuthState;
  nuts: NutsState;
  'eurostat-metadata': EurostatMetadataState;
  map: MapState;
}
export * from './auth';
export * from './nuts';
export * from '../eurostat/eurostat-state';
export * from '../map/map.state';
