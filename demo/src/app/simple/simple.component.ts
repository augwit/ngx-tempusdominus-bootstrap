import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  options = {format: 'YYYY/MM/DD HH:mm', buttons: {showClear: true}, icons: {clear:'fa fa-trash'}};
  date: any = null;
  constructor() { }
  ngOnInit() {
    this.date = dayjs('2015-11-20T22:10Z');
  }
  addTime(val, selector) {
    this.date = dayjs(this.date.add(val, selector));
  }
  clearTime() {
    this.date  = null;
  }
  getTime () {
    window.alert('Selected time is:' + this.date.format('YYYY/MM/DD HH:mm'));
  }
}
