import { Component, Input } from '@angular/core';
import { MarketResponseResult } from 'src/app/data/types/market';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css'],
})
export class ResultItemComponent {
  @Input() result!: MarketResponseResult ;
}
