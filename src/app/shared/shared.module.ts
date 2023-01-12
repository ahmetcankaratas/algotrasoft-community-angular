import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, CoverComponent],
})
export class SharedModule {}
