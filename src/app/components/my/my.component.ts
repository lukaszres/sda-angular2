import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  submitted: boolean = false;

  myForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl(),
      }),
      age: new FormControl(),
      country: new FormControl()
    });
  }

  get f(){
    let userData: FormGroup = this.myForm.controls.userData as FormGroup;
    return userData.controls.firstName;
  }

  onSubmit() {
    this.submitted = true;
    if(this.myForm.valid){
      console.log(this.myForm);
    }
  }
}
