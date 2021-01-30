import { createReducer, on } from '@ngrx/store';

import { filtrosValidos } from './filter.actions';
import * as actions from './filter.actions';

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer(
  initialState,
  on( actions.setFilter , (state, { filtro }) => filtro ),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
