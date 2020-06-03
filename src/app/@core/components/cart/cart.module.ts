import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemModule } from '../cart-item/cart-item.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartItemModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
