import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info.component';

@NgModule({
  declarations: [GeneralInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [GeneralInfoComponent]
})
export class GeneralInfoModule { }
