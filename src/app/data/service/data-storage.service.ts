import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { BacktestResponseResult } from '../types/backtest';
import { MarketResponse } from '../types/market';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getStocks() {
    return this.http.get<MarketResponse>(
      `https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/market.json`
    );
  }

  getBacktest(id: number) {
    return this.http.get<BacktestResponseResult>(
      `https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/backtests/results/${id}.json`
    );
  }
}
