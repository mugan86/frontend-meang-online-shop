import products from '@data/products.json';
import carouselItems from '@data/carousel.json';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem, IProduct} from 'projects/shop-ui/src/lib/interfaces';
import { CartService } from '@core/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartCountElements = 0;
  cartItems = [];

  items: ICarouselItem[] = [];
  productsList: IProduct[] = [];
  constructor(private usersApi: UsersService, private cartService: CartService) {
    this.cartService.removeItemsVar$.subscribe((product) => {
      console.log('Elemento removido');
    });
  }

  ngOnInit(): void {
    this.productsList = products;
    this.usersApi.getUsers(2, 1).subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    this.items = carouselItems;
  }

  addToCart(product: IProduct) {
    console.log(product);
    product.qty = 1;
    this.cartService.manageProduct(product);
  }

  showProductDetails($event) {
    console.log($event);
  }

}
