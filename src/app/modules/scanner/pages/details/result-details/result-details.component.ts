import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultService } from 'src/app/data/service/result.service';
import { BacktestResponseResult } from 'src/app/data/types/backtest';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css'],
})
export class ResultDetailsComponent implements OnInit {
  data: BacktestResponseResult;
  subscription: Subscription = new Subscription();

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.subscription = this.resultService.detailsChanged.subscribe(
      (details: BacktestResponseResult) => {
        this.data = details;
      }
    );
    this.data = this.resultService.getDetails();
    console.log(this.data);
  }
}
