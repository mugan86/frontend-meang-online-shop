import { ProductCategoryListModule } from '@core/components/product-category-list/product-category-list.module';
import { CarouselItemsModule } from '@mugan86/ng-shop-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselItemsModule,
    ProductCategoryListModule
  ]
})
export class HomeModule { }
