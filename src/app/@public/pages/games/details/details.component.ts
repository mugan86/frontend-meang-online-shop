import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { loadData, closeAlert } from '@shared/alerts/alerts';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  product: IProduct;
  // products[Math.floor(Math.random() * products.length)];
  selectImage: string;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  randomItems: Array<IProduct> = [];
  screens = [];
  relationalProducts: Array<object> = [];
  loading: boolean;
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('parametro detalles', +params.id);
      loadData('Cargando datos', 'Espera mientras carga la información');
      this.loading = true;
      this.loadDataValue(+params.id);
    });
  }

  loadDataValue(id: number) {
    this.productService.getItem(id).subscribe( result => {
      console.log(result);
      this.product = result.product;
      this.selectImage = this.product.img;
      this.screens = result.screens;
      this.relationalProducts = result.relational;
      this.randomItems = result.random;
      this.loading = false;
      closeAlert();
    });
  }
  changeValue(qty: number) {
    console.log(qty);
  }

  selectOtherPlatform($event) {
    console.log($event.target.value);
    this.loadDataValue(+$event.target.value);
  }

  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

}
