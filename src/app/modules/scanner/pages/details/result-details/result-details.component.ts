import { Component, Input, OnInit } from '@angular/core';
import { BacktestResponseResult } from 'src/app/data/types/backtest';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css'],
})
export class ResultDetailsComponent {
  @Input() data: BacktestResponseResult;

  constructor() {}
}
