import { AuthState } from './auth';
import { MetadataState as EurostatMetadataState } from '../eurostat/eurostat-state';
import { NutsState } from './nuts';

export interface AppState {
  auth: AuthState;
  nuts: NutsState;
  'eurostat-metadata': EurostatMetadataState;
}
export * from './auth';
export * from './nuts';
export * from '../eurostat/eurostat-state';
