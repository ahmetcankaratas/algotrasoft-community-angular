import { Component, Input } from '@angular/core';
import { DataStorageService } from 'src/app/data/service/data-storage.service';
import { BacktestDetails } from 'src/app/shared/models/backtest.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css'],
})
export class ResultItemComponent {
  result: BacktestDetails;
  isLoading: boolean = true;
  @Input() id: number;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    // in the firebase database, the id's start at 1, but the array index starts at 0
    this.dataStorageService.getBacktest(this.id - 1).subscribe((results) => {
      this.result = results;
      this.isLoading = false;
    });
  }
}
