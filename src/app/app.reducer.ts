import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

import { filtrosValidos } from './filter/filter.actions';

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
};
