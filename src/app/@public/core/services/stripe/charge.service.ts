import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { IPayment } from '@core/interfaces/stripe/payment.interface';
import { CREATE_PAY_ORDER } from '@graphql/operations/mutation/stripe/charge';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ChargeService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  pay(payment: IPayment) {
    return this.set(
      CREATE_PAY_ORDER,
      { payment }
    ).pipe(map((result: any) => {
      return result.chargeOrder;
    }));
  }
}
