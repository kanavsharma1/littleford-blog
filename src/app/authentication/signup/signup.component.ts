import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      'confirmPassword': new FormControl()
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
