import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { RESET_PASSWORD, CHANGE_PASSWORD } from '@graphql/operations/mutation/password';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  reset(email: string) {
    return this.set(
      RESET_PASSWORD,
      {
        email
      }
    ).pipe(map((result: any) => {
      return result.resetPassword;
    }));
  }

  change(token: string, password: string) {
    const user = JSON.parse(atob(token.split('.')[1])).user;
    return this.set(
      CHANGE_PASSWORD,
      {
        id: user.id,
        password
      },
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    ).pipe(map((result: any) => {
      return result.changePassword;
    }));
  }
}
