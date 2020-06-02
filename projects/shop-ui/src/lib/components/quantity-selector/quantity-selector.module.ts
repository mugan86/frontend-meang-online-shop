import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantitySelectorComponent } from './quantity-selector.component';

@NgModule({
  declarations: [QuantitySelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [QuantitySelectorComponent],
})
export class QuantitySelectorModule { }
