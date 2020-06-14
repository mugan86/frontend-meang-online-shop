import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { RatingModule, QuantitySelectorModule } from '@mugan86/ng-shop-ui';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    RatingModule,
    QuantitySelectorModule
  ]
})
export class DetailsModule { }
