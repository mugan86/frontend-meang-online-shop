import { IRegisterForm } from '@core/interfaces/register.interface';
import { Injectable } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { UPDATE_USER, BLOCK_USER, ACTIVE_USER_EMAIL } from '@graphql/operations/mutation/user';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService extends ApiService{

  constructor(private usersService: UsersService, apollo: Apollo) {
    super(apollo);
  }

  register(user: IRegisterForm) {
    return this.usersService.register(user);
  }

  update(user: IRegisterForm) {
    return this.set(
      UPDATE_USER,
      {
        user,
        include: false
      }
    ).pipe(map((result: any) => {
      return result.updateUser;
    }));
  }

  unblock(id: string, unblock: boolean = false, admin: boolean = false) {
    return this.set(
      BLOCK_USER, { id, unblock, admin }
    ).pipe(map((result: any) => {
      return result.blockUser;
    }));
  }

  sendEmailActive(id: string, email: string) {
    return this.set(
      ACTIVE_USER_EMAIL,
      { id, email}
    ).pipe(map((result: any) => {
      return result.activeUserEmail;
    }));
  }
}
