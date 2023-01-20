import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { BacktestDetails } from 'src/app/shared/models/backtest.model';
import { MarketResponse } from 'src/app/shared/models/market.model';

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
    return this.http.get<BacktestDetails>(
      `https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/backtests/results/${id}.json`
    );
  }
}
