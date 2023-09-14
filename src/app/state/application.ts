import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { AppState } from '.';

export interface ApplicationState {
  welcome: boolean;
}
