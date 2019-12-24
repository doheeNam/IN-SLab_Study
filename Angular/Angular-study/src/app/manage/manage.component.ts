import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  outdata(datalist:any){
    this.outdata = datalist;
  }

}
