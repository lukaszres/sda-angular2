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
    this.deleteOnServer();
  }

  deleteOnServer(): void {
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(response => {
        this.object = response as UserData;
        console.log(response);
      });
  }
}
