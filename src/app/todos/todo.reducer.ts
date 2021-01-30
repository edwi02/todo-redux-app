import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [ 
    new Todo('Salvar el mundo')
];

const _todoReducer = createReducer(
    initialState,
    // tslint:disable-next-line:max-line-length
    on(actions.crear, (state, { texto }) => [...state, new Todo( texto )] ) // Extraemos cada uno de los ítems y los regresamos de manera independiente
);

export function todoReducer( state, action ): any {
    return _todoReducer( state, action );
}