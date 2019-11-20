import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebrity-container',
  templateUrl: './celebrity-container.component.html',
  styleUrls: ['./celebrity-container.component.css']
})
export class CelebrityContainerComponent implements OnInit {

  star = {
    name: '전지현',
    photoUrl: 'http://img.insight.co.kr/static/2017/04/12/700/R3LX33L7PIS6BN6M0E47.jpg',
    introduction: '난 예쁘다!'
  };

  constructor() { }

  ngOnInit() {
  }

}
