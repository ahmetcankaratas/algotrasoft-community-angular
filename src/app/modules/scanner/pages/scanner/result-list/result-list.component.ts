import { Component, OnInit } from '@angular/core';
import { MarketResponseResult } from 'src/app/data/types/market';
import { ResultService } from 'src/app/data/service/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  results: MarketResponseResult[] = [];

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    console.log(this.results);
    this.results = this.resultService.getResults();
  }
}
