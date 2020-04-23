import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-date-picker-legal-age',
  templateUrl: './date-picker-legal-age.component.html',
  styleUrls: ['./date-picker-legal-age.component.scss']
})
export class DatePickerLegalAgeComponent implements OnInit {
  model: NgbDateStruct;
  @Output() newDate = new EventEmitter<NgbDateStruct>();
  constructor() { }

  ngOnInit(): void {
  }

  selectDateChange() {
    console.log(this.model);
    this.newDate.emit(this.model);
  }

}
