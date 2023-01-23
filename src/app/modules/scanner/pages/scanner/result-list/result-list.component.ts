import { Component, Input, OnInit } from '@angular/core';
import { StockDetails } from 'src/app/shared/models/market.model';
import { ResultService } from 'src/app/data/service/result.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html'
})
export class ResultListComponent implements OnInit {
  results: StockDetails[] = [];
  subscription: Subscription = new Subscription();
  visibilityStatus: { [key: number]: any } = {};

  @Input() filteredSymbol: string = '';

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.subscription = this.resultService.resultsChanged.subscribe(
      (results: StockDetails[]) => {
        console.log(results);
        this.results = results;
      }
    );
    this.results = this.resultService.getResults();
  }

  onVisibilityChanged(index: number, status: any) {
    this.visibilityStatus[index] = status;
    console.log(this.visibilityStatus);
  }
}
