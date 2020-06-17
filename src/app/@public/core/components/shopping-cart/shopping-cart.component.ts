import { ICart } from './shoppin-cart.interface';
import { Component, OnInit } from '@angular/core';
import { CartService } from '@shop/core/services/cart.service.ts.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart: ICart;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.initialize();
    console.log('carrito', this.cart);
  }

  clear() {
    this.cartService.clear();
  }


  closeNav() {
    this.cartService.close();
  }
}
