import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  // site1 = 'https://www.naver.com';
  // site2 = 'https://google.com';
  // site3 = 'https://daum.net';
  // site4 = 'https://www.youtube.com';

  siteList = ['https://www.naver.com ', 'https://google.com ', 'https://daum.net ','https://www.youtube.com'];

  constructor() { }

  ngOnInit() {
  }

}
