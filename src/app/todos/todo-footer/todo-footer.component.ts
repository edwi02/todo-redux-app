import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import * as aTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  lstFiltros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number;

  constructor( private store: Store<AppState>) {
    this.pendientes = 0;
  }

  ngOnInit(): void {

    // this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro );
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    });

  }

  cambiarFiltro( filtro: actions.filtrosValidos ): void {
    this.store.dispatch( actions.setFilter({ filtro }) );
  }

  limpiarCompletados(): void {
    this.store.dispatch( aTodo.limpiarTodos());
  }

}
