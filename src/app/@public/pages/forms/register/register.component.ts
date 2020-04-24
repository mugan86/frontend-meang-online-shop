import { Component, OnInit } from '@angular/core';
import { IRegisterForm } from '@core/interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: IRegisterForm = {
    name: '',
    lastname: '',
    password: '',
    repeatPassword: '',
    email: '',
    birthday: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  dataAsign($event) {
    console.log('register cogiendo dato', $event);
    this.register.birthday = $event;
  }

  registerUser() {
    console.log(this.register);
  }

}
