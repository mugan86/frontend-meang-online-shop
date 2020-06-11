import { ACTIVE_FILTERS } from './../../../@core/constants/filters';
import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  productsList: Array<IProduct> = [];
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.products.getByPlatform(
      1, 20, ACTIVE_FILTERS.ACTIVE,
      false, '18'
    ).subscribe(result => {
      console.log('products ps4', result);
      this.productsList = result;
    });
  }

}
