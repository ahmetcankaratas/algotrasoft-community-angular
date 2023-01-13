import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { ScannerRoutingModule } from './scanner-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ScannerComponent],
  imports: [CommonModule, SharedModule, ScannerRoutingModule],
})
export class ScannerModule {}
