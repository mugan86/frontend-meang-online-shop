import { NgModule } from '@angular/core';
import { RatingModule } from './components/rating/rating.module';
import { CarouselItemsModule } from './components/carousel-items/carousel-items.module';
import { ProductItemModule } from './components/product-item/product-item.module';
import { FormsModule } from '@angular/forms';
import { CartModule } from './components/cart/cart.module';
import { CartItemModule } from './components/cart-item/cart-item.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CartModule,
    CartItemModule,
    RatingModule,
    CarouselItemsModule,
    ProductItemModule
  ],
  exports: [
    FormsModule,
    RatingModule,
    CartModule,
    CartItemModule,
    CarouselItemsModule,
    ProductItemModule
  ]
})
export class ShopUiModule { }
