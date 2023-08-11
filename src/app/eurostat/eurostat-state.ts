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

export interface Category {
  index: { [key: string]: number };
  label: { [key: string]: string };
}

export interface Metadata {
  class: string;
  extension: Extension;
  id: string[];
  label: string;
  length: number;
  n: number;
  size: number[];
  source: string;
  updated: Date;
  dimension: { [key: string]: Category };
}

export interface MetadataState extends EntityState<Metadata> {
  selectedId: string | null;
}

export const MetadataInitialState: MetadataState = {
  ids: [],
  entities: {},
  selectedId: null,
};

// Eurostat Actions

export const addMetadata = createAction(
  '[Eurostat Dataset] Add Dataset',
  props<{ dataset: Metadata }>()
);

export const selectMetadata = createAction(
  '[Eurostat Dataset] Select Dataset',
  props<{ id: string }>()
);

export const MetadataAdapter = createEntityAdapter<Metadata>({
  selectId: (metadata: Metadata) => metadata.extension.id,
  // sortComparer: (a, b) => b.updated.getTime() - a.updated.getTime(),
});

export const MetadataReducer = createReducer(
  MetadataInitialState,
  on(addMetadata, (state, action) =>
    MetadataAdapter.addOne(action.dataset, state)
  ),
  on(selectMetadata, (state, action) => ({
    ...state,
    selectedId: action.id,
  }))
);

// Eurostat Selectors

export const selectMetadataState = (state: AppState) =>
  state['eurostat-metadata'];

export const selectAllMetadataIds = createSelector(
  selectMetadataState,
  MetadataAdapter.getSelectors().selectIds
);

export const selectCurrentMetadataId = createSelector(
  selectMetadataState,
  (state: MetadataState) => state.selectedId
);

export const selectCurrentMetadata = createSelector(
  selectMetadataState,
  selectCurrentMetadataId,
  (state: MetadataState, id: string | null) => state.entities[id ?? '']
);

export const selectAllMetadataIdAndLabel = createSelector(
  selectMetadataState,
  (state: MetadataState) => {
    return state.ids.map((id) => ({
      id: state.entities[id]?.extension.id,
      label: state.entities[id]?.label,
    }));
  }
);
