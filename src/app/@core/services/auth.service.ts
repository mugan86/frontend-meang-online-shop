import { ISession, IMeData } from '@core/interfaces/session.interface';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { LOGIN_QUERY, ME_DATA_QUERY } from '@graphql/operations/query/user';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs';
import { optionsWithDetails } from '@shared/alerts/alerts';
import { REDIRECTS_ROUTES } from '@core/constants/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{
  accessVar = new Subject<IMeData>();
  accessVar$ = this.accessVar.asObservable();
  constructor(apollo: Apollo) {
    super(apollo);
  }

  updateSession(newValue: IMeData) {
    this.accessVar.next(newValue);
  }

  start() {

    if (this.getSession() !== null) {
      this.getMe().subscribe((result: IMeData) => {
        if (!result.status) {
          this.resetSession();
          return;
        }
        this.updateSession(result);
      });
      console.log('Sesión iniciada');
      return;
    }
    this.updateSession({
      status: false
    });
    console.log('Sesión no iniciada');
  }

  // Añadir métodos para consumir la info de la API
  login(email: string, password: string) {
    return this.get(LOGIN_QUERY, { email, password, include: false }).pipe(
      map( (result: any) => {
        return result.login;
      })
    );
  }

  getMe() {
    return this.get(ME_DATA_QUERY, {
      include: false
    },
    {
      headers: new HttpHeaders({
        Authorization: (this.getSession() as ISession).token
      })
    }).pipe(map((result: any) => {
      return result.me;
    }));
  }

  setSession(token: string, expiresTimeInHours = 24) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeInHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token
    };
    localStorage.setItem('session', JSON.stringify(session));
  }

  getSession(): ISession {
    return JSON.parse(localStorage.getItem('session'));
  }

  async resetSession(routesUrl: string = '') {
    const result = await optionsWithDetails(
      'Cerrar sesión',
      `¿Estás seguro que quieres cerrar la sesión?`,
      400,
      'Si, cerrar', // true
      'No'
    ); // false
    if (!result) {
      return;
    }
    // rutas que usaremos para redireccionar
    if (REDIRECTS_ROUTES.includes(routesUrl)) {
      // En el caso de encontrarla marcamos para que redireccione
      localStorage.setItem('route_after_login', routesUrl);
    }
    localStorage.removeItem('session');
    this.updateSession({status: false});
  }
}
