import { Injectable } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Subject } from 'rxjs/internal/Subject';
import { ICart } from 'projects/shop-ui/src/lib/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<IProduct> = [];
  public removeItemsVar = new Subject<boolean>();
  public removeItemsVar$ = this.removeItemsVar.asObservable();
  public countItemsVar = new Subject<number>();
  public countItemsVar$ = this.countItemsVar.asObservable();
  public cartItemsVar = new Subject<ICart>();
  public cartItemsVar$ = this.cartItemsVar.asObservable();
  cart: ICart = {
    subtotal: 0,
    total: 0,
    products: this.products
  };

  public updateCountItemsInCart(newValue: number) {
    this.countItemsVar.next(newValue);
  }
  public updateCartItemsInCart(newValue: ICart) {
    this.cartItemsVar.next(newValue);
  }
  public removeItemsVarInCart() {
    this.removeItemsVar.next();
  }

  initialize() {
    const storeData = JSON.parse(localStorage.getItem('cart'));
    if (storeData !== null) {
      this.cart = storeData;
    }
    console.log('Initialize cart', this.cart);
    this.updateCountItemsInCart(this.cart.products.length);
    this.updateCartItemsInCart(this.cart);
    return this.cart;
  }
  manageProduct(selectProduct: IProduct) {
    if (this.cart.products.length === 0) {
      console.log('Añadir el primero', selectProduct);
      this.cart.products.push(selectProduct);
    } else {
      let actionOk = false;
      for (let i = 0; i < this.cart.products.length; i++) {
        if (this.cart.products[i].id === selectProduct.id) {
          if (selectProduct.qty === 0) {
            console.log('Quitar elemento', this.cart.products[i]);
            this.cart.products.splice(i, 1);
            this.removeItemsVarInCart();
          } else {
            this.cart.products[i].qty = selectProduct.qty;
            console.log('Asignar producto con nueva información', this.cart.products[i]);
          }
          actionOk = true;
          i = this.cart.products.length;
        }
      }
      if (actionOk === false) {
        console.log('No encontrado en el carrito, añadido junto con los otros productos', selectProduct);
        this.cart.products.push(selectProduct);
      }
    }
    console.log(this.cart.products);
    this.checkOutTotal();
    this.initialize();
  }

  checkOutTotal() {
    let subtotal = 0;
    let totalPay = 0;
    this.cart.products.map((product: IProduct) => {
      subtotal += product.qty;
      totalPay += (product.qty * product.price);
    });
    this.cart.subtotal = subtotal;
    this.cart.total = totalPay;
    console.log(subtotal, 'elements');
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  clear() {
    this.cart = {
      subtotal: 0,
      total: 0,
      products: []
    };
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }

  open() {
    document.getElementById('app').style.overflowY = 'hidden';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('shopping-cart-items').style.maxWidth = '600px';
    document.getElementById('shopping-cart-items').style.width = '100%';
  }
  close() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('shopping-cart-items').style.width = '0';
    document.getElementById('app').style.overflowY = 'auto';
  }
}
