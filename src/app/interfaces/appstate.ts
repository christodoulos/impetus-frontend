import { AuthState } from '../state/auth';
import { NutsState } from '../state/nuts';

export interface AppState {
  auth: AuthState;
  nuts: NutsState;
}
