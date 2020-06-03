import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-cart-item',
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
export class CartItemComponent {
  /**
   * Select product info in cart with select quantity to use to send to checkout
   */
  @Input() product: IProduct;
  /**
   * Show product description or no
   */
  @Input() showDesc = true;
  /**
   * Event to notify update Price after add or remove items
   */
  @Output() updatePrice = new EventEmitter<boolean>();
  constructor(private cartService: CartService) { }

  /**
   * After change value with quantity selector
   * Add product in shoping cart and update final price
   */
  update() {
    this.cartService.manageProduct(this.product);
    this.updatePrice.emit(true);
  }

  /**
   * Remove all elements from cart
   */
  remove() {
    this.product.qty = 0;
    this.cartService.manageProduct(this.product);
    this.updatePrice.emit(true);
  }

  /**
   * Update Shopping Cart info after change value
   * @param value Quantity value to add in select product
   */
  changeValue(value: number) {
    this.product.qty = value;
    this.update();
  }

}
