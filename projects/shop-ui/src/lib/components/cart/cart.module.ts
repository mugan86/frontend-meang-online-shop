import { CartItemModule } from './../cart-item/cart-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartItemModule
  ],
  exports: [CartComponent],
})
export class CartModule { }
