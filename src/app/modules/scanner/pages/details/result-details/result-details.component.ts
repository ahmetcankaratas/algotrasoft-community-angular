import { Component, Input, OnInit } from '@angular/core';
import { BacktestDetails } from 'src/app/shared/models/backtest.model';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css'],
})
export class ResultDetailsComponent {
  @Input() data: BacktestDetails;

  constructor() {}
}
