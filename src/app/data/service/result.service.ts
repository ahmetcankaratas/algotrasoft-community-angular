import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BacktestResponseResult } from '../types/backtest';
import { MarketResponseResult } from '../types/market';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  resultsChanged = new Subject<MarketResponseResult[]>();
  detailsChanged = new Subject<BacktestResponseResult>();

  private results: MarketResponseResult[] = [];
  private details: BacktestResponseResult

  getResults() {
    return this.results.slice();
  }

  setResults(results: MarketResponseResult[]) {
    this.results = results;
    this.resultsChanged.next(this.results.slice());
  }

  getDetails() {
    return { ...this.details };
  }

  setDetails(details: BacktestResponseResult) {
    this.details = details;
    this.detailsChanged.next(this.details as BacktestResponseResult);
  }
}
