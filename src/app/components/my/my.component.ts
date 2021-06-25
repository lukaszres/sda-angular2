import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.submitted = true;
    console.log(form.controls.userData.controls.username);
  }
}
