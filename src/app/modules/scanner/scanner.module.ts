import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { ScannerRoutingModule } from './scanner-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './pages/scanner/search/search.component';
import { ResultListComponent } from './pages/scanner/result-list/result-list.component';
import { ResultItemComponent } from './pages/scanner/result-list/result-item/result-item.component';

@NgModule({
  declarations: [ScannerComponent, SearchComponent, ResultListComponent, ResultItemComponent],
  imports: [CommonModule, SharedModule, ScannerRoutingModule],
})
export class ScannerModule {}
