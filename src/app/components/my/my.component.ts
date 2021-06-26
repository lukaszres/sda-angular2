import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    this.sendToServer();
  }

  sendToServer(): void {
    const httpHeader = {
      headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
    };
    const body: UserData = {title: 'foo', body: 'bar', userId: 1} as UserData;
    this.http.post('http://jsonplaceholder.typicode.com/posts/', body, httpHeader)
      .subscribe(response => {
        this.object = response as UserData;
        console.log(response);
      });
  }
}
