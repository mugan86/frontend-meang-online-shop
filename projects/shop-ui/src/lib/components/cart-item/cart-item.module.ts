import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { QuantitySelectorModule } from './../quantity-selector/quantity-selector.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuantitySelectorModule
  ],
  exports: [CartItemComponent, ],
})
export class CartItemModule { }
