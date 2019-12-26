import { Component, OnInit, Input, Output } from '@angular/core';
import { Users } from "../user-mock";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Output() searchOut: EventEmitter<any> = new EventEmitter();

  clickSearch(){
    console.log("click");
    this.searchOut.emit(Users);
  }

}
