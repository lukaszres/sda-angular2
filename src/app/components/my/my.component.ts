import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  isLoading = true;

  constructor(private router: Router) {
    router.events.subscribe((value) => this.checkEvent(value as RouterEvent));
  }


  ngOnInit(): void {
  }

  checkEvent(routeEvent: RouterEvent): void {
    if (routeEvent instanceof NavigationStart) {
      this.isLoading = true;
    } else if (routeEvent instanceof NavigationEnd
      || routeEvent instanceof NavigationCancel
      || routeEvent instanceof NavigationError
    ) {
      this.isLoading = false;
    }
  }
}
