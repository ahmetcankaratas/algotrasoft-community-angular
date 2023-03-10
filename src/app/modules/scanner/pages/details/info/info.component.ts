import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent {
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {
    this.description =
      this.description.toLowerCase() == 'n/a'
        ? 'Not Available'
        : this.description;
  }
}
