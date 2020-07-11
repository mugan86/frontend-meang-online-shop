import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { loadData, closeAlert } from '@shared/alerts/alerts';
import { CURRENCY_SELECT } from '@core/constants/config';
import { CartService } from '@shop/core/services/cart.service.ts.service';
import { ICart } from '@shop/core/components/shopping-cart/shoppin-cart.interface';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: IProduct;
  selectImage: string;
  currencySelect = CURRENCY_SELECT;
  randomItems: Array<IProduct> = [];
  screens = [];
  relationalProducts: Array<object> = [];
  loading: boolean;
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('parametro detalles', +params.id);
      loadData('Cargando datos', 'Espera mientras carga la información');
      this.loading = true;
      this.loadDataValue(+params.id);
      this.updateListener(+params.id);
    });

    this.cartService.itemsVar$.subscribe((data: ICart) => {
      console.log(data);
      if (data.subtotal === 0) {
        this.product.qty = 1;
        return;
      }

      this.product.qty = this.findProduct(+this.product.id).qty;
    });
  }

  updateListener(id: number) {
    console.log('escuchando', id);
    this.productService.stockUpdateListener(id).subscribe(
      (result) => {
        console.log('Actualización', result);
        this.product.stock = result.stock;

        // COmprobar que cantidad seleccionada es mayor que stock.
        // Si se da esta situación, el toope pasarña al valor del stock
        if (this.product.qty > this.product.stock) {
          this.product.qty = this.product.stock;
        }

        if (this.product.stock === 0) {
          this.product.qty = 1;
        }
      }
    );
  }

  findProduct(id: number) {
    return this.cartService.cart.products.find( item => +item.id === id);
  }

  loadDataValue(id: number) {
    this.productService.getItem(id).subscribe((result) => {
      console.log(result);
      this.product = result.product;
      const saveProductInCart = this.findProduct(+this.product.id);
      this.product.qty = (saveProductInCart !== undefined) ? saveProductInCart.qty : this.product.qty;
      this.selectImage = this.product.img;
      this.screens = result.screens;
      this.relationalProducts = result.relational;
      this.randomItems = result.random;
      this.loading = false;
      closeAlert();
    });
  }
  changeValue(qty: number) {
    this.product.qty = qty;
  }

  selectOtherPlatform($event) {
    console.log($event.target.value);
    const id = +$event.target.value;
    this.loadDataValue(id);
    this.updateListener(id);
    window.history.replaceState({}, '', `/#/games/details/${id}`);
  }

  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

  addToCart() {
    this.cartService.manageProduct(this.product);
  }
}
