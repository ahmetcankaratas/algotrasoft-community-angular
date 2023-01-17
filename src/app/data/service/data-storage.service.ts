import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketResponse } from '../types/market';
import { ResultService } from './result.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private resultService: ResultService, private http: HttpClient) {}

  getStocks() {
    return this.http
      .get<MarketResponse>(
        'https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/market.json'
      )
  }
}
