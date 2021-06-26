import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserData} from "../../models/userData";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id : new FormControl(),
      userId : new FormControl(),
      title : new FormControl(),
      body : new FormControl()
    });
  }

  loadValues(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
        (data) => {
          let user: UserData = data as UserData;
          this.signupForm.controls.id.patchValue(user.id);
          this.signupForm.controls.userId.patchValue(user.userId);
          this.signupForm.controls.title.patchValue(user.title);
          this.signupForm.controls.body.patchValue(user.body);
        }
      );
  }

  onSubmit(): void{
    console.log(this.signupForm);
  }
}
