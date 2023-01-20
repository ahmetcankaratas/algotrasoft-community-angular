import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { ThemeService } from 'src/app/core/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isDarkTheme = false;
  isHamburgerMenu = false;
  private userSub: Subscription = new Subscription();
  private themeSub: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeSub = this.themeService.theme.subscribe((theme) => {
      this.isDarkTheme = theme === 'dark' ? true : false;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onToggleTheme() {
    this.themeService.setTheme();
  }

  onNavToggle() {
    this.isHamburgerMenu = !this.isHamburgerMenu;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.themeSub.unsubscribe();
  }
}
