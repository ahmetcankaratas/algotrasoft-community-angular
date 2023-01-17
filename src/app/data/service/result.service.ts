import { Injectable } from '@angular/core';
import { MarketResponse } from '../types/market';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private results: MarketResponse = {
    data: {
      stocks: [
        {
          id: 1,
          name: 'Green Plains, Inc.',
          symbol: 'GPRE',
          return_yearly_1: 6.3,
        },
        {
          id: 2,
          name: 'TPG Specialty Lending, Inc.',
          symbol: 'TSLX',
          return_yearly_1: -2.4,
        },
        {
          id: 3,
          name: 'First Trust High Income ETF',
          symbol: 'FTHI',
          return_yearly_1: 4.3,
        },
      ],
    },
  };

  getResults() {
    return this.results.data.stocks.slice();
  }
}
