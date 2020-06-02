import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselItemsModule, ProductItemModule } from 'projects/shop-ui/src/public-api';
import { CartModule } from 'projects/shop-ui/src/lib/components/cart/cart.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselItemsModule,
    ProductItemModule,
    CartModule
  ]
})
export class HomeModule { }
