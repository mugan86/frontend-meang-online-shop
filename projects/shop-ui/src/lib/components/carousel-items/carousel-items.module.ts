import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemsComponent } from './carousel-items.component';

@NgModule({
  declarations: [CarouselItemsComponent],
  imports: [
    CommonModule
  ],
  exports: [CarouselItemsComponent]
})
export class CarouselItemsModule { }
