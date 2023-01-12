import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      console.log(form);
      return;}

    this.userData.firstName = form.value.firstName;
    this.userData.lastName = form.value.lastName;
    this.userData.email = form.value.email;
    this.userData.password = form.value.password;
    console.log(form.value);
    form.reset();
  }
}
