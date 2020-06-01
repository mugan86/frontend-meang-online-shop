import { NgModule } from '@angular/core';
import { RatingModule } from './components/rating/rating.module';
import { CarouselItemsModule } from './components/carousel-items/carousel-items.module';
import { ProductItemModule } from './components/product-item/product-item.module';

@NgModule({
  declarations: [],
  imports: [
    RatingModule,
    CarouselItemsModule,
    ProductItemModule
  ],
  exports: [
    RatingModule,
    CarouselItemsModule,
    ProductItemModule
  ]
})
export class ShopUiModule { }
