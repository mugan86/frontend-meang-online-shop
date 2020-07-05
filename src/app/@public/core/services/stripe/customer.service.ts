import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { CREATE_CUSTOMER_STRIPE } from '@graphql/operations/mutation/stripe/customer';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  add(name: string, email: string) {
    return this.set(
      CREATE_CUSTOMER_STRIPE,
      { name, email }
    ).pipe(map((result: any) => {
      return result.createCustomer;
    }));
  }
}
