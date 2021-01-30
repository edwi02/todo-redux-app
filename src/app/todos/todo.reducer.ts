import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [ 
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje Ironman'),
    new Todo('Escudo capitan america'),
];

const _todoReducer = createReducer(
    initialState,
    // tslint:disable-next-line:max-line-length
    on(actions.crear, (state, { texto }) => [...state, new Todo( texto )] ), // Extraemos cada uno de los ítems y los regresamos de manera independiente
    on(actions.borrar, (state, {id}) =>  state.filter( todo => todo.id !== id )), // El filter se puede usar
    on(actions.toggle, (state, { id }) => {
        return state.map( todo => {

            if ( todo.id === id ) {
                // Cómo no debo editar el directamente el objeto [todo], se aplica esta expressión
                // con esta destructuración, en el map se crea un nuevo objeto y no se afecta directamente 
                // el objeto referenciado
                return {
                    ...todo,
                    completado: !todo.completado
                };
            } else {
                return todo;
            }
        });
    }),
    on(actions.editar, (state, { id, texto }) => {
        return state.map( todo => {

            if ( todo.id === id ) {
                return {
                    ...todo,
                    texto: texto
                };
            } else {
                return todo;
            }
        });
    })
);

export function todoReducer( state, action ): any {
    return _todoReducer( state, action );
}