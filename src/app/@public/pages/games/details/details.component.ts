import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { Component } from '@angular/core';
import products from '@data/products.json';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  product = products[Math.floor(Math.random() * products.length)];
  selectImage = this.product.img;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  screens = [
    'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
    'https://media.rawg.io/media/screenshots/167/16728aa54b1130772b06cdcac128e056.jpg',
    'https://media.rawg.io/media/screenshots/3f7/3f711b42d24d9fdeb58faf1f69eccbe3.jpg',
    'https://media.rawg.io/media/screenshots/ef2/ef2be35eaf7e083cc5b51d2e2addf441.jpg',
    'https://media.rawg.io/media/screenshots/0d1/0d129ec2c410a11f4407ca469f92edda.jpg',
    'https://media.rawg.io/media/screenshots/bd5/bd51765bc9e33644cae768ee91c10e14.jpg',
    'https://media.rawg.io/media/screenshots/877/877d713525903c9f6019ad58b80650a6.jpg'
  ];
  constructor() { }

  changeValue(qty: number) {
    console.log(qty);
  }

  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

}
