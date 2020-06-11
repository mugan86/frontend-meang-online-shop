import { RatingModule } from './../rating/rating.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@NgModule({
  declarations: [ProductItemComponent, TruncatePipe],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [ProductItemComponent]
})
export class ProductItemModule { }
