import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'shop-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [`
    .quantity {
      width: 5%;
      min-width: 50px;
      text-align: center;
    }

    .a-color-price {
        color: #cc1c39 !important;
    }

    .product-img {
        margin-bottom: 10px;
    }
  `]
})
export class CartItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showDesc = false;
  @Output() updatePrice = new EventEmitter<boolean>();
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  update() {
    this.cartService.manageProduct(this.product);
    this.updatePrice.emit(true);
  }

  remove() {
    this.product.qty = 0;
    this.cartService.manageProduct(this.product);
    this.updatePrice.emit(true);
  }

  changeValue(value: number) {
    this.product.qty = value;
    this.update();
  }

}
