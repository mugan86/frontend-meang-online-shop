import { IProduct } from './../../interfaces/product.interface';
import {
  CURRENCY_LIST,
  CURRENCIES_SYMBOL,
} from './../../constants/currencies.enum';
import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'shop-product-item',
  templateUrl: './product-item.component.html',
  styles: [
    `
      /********************* Shopping Demo-6 **********************/
      .product-grid,
      .product-grid .product-image {
        overflow: hidden;
      }
      .product-grid {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        position: relative;
        transition: all 0.5s ease 0s;
        border: 1px solid #afa3a338;
        border-radius: 8px;
      }
      .product-grid:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        cursor: pointer
      }
      .product-grid .product-image a {
        display: block;
      }
      .product-grid .product-image img {
        width: 100%;
        height: auto;
        transition: all 0.5s ease 0s;
      }
      .product-grid:hover .product-image img {
        transform: scale(1.1);
      }
      .product-grid .product-content {
        padding: 12px 12px 15px;
        transition: all 0.5s ease 0s;
      }
      .product-grid:hover .product-content {
        opacity: 0;
      }
      .product-grid .title {
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
        margin: 0 0 10px;
        transition: all 0.3s ease 0s;
      }
      .product-grid .title a {
        color: #000;
      }
      .product-grid .title a:hover {
        color: #333;
      }
      .product-grid .price {
        font-size: 22px;
        font-weight: 800;
        color: #cc1c39;
        text-align: left;
        margin-left: 20px;
        margin-bottom: 12px;
      }
      .product-grid .price span {
        color: #999;
        font-size: 15px;
        font-weight: 400;
        text-decoration: line-through;
        margin-left: 7px;
        display: inline-block;
      }
      .product-grid .price span.discount-percentage {
        text-decoration: none;
      }
      .product-grid .social {
        background-color: #fff;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        opacity: 0;
        transform: translateX(-50%);
        position: absolute;
        bottom: -50%;
        left: 50%;
        z-index: 1;
        transition: all 0.5s ease 0s;
      }
      .product-grid:hover .social {
        opacity: 1;
        bottom: 20px;
      }

      .product-grid .social li {
        display: inline-block;
      }
      .product-grid .social li a {
        color: #909090;
        font-size: 16px;
        line-height: 45px;
        text-align: center;
        height: 45px;
        width: 45px;
        margin: 0 7px;
        border: 1px solid #909090;
        border-radius: 50px;
        display: block;
        position: relative;
        transition: all 0.3s ease-in-out;
      }
      .product-grid .social li a:hover {
        color: #fff;
        background-color: #333;
        width: 80px;
      }
      .product-grid .social li a:after,
      .product-grid .social li a:before {
        content: attr(data-tip);
        color: #fff;
        background-color: #333;
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 20px;
        padding: 1px 5px;
        border-radius: 5px;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(-50%);
        position: absolute;
        left: 50%;
        top: -30px;
      }
      .product-grid .social li a:after {
        content: '';
        height: 15px;
        width: 15px;
        border-radius: 0;
        transform: translateX(-50%) rotate(45deg);
        top: -20px;
        z-index: -1;
      }
      .product-grid .social li a:hover:after,
      .product-grid .social li a:hover:before {
        opacity: 1;
      }
      .item-button-options:hover {
        background: #504a4a;
        cursor: pointer;
      }
      @media only screen and (max-width: 990px) {
        .product-grid {
          margin-bottom: 30px;
        }
      }
    `,
  ],
})
export class ProductItemComponent implements OnInit{
  @Input() product: IProduct;
  @Input() showDesc = false;
  @Output() add: EventEmitter<IProduct> = new EventEmitter();
  @Output() itemDetails: EventEmitter<IProduct> = new EventEmitter();
  @Input() selectCurrency = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  discountPercentage: string;
  constructor() {}

  ngOnInit() {
    this.product.qty = 0;
  }

  addToCart(product: IProduct) {
    product.qty = product.qty + 1;
    this.add.emit(product);
  }
  showDetails(product: IProduct) {
    this.itemDetails.emit(product);
  }
}
