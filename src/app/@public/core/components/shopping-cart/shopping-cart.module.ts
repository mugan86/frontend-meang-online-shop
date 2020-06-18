import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { QuantitySelectorModule } from '@mugan86/ng-shop-ui';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    QuantitySelectorModule
  ],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
