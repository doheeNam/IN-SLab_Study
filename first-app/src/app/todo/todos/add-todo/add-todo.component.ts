import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
    <button (click)="addTodo(newText)">Add</button>
  `,
  styles: [`
    :host{
      dispaly: block;
      padding: 16px;
      background-color: white;
    }

    input{
      display: inline-block;
      font-size: 18px;
      border: none;
    }

    input:focus, button:focus{
      outline: none;
    }

    botton{
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      
    }
  `]
})
export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(newText: string){
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }

}
