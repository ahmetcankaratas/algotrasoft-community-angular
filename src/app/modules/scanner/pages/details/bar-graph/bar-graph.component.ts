import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent {
  @Input() value: number;
  @Input() description: string;
  width: number;
  barColor: string;

  constructor() {}

  ngOnInit(): void {
    this.width = Math.min(100, this.value < 0 ? this.value * -1 : this.value);
    this.barColor = this.value < 0 ? 'bg-red-500' : 'bg-darkCyan';
  }
}
