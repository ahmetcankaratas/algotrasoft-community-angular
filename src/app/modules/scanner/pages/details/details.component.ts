import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data/service/data-storage.service';
import { ResultService } from 'src/app/data/service/result.service';
import { BacktestDetails } from 'src/app/shared/models/backtest.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  data: BacktestDetails;
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
