import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BacktestDetails } from 'src/app/shared/models/backtest.model';
import { StockDetails } from 'src/app/shared/models/market.model';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  resultsChanged = new Subject<StockDetails[]>();
  detailsChanged = new Subject<BacktestDetails>();

  private results: StockDetails[] = [];
  private details: BacktestDetails;

  getResults() {
    return this.results.slice();
  }

  setResults(results: StockDetails[]) {
    this.results = results;
    this.resultsChanged.next(this.results.slice());
  }

  getDetails() {
    return { ...this.details };
  }

  setDetails(details: BacktestDetails) {
    this.details = details;
    this.detailsChanged.next(this.details as BacktestDetails);
  }
}
