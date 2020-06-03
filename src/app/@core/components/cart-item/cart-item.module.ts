import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { QuantitySelectorModule } from '@mugan86/ng-shop-ui';


@NgModule({
  declarations: [CartItemComponent],
  imports: [
    CommonModule,
    QuantitySelectorModule
  ],
  exports: [CartItemComponent],
})
export class CartItemModule { }
