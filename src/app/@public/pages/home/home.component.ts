import products from '@data/products.json';
import carouselItems from '@data/carousel.json';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem, IProduct} from 'projects/shop-ui/src/lib/interfaces';
import { CartService } from 'projects/shop-ui/src/lib/services/cart.service';
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
    // Esto se actualizará cuando se quite un elemento del carro o todos
    this.cartService.removeItemsVar$.subscribe(() => {
      console.log('Elemento removido');
    });
    this.cartService.countItemsVar$.subscribe((data: number) => {
      if (data !== null && data !== undefined) {
        this.cartCountElements = data;
      }
    });

    this.cartService.cartItemsVar$.subscribe((data: any) => {
      console.log('Cart items navbar', data);
      this.cartItems = data;
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
    this.cartService.manageProduct(product);
  }

  showProductDetails($event) {
    console.log($event);
  }

}
