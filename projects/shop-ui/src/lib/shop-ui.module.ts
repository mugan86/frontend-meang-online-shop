import { NgModule } from '@angular/core';
import { RatingModule } from './components/rating/rating.module';
import { CarouselItemsModule } from './components/carousel-items/carousel-items.module';
import { ProductItemModule } from './components/product-item/product-item.module';
import { FormsModule } from '@angular/forms';

const MODULES = [
  FormsModule,
  RatingModule,
  CarouselItemsModule,
  ProductItemModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class ShopUiModule { }
