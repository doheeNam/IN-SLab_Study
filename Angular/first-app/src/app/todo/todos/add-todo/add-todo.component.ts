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
      padding: 16px 16px 16px 10px;
      background-color: white;
    }

    div{
      padding: 10px;
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
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
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
