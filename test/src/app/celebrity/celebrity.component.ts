import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {

  @Input() photoUrl;
  @Input() name;
  @Input() introduction;

  constructor() { }

  ngOnInit() {
  }

}
