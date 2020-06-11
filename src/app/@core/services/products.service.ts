import { map } from 'rxjs/internal/operators/map';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { ACTIVE_FILTERS } from '@core/constants/filters';
import { SHOP_LAST_UNITS_OFFERS, SHOP_PRODUCT_BY_PLATFORM } from '@graphql/operations/query/shop-product';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getByPlatform(
    page: number = 1,
    itemsPage: number = 10,
    active: ACTIVE_FILTERS = ACTIVE_FILTERS.ACTIVE,
    random: boolean = false,
    platform: Array<string> = ['-1'],
    showInfo: boolean = false,
    showPlatform: boolean = false,
  ){
    return this.get(
      SHOP_PRODUCT_BY_PLATFORM,
      {
        page,
        itemsPage,
        active,
        random,
        platform,
        showInfo,
        showPlatform
      }
    ).pipe(map((result: any) => {
      const data = result.shopProductsPlatforms;
      return {
        info: data.info,
        result: this.manageInfo(data.shopProducts)
      };
    }));
  }

  getByLastUnitsOffers(
    page: number = 1,
    itemsPage: number = 10,
    active: ACTIVE_FILTERS = ACTIVE_FILTERS.ACTIVE,
    random: boolean = false,
    topPrice: number = -1,
    lastUnits: number = -1,
    showInfo: boolean = false,
    showPlatform: boolean = false
  ){
    return this.get(
      SHOP_LAST_UNITS_OFFERS,
      {
        page,
        itemsPage,
        active,
        random,
        topPrice,
        lastUnits,
        showInfo,
        showPlatform
      }
    ).pipe(map((result: any) => {
      const data = result.shopProductsOffersLast;
      return {
        info: data.info,
        result: this.manageInfo(data.shopProducts)
      };
    }));
  }

  private manageInfo(listProducts) {
      const resultList: Array<IProduct> = [];
      listProducts.map((shopObject) => {
        console.log(shopObject);
        resultList.push({
          id: shopObject.id,
          img: shopObject.product.img,
          name: shopObject.product.name,
          rating: shopObject.product.rating,
          description: (shopObject.platform) ? shopObject.platform.name : '',
          qty: 1,
          price: shopObject.price,
          stock: shopObject.stock
        });
      });
      return resultList;
  }
}
