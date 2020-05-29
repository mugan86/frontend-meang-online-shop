import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    FormsModule
  ]
})
export class ForgotModule { }
