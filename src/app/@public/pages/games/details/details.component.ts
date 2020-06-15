import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { Component, OnInit } from '@angular/core';
import products from '@data/products.json';
import { ProductsService } from '@core/services/products.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  product = products[Math.floor(Math.random() * products.length)];
  selectImage = this.product.img;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  screens = [
    'https://media.rawg.io/media/games/e49/e49256363789d1dec316edf8ebb27ccf.jpg',
    'https://media.rawg.io/media/screenshots/ead/ead0a4f9dcdd1084fbb0da8ea5a26a5e.jpg',
    'https://media.rawg.io/media/screenshots/ff9/ff9005e66eefc3e9e908f8a918a575aa.jpg',
    'https://media.rawg.io/media/screenshots/05b/05b1ddd7e6a33f716be0d6c6fa8d1b8c.jpg',
    'https://media.rawg.io/media/screenshots/874/8749c4db3181be3ac374a0fd3d63a4f7.jpg',
    'https://media.rawg.io/media/screenshots/6ce/6ce002980f0e02d3b9e57308ee85c220.jpg',
    'https://media.rawg.io/media/screenshots/31e/31e4803dc0504d17b9b90fb0494a7a56.jpg'
  ];
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getItem(1).subscribe( result => {
      console.log(result);
    });
  }
  changeValue(qty: number) {
    console.log(qty);
  }

  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

}
