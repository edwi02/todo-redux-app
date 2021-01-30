import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from './../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtEditar: FormControl;

  editando: boolean;

  constructor() {
    this.editando = false;
  }

  ngOnInit(): void {

    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtEditar = new FormControl( this.todo.texto, Validators.required );
  }

  editar(): void {
    this.editando = true;
    setTimeout(() => {
      // this.txtInputFisico.nativeElement.focus();
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
  }

}
