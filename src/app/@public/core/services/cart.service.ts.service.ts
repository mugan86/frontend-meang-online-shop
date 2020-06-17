import { ICart } from './../components/shopping-cart/shoppin-cart.interface';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<IProduct> = [];
  cart: ICart = {
    total: 0,
    subtotal: 0,
    products: this.products
  };
  constructor() { }

  /**
   * Inicializar el carrito de compra para tener la información almacenada
   */
  initialize() {
    const storeData = JSON.parse(localStorage.getItem('cart'));
    if (storeData !== null) {
      this.cart = storeData;
    }
    return this.cart;
  }

  open() {
    document.getElementById('mySidenav').style.width = '600px';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('app').style.overflow = 'hidden';
  }

  close() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('app').style.overflow = 'auto';
  }
}
