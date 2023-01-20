import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataStorageService } from 'src/app/data/service/data-storage.service';
import { ResultService } from 'src/app/data/service/result.service';
import { BacktestResponseResult } from 'src/app/data/types/backtest';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  data: BacktestResponseResult;
  isLoading: boolean = true;

  constructor(
    private dataStorageService: DataStorageService,
    private resultService: ResultService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.dataStorageService.getBacktest(id).subscribe((results) => {
      this.resultService.setDetails(results);
      this.data = results;
      this.isLoading = false;

    });
  }
}
