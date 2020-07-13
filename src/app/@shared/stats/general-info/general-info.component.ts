import { Component, Input } from '@angular/core';
import { IGeneralInfo } from './general-info.interface';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  @Input() item: IGeneralInfo;
}
