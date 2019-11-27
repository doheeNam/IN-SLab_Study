import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../share/todo.model';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  template: `
  <input type="checkbox" [checked]="todo.done"> <label>{{todo.text}} {{ todo.text}}
  `,
  styles: [`
    :host{
      display: block;
      padding: 16px;
      color: darkgray;
      background-color: white;
    }

    input{
      postion: relative;
    }

    input:checked:after{
      content: '\\2713';
      display: inline-block;
      text-align: center;
      font-size: 18px;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      // top: -6px;
      // left: -8px;
      border: 1px solid dimgray;
      background-color: dimgray;
    }

    input::before{
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 20px;
      postion: absolute;
      // top: -6px;
      // left: -8px;
      border: 1px solid darkgray;
    }


    input:checked+label{
      text-decoration: line-through;
    }
    `]
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
