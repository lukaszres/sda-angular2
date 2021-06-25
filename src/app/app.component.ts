import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabNumber: number = 0;


  setTab(tabNumber: number): void{
    this.tabNumber = tabNumber;
  }
}
