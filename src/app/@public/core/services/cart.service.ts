import { CURRENCY_SELECT } from '@core/constants/config';
import { ICart } from '../components/shopping-cart/shoppin-cart.interface';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Array<IProduct> = [];
  cart: ICart = {
    total: 0,
    subtotal: 0,
    products: this.products,
  };
  description;
  // Para gestionar los productos con las notificaciones cuando se realizan acciones como borrar
  public itemsVar = new Subject<ICart>();
  public itemsVar$ = this.itemsVar.asObservable();
  constructor() {}

  orderDescription() {
    let description = '';
    this.cart.products.map((product: IProduct) => {
      description += `${product.name} (${product.description}) x ${product.qty} \n ${product.price * product.qty} ${CURRENCY_SELECT} \n`;
    });
    console.log('Description', description);
    return description;
  }

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

  public updateItemsInCart(newValue: ICart) {
    this.itemsVar.next(newValue);
  }

  manageProduct(product: IProduct) {
    // Obtener cantidad de productps en el carrito
    const productTotal = this.cart.products.length;
    // Comprobamos si tenemos productos
    if (productTotal === 0) {
      console.log('Añadiendo primer producto');
      this.cart.products.push(product);
    } else {
      // Si tenemos productos hacer lo siguiente
      let actionUpdateOk = false;
      for (let i = 0; i < productTotal; i++) {
        // COmprobar que coincide el producto con alguno de la lista
        if (product.id === this.cart.products[i].id) {
          console.log('Producto existente y vamos a gestionarlo');
          if (product.qty === 0) {
            console.log('Borrar item seleccionado');
            // Quitar elemento
            this.cart.products.splice(i, 1);
          } else {
            // Actualizar con la nueva información
            this.cart.products[i] = product;
          }
          actionUpdateOk = true;
          i = productTotal;
        }
      }
      if (!actionUpdateOk) {
        this.cart.products.push(product);
      }
    }
    this.checkoutTotal();
  }

  /** Añadir la información final antes de hacer el pedido */
  checkoutTotal() {
    let subtotal = 0;
    let total = 0;
    this.cart.products.map((product: IProduct) => {
      subtotal += product.qty; // subtotal = subtotal + product.qty
      total += product.qty * product.price;
    });

    this.cart.total = total;
    this.cart.subtotal = subtotal;
    console.log(this.cart, 'calculado');
    this.setInfo();
  }

  clear() {
    this.products = [];
    this.cart = {
      total: 0,
      subtotal: 0,
      products: this.products,
    };
    this.setInfo();
    console.log('Hemos borrado la información');
    return this.cart;
  }

  private setInfo() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateItemsInCart(this.cart);
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
