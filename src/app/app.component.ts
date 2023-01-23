import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { ThemeService } from './core/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.themeService.initialTheme();
  }
}
