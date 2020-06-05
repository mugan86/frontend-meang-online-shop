import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  token: string;
  values: any =  {
    password: '',
    passwordTwo: '',
    birthday: ''
  };
  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.token = params.token;
    });
  }

  ngOnInit(): void {
    const data = new Date();
    data.setFullYear(data.getFullYear() - 18);
    this.values.birthday = (data.toISOString()).substring(0, 10);
  }
  private formatNumbers(num: number | string ) {
    return (+num < 10) ? `0${num}` : num;
  }
  dataAsign($event) {
    const fecha = `${$event.year}-${this.formatNumbers($event.month)}-${this.formatNumbers($event.day)}`;
    this.values.birthday = fecha;
  }
  add() {
    if (this.values.password !== this.values.passwordTwo) {
      basicAlert(TYPE_ALERT.WARNING, 'Las contraseñas no coinciden y no es válido para activar el usuario. Procura asegurarte que las contraseñas son iguales');
      return;
    }
    // Todo validado, vamos a enviarlo a la api de graphql
    // servicio => active
    this.userService.active(this.token, this.values.birthday, this.values.password).subscribe(
      result => {
        if (result.status) {
          basicAlert(TYPE_ALERT.SUCCESS, result.message);
          this.router.navigate(['login']);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, result.message);
      }
    );
  }
}
