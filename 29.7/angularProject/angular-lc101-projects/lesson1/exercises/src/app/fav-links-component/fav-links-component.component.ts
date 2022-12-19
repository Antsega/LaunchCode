import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favLinks',
  templateUrl: './fav-links-component.component.html',
  styleUrls: ['./fav-links-component.component.css']
})
export class FavLinksComponentComponent implements OnInit {

  urls = ['https://www.bing.com/','https://www.youtube.com/']
  constructor() { }

  ngOnInit() {
  }

}
