import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { ScannerRoutingModule } from './scanner-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './pages/scanner/search/search.component';
import { ResultListComponent } from './pages/scanner/result-list/result-list.component';
import { ResultItemComponent } from './pages/scanner/result-list/result-item/result-item.component';
import { DetailsComponent } from './pages/details/details.component';
import { ResultDetailsComponent } from './pages/details/result-details/result-details.component';
import { BarGraphComponent } from './pages/details/bar-graph/bar-graph.component';
import { InfoComponent } from './pages/details/info/info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ScannerComponent,
    SearchComponent,
    ResultListComponent,
    ResultItemComponent,
    DetailsComponent,
    ResultDetailsComponent,
    BarGraphComponent,
    InfoComponent,
  ],
  imports: [CommonModule, SharedModule, ScannerRoutingModule, FormsModule],
})
export class ScannerModule {}
