import { Component, OnInit, Input, Output } from '@angular/core';
import { Users } from "../user-mock";
import { User } from '../user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users = Users;
  datalist;

  constructor() { }

  ngOnInit() {
    
  }

  @Output() searchOut: EventEmitter<any> = new EventEmitter();

  clickSearch(){
    this.datalist = this.users;
    console.log("click");
    this.searchOut.emit(this.datalist);
  }

}
