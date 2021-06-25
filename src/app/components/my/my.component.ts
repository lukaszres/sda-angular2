import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  myForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      age: new FormControl(),
      country: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
