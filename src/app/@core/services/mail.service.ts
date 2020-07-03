import { IMail } from './../interfaces/mail.interface';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { SEND_MAIL_ACTION } from '../../@graphql/operations/mutation/mail';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class MailService extends ApiService{
  constructor(apollo: Apollo) {
    super(apollo);
  }

  send(mail: IMail) {
      return this.set(
          SEND_MAIL_ACTION,
          {mail}
      ).pipe(map((result: any) => {
          return result.sendEmail;
      }));
  }

}
