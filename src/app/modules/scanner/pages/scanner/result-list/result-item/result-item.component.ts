import { Component, Input } from '@angular/core';
import { StockDetails } from 'src/app/shared/models/market.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css'],
})
export class ResultItemComponent {
  @Input() result: StockDetails;
}
