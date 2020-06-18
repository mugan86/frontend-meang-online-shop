import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
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
  constructor(private cartService: CartService) {
    this.cartService.itemsVar$.subscribe((data: ICart) => {
      if (data !== undefined && data !== null) {
        this.cart = data;
      }
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.initialize();
    console.log('carrito', this.cart);
  }

  clear() {
    this.cartService.clear();
  }

  clearItem(product: IProduct) {
    product.qty = 0;
    this.cartService.manageProduct(product);
  }


  closeNav() {
    this.cartService.close();
  }
}
