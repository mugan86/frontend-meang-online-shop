import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getByPlatform(){}

  getByLastUnitsOffers(){
    console.log('últimas unidades y ofertas');
  }
}
