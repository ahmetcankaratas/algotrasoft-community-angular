import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let root: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });

    service = TestBed.inject(ThemeService);
    root = window.document.documentElement;
    spyOn(root.classList, 'add');
    spyOn(root.classList, 'remove');
  });

  it('should have default theme as "dark"', () => {
    expect(service.theme.value).toBe('dark');
  });

  it('should add theme class to root element', () => {
    if (!localStorage.getItem('theme')) {
      service.initialTheme();
      expect(root.classList.add).toHaveBeenCalledWith('dark');
    } else {
      expect(root.classList.add).not.toHaveBeenCalled();
    }
  });

  it('should change theme to "light" when setTheme is called', () => {
    service.initialTheme();
    if (localStorage.getItem('theme') === 'dark') {
      service.setTheme();
      expect(root.classList.remove).toHaveBeenCalledWith('dark');
      expect(root.classList.add).toHaveBeenCalledWith('light');
      expect(service.theme.value).toBe('light');
    } else {
      service.setTheme();
      expect(root.classList.remove).toHaveBeenCalledWith('light');
      expect(root.classList.add).toHaveBeenCalledWith('dark');
      expect(service.theme.value).toBe('dark');
    }
  });

  it('should store theme in local storage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');
    service.initialTheme();
    expect(localStorage.getItem).toHaveBeenCalledWith('theme');
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    service.setTheme();
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
