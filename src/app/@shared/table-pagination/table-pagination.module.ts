import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './table-pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TablePaginationComponent],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [TablePaginationComponent]
})
export class TablePaginationModule { }
