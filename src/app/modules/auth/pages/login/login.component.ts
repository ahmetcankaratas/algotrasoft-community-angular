import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  inValidSubmit = false;
  loginData = {
    email: '',
    password: ''
  };

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      console.log('Invalid form')
      this.inValidSubmit = true;
      return;
    }

    this.inValidSubmit = false;
    this.loginData.email = form.value.email;
    this.loginData.password = form.value.password;
    console.log(form.value);
    form.reset();
  }
}
