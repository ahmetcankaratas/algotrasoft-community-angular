import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html'
})
export class CoverComponent {
  @Input() header: string | undefined;
  @Input() description: string | undefined;
  constructor() {}
}
