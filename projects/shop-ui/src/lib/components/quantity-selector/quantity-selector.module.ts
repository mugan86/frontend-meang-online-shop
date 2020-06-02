import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantitySelectorComponent } from './quantity-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuantitySelectorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [QuantitySelectorComponent],
})
export class QuantitySelectorModule { }
