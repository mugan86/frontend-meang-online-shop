import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselItemsModule, ProductItemModule } from 'projects/shop-ui/src/public-api';
import { CartModule } from '@core/components/cart/cart.module';
import { ModalVideoComponent } from '@core/components/modal-video/modal-video.component';

@NgModule({
  declarations: [HomeComponent, ModalVideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselItemsModule,
    ProductItemModule,
    CartModule
  ],
  entryComponents: [ModalVideoComponent]
})
export class HomeModule { }
