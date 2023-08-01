import { AuthState } from './auth';
import { NutsState } from './nuts';

export interface AppState {
  auth: AuthState;
  nuts: NutsState;
}
export * from './auth';
export * from './nuts';
