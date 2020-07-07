import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { IPayment } from '@core/interfaces/stripe/payment.interface';
import { CREATE_PAY_ORDER } from '@graphql/operations/mutation/stripe/charge';
import { map } from 'rxjs/internal/operators/map';
import { CUSTOMER_CHARGES_LIST } from '@graphql/operations/query/stripe/charge';

@Injectable({
  providedIn: 'root',
})
export class ChargeService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  pay(payment: IPayment) {
    return this.set(CREATE_PAY_ORDER, { payment }).pipe(
      map((result: any) => {
        return result.chargeOrder;
      })
    );
  }

  listByCustomer(
    customer: string,
    endingBefore: string,
    startingAfter: string,
    limit: number = 5
  ) {
    return this.get(
      CUSTOMER_CHARGES_LIST,
      {
        customer,
        limit,
        startingAfter,
        endingBefore
      }
    ).pipe(map((result: any) => {
      return result.chargesByCustomer;
    }));
  }
}
