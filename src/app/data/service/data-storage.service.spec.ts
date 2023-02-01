import { DataStorageService } from './data-storage.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BACKTESTS } from 'server/data';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/service/auth.service';
describe('DataStorageService', () => {
  let dataStorageService: DataStorageService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      providers: [DataStorageService, AuthService],
    });

    dataStorageService = TestBed.get(DataStorageService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should retrieve all stocks', async () => {
    dataStorageService.getStocks().subscribe((data) => {
      expect(data).toBeTruthy('No stocks returned');

      expect(data['stocks'].length).toBe(1000, 'Incorrect number of backtests');
      const stock = data.stocks.find((stock) => stock.id == 1);
      expect(stock?.symbol).toBe('GPRE');
    });

    const req = httpTestingController.expectOne(
      'https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/market.json'
    );

    expect(req.request.method).toEqual('GET');
    req.flush({ stocks: Object.values(BACKTESTS.market.stocks) });
  });

  it('should retrieve backtest details', async () => {
    const id = 3;
    dataStorageService.getBacktest(id).subscribe((data) => {
      expect(data).toBeTruthy('No backtest returned');

      expect(data.id).toBe(4, 'Incorrect number of backtests');
    });

    const req = httpTestingController.expectOne(
      `https://algotrasoft-community-angular-default-rtdb.europe-west1.firebasedatabase.app/backtests/results/${id}.json`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(BACKTESTS.backtests.results[id]);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
