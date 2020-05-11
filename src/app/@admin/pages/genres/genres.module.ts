import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';
import { TablePaginationModule } from '@shared/table-pagination/table-pagination.module';


@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    TablePaginationModule
  ]
})
export class GenresModule { }
