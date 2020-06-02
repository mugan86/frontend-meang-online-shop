import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { QuantitySelectorModule } from './../quantity-selector/quantity-selector.module';

@NgModule({
  declarations: [CartItemComponent],
  imports: [
    CommonModule,
    QuantitySelectorModule
  ],
  exports: [CartItemComponent],
})
export class CartItemModule { }
