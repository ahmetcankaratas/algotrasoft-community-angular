import { Component, Input, OnInit } from '@angular/core';
import { StockDetails } from 'src/app/shared/models/market.model';
import { ResultService } from 'src/app/data/service/result.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  results: StockDetails[] = [];
  subscription: Subscription = new Subscription();
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
}
