import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string}>()
);

export const toggle = createAction(
    '[TODO] Togle Todo',
    props<{ id: number}>()
);
