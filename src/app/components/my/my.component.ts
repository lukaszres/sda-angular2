import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserData} from "../../models/userData";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  http: HttpClient;
  object!: UserData;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.getFromServer();
  }

  getFromServer(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
      this.object = value as UserData;
      console.log(value);
    });
  }
}
