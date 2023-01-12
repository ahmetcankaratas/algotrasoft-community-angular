import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { ScannerRoutingModule } from './scanner.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ScannerComponent],
  imports: [CommonModule, SharedModule, ScannerRoutingModule],
  exports: [ScannerComponent],
})
export class ScannerModule {}
