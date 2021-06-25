import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  private service: MoviesService;
  topMovies: any;
  bottomMovies: any;

  constructor(service: MoviesService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.topMovies = this.service.getTopMovies();
    this.bottomMovies = this.service.getBottomMovies();
  }

}
