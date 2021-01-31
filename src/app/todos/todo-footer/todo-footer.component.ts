import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  lstFiltros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro );

  }

  cambiarFiltro( filtro: actions.filtrosValidos ): void {
    console.log(filtro);
    this.store.dispatch( actions.setFilter({ filtro }) );
  }

}
