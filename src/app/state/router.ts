import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../custom-route-serializer';

export const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getUrl = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) =>
    state && state.state && state.state.url
);

export const getParams = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) =>
    state && state.state && state.state.params
);

export const getQueryParams = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) =>
    state && state.state && state.state.queryParams
);

export const getRouteData = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) =>
    state && state.state && state.state.data
);

export const getNavigationId = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state && state.navigationId
);

export const shouldShowWelcomePins = createSelector(
  getUrl,
  getNavigationId,
  (url, navigationId) => navigationId > 1 && url === '/'
);
