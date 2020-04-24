import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-date-picker-legal-age',
  templateUrl: './date-picker-legal-age.component.html',
  styleUrls: ['./date-picker-legal-age.component.scss']
})
export class DatePickerLegalAgeComponent implements OnInit {
  model: NgbDateStruct;
  CURRENTDAY = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  };
  minDate: NgbDateStruct = {
    year: this.CURRENTDAY.year - 100,
    month: this.CURRENTDAY.month,
    day: this.CURRENTDAY.day
  };
  maxDate: NgbDateStruct = {
    year: this.CURRENTDAY.year - 18,
    month: this.CURRENTDAY.month,
    day: this.CURRENTDAY.day
  };
  @Output() newDate = new EventEmitter<NgbDateStruct>();
  constructor() { }
  ngOnInit(): void {
  }

  selectDateChange() {
    console.log(this.model);
    this.newDate.emit(this.model);
  }

}
