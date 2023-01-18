import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  @Input() title: string = 'Not Available';
  @Input() description: string = 'Not Available';

  constructor() {}

  ngOnInit(): void {
    this.description =
      this.description.toLowerCase() == 'n/a'
        ? 'Not Available'
        : this.description;
  }
}
