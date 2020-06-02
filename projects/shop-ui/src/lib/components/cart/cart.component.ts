import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ICart } from '../../interfaces/cart.interface';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styles: [`
    .a-color-price {
        color: #cc1c39 !important;
    }
  `]
})
export class CartComponent implements OnInit {

  cart: ICart = {
    subtotal: 0,
    total: 0,
    products: []
  };

  constructor(private cartService: CartService, private route: Router) {
    /**
     * Tener la información del carrito actualizada en todo el momento, por
     * si se dieran cambios
     */
    this.cartService.cartItemsVar$.subscribe((data: ICart) => {
      if (data !== null && data !== undefined) {
        this.cart = data;
      }
    });
  }
  ngOnInit() {
    this.updateTotal();
  }

  /**
   * Cada vez que se cambia algo, actualizamos el número de items en el carro y la
   * información necesaria
   */
  updateTotal() {
    console.log(this.cartService.cart);
    const storeData = JSON.parse(localStorage.getItem('cart'));
    let elements = 0;
    if (storeData !== null) {
      this.cart = storeData;
      elements = this.cart.products.length;
    }
    this.cartService.updateCountItemsInCart(elements);
  }

  /**
   * Limpiar la información del carrito de compra
   */
  clearCart() {
    this.cart = this.cartService.clear();
    this.cartService.updateCountItemsInCart(0);
  }

  /**
   * Tramitamos pedido
   */
  checkout() {
    this.cartService.close();
    // Navegar a la página de pedido
    this.route.navigate(['/checkout']);
  }

}
