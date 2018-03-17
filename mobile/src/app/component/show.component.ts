import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<selector>',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor() {}
  public baner;
  ngOnInit() {
    this.baner ='dasdsa';
  }

}
