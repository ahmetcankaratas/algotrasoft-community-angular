import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    LoadingSpinnerComponent,
    BackButtonComponent,
    FilterPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    LoadingSpinnerComponent,
    BackButtonComponent,
    FilterPipe,
  ],
})
export class SharedModule {}
