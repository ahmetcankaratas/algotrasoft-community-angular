import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'scanner',
    loadChildren: () =>
      import('./modules/scanner/scanner.module').then((m) => m.ScannerModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
