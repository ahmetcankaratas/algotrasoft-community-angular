import { Injectable, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = new BehaviorSubject<string>('dark');
  root = window.document.documentElement;
  constructor() {}

  initialTheme() {
    const colorTheme: string | null = localStorage.getItem('theme');

    if (!colorTheme) {
      localStorage.setItem('theme', this.theme.value);
      this.root.classList.add(this.theme.value);
      return;
    } else {
      this.theme.next(colorTheme);
      this.root.classList.add(this.theme.value);
    }
  }

  setTheme() {
    const theme = this.theme.value === 'dark' ? 'light' : 'dark';
    this.root.classList.remove(this.theme.value);
    this.theme.next(theme);
    localStorage.setItem('theme', this.theme.value);
    this.root.classList.add(this.theme.value);
  }
}
