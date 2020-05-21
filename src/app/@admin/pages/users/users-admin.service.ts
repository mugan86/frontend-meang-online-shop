import { IRegisterForm } from '@core/interfaces/register.interface';
import { Injectable } from '@angular/core';
import { UsersService } from '@core/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

  constructor(private usersService: UsersService) { }

  register(user: IRegisterForm) {
    return this.usersService.register(user);
  }
}
