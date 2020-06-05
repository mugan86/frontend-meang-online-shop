import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { PasswordService } from '@core/services/password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  token: string;
  values = {
    password: '',
    passwordTwo: ''
  };
  constructor(
    private route: ActivatedRoute,
    private passwordService: PasswordService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.token = params.token;
    });
  }

  ngOnInit(): void {}

  reset() {
    // verificar contraseñas iguales
    if (this.values.password !== this.values.passwordTwo) {
      basicAlert(TYPE_ALERT.WARNING, 'Las contraseñas no coinciden y no es válido para cambiar la contraseña. Procura asegurarte que las contraseñas son iguales');
      return;
    }

    // Enviando la información al servidor
    this.passwordService.change(this.token, this.values.password).subscribe( result => {
      if (result.status) {
        basicAlert(TYPE_ALERT.SUCCESS, result.message);
        this.router.navigate(['login']);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, result.message);
    });
  }
}
