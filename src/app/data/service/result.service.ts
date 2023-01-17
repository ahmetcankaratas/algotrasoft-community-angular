import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MarketResponse, MarketResponseResult } from '../types/market';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  resultsChanged = new Subject<MarketResponseResult[]>();

  private results: MarketResponseResult[] = []

  getResults() {
    return this.results.slice();
  }

  setResults(results: MarketResponseResult[]) {
    console.log(results)
    this.results = results;
    this.resultsChanged.next(this.results.slice());
  }
}
