import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutResumeModule } from './checkout-resume/checkout-resume.module';
import { StripePaymentFormModule } from '@mugan86/stripe-payment-form';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CheckoutResumeModule,
    StripePaymentFormModule,
    FormsModule
  ]
})
export class CheckoutModule { }
