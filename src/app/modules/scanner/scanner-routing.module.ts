import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ScannerComponent } from './pages/scanner/scanner.component';

export const routes: Routes = [
  {
    path: '',
    component: ScannerComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerRoutingModule {}
