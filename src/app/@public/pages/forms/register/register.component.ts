import { IRegisterForm } from '@core/interfaces/register.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: IRegisterForm = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    birthday: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  private formatNumbers(num: number | string ) {
    return (+num < 10) ? `0${num}` : num;
  }
  dataAsign($event) {
    console.log('register cogiendo dato', $event);
    const fecha = `${$event.year}-${this.formatNumbers($event.month)}-${this.formatNumbers($event.day)}`;
    this.register.birthday = fecha;
  }

  add() {
    console.log('Enviando datos', this.register);
  }
}
