import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string}>()
);

export const toggle = createAction(
    '[TODO] Togle Todo',
    props<{ id: number}>()
);

export const toggleAll = createAction(
    '[TODO] Togle-all Todo',
    props<{ completado: boolean }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const limpiarTodos = createAction('[TODO] Limipiar completados');
