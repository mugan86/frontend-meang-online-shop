import products from '@data/products.json';
import carouselItems from '@data/carousel.json';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem, IProduct} from 'projects/shop-ui/src/lib/interfaces';
import { CartService } from 'projects/shop-ui/src/lib/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList: IProduct[] = [];
  constructor(private usersApi: UsersService, private cartService: CartService) {
    // Esto se actualizará cuando se quite un elemento del carro o todos
    this.cartService.removeItemsVar$.subscribe(() => {
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

  addToCart($event) {
    $event.product.qty = 1;
    this.cartService.manageProduct($event.product);
  }

  showProductDetails($event) {
    console.log($event);
  }

}
