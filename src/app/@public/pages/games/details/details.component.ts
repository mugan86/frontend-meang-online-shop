import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { Component, OnInit } from '@angular/core';
import products from '@data/products.json';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product = products[Math.floor(Math.random() * products.length)];
  selectImage = this.product.img;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  constructor() { }

  ngOnInit(): void {
  }

}
