import { Component, Input, OnInit } from '@angular/core';
import { MarketResponseResult } from 'src/app/data/types/market';
import { ResultService } from 'src/app/data/service/result.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  results: MarketResponseResult[] = [];
  subscription: Subscription = new Subscription();
  @Input() filteredSymbol: string = '';

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.subscription = this.resultService.resultsChanged.subscribe(
      (results: MarketResponseResult[]) => {
        console.log(results);
        this.results = results;
      }
    );
    this.results = this.resultService.getResults();
    console.log(this.results);
  }
}
