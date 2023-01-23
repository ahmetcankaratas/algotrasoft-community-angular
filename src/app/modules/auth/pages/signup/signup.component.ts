import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log(form);
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.signup(email, password).subscribe(
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

    form.reset();
  }
}
