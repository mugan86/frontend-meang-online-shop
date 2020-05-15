import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './table-pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TablePaginationComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule
  ],
  exports: [TablePaginationComponent]
})
export class TablePaginationModule { }
