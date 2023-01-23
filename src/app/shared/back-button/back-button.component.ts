import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {
  constructor(private router: Router, private route:ActivatedRoute) {}

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
