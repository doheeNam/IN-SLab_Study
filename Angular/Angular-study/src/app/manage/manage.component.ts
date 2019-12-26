import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  inputdata;

  constructor() { }

  ngOnInit() {
  }

  outdata(datalist:any){
    this.inputdata = datalist;
  }

}
