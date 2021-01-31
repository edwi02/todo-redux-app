import { Todo } from './models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filter/filter.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): unknown {

    switch( filtro ) {
      case 'completados':
        return todos.filter( todo => todo.completado );
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      default:
        return todos;
    }

  }

}
