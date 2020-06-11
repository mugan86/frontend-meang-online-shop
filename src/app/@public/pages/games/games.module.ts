import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { ProductCategoryListModule } from '@core/components/product-category-list/product-category-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ProductCategoryListModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class GamesModule { }
