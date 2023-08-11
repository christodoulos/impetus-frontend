import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { AppState } from '../state';

export interface Extension {
  agencyId: string;
  id: string;
  lang: string;
  version: string;
}

export interface EurostatCategory {
  index: { [key: string]: number };
  label: { [key: string]: string };
}

export interface EurostatMetadata {
  class: string;
  extension: Extension;
  id: string[];
  label: string;
  length: number;
  n: number;
  size: number[];
  source: string;
  updated: Date;
  dimension: { [key: string]: EurostatCategory };
}

export interface EurostatMetadataState extends EntityState<EurostatMetadata> {
  selectedId: string | null;
}

export const eurostatMetadataInitialState: EurostatMetadataState = {
  ids: [],
  entities: {},
  selectedId: null,
};

// Eurostat Actions

export const addEurostatMetadata = createAction(
  '[Eurostat Dataset] Add Dataset',
  props<{ dataset: EurostatMetadata }>()
);

export const selectEurostatMetadata = createAction(
  '[Eurostat Dataset] Select Dataset',
  props<{ id: string }>()
);

export const eurostatMetadataAdapter = createEntityAdapter<EurostatMetadata>({
  selectId: (metadata: EurostatMetadata) => metadata.extension.id,
  // sortComparer: (a, b) => b.updated.getTime() - a.updated.getTime(),
});

export const eurostatDatasetReducer = createReducer(
  eurostatMetadataInitialState,
  on(addEurostatMetadata, (state, action) =>
    eurostatMetadataAdapter.addOne(action.dataset, state)
  ),
  on(selectEurostatMetadata, (state, action) => ({
    ...state,
    selectedId: action.id,
  }))
);

// Eurostat Selectors

export const selectEurostatMetadataState = (state: AppState) =>
  state['eurostat-metadata'];

export const selectCurrentDatasetId = createSelector(
  selectEurostatMetadataState,
  (state: EurostatMetadataState) => state.selectedId
);

export const selectCurrentDataset = createSelector(
  selectEurostatMetadataState,
  selectCurrentDatasetId,
  (state: EurostatMetadataState, id: string | null) => state.entities[id ?? '']
);
