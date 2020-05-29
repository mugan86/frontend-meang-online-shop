import { Component, OnInit } from '@angular/core';
import { EMAIL_PATTERN } from '@core/constants/regex';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  emailValue: string;
  pattern = EMAIL_PATTERN;
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    console.log('Reseteando');
  }

}
