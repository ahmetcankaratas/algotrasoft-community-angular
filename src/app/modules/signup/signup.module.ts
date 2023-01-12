import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './page/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, FormsModule,SharedModule, SignupRoutingModule],
  exports: [SignupComponent],
})
export class SignupModule {}
