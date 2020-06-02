import products from '@data/products.json';
import carouselItems from '@data/carousel.json';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem, IProduct} from 'projects/shop-ui/src/lib/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList: IProduct[] = [];
  constructor(private usersApi: UsersService, private auth: AuthService) { }

  ngOnInit(): void {
    this.productsList = products;
    this.usersApi.getUsers(2, 1).subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    this.items = carouselItems;
  }

  addToCart($event) {
    console.log($event);
  }

  showProductDetails($event) {
    console.log($event);
  }

}
