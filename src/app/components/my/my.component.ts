import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  date: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.date =  new Date().toDateString();
  }

}
