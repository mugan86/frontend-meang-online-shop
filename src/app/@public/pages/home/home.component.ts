import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import carouselItems from '@data/carousel.json';
import productsList from '@data/products.json';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList;
  constructor(private usersApi: UsersService, private auth: AuthService) { }

  ngOnInit(): void {
    this.productsList = productsList;
    this.items = carouselItems;
    console.log('Carousel items', this.items);
    console.log('Products items', this.productsList);
    this.usersApi.getUsers(2, 1).subscribe( result => {
      // console.log(result); // { { status message users: []}
    });
  }
  addToCart($event: IProduct) {
      console.log('Add to cart', $event);
  }
  showProductDetails($event: IProduct) {
    console.log('Shoe details', $event);
  }

}
