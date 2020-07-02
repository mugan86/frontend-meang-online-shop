import { ApiService } from '@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_STRIPE_CUSTOMER } from '@graphql/operations/mutation/stripe/customer';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  create(name: string, email: string) {
    return this.set(CREATE_STRIPE_CUSTOMER, { name, email }).pipe(
      map((result: any) => {
        return result.createCustomer;
      })
    );
  }
}
