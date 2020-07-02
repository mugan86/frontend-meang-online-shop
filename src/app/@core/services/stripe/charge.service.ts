import { PROCCESS_ORDER_PAY } from './../../../@graphql/operations/mutation/stripe/charge';
import { IPayment } from './../../interfaces/stripe/payment.interface';
import { ApiService } from './../../../@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class ChargeService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }
  chargeOrder(payment: IPayment) {
    return this.set(
      PROCCESS_ORDER_PAY,
      { payment }
    ).pipe(map((result: any) => {
      return result.chargeOrder;
    }));
  }
}
