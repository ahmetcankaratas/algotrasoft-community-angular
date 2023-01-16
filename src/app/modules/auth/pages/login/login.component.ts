import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  inValidSubmit = false;
  loginData = {
    email: '',
    password: '',
  };
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form');
      this.inValidSubmit = true;
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

     this.authService.login(email, password).subscribe(
      (responseData) => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/scanner']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.inValidSubmit = false;
    form.reset();
  }
}
