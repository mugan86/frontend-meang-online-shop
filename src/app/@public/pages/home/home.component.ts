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
  listOne;
  listTwo;
  listThree;
  constructor(private usersApi: UsersService, private auth: AuthService) { }

  ngOnInit(): void {
    this.productsList = productsList;
    this.items = carouselItems;
    this.usersApi.getUsers(2, 1).subscribe( result => {
      // console.log(result); // { { status message users: []}
    });
    this.listOne = this.fakeRandomProductList();
    this.listTwo = this.fakeRandomProductList();
    this.listThree = this.fakeRandomProductList();
  }

  fakeRandomProductList() {
    const list = [];
    const arrayMax = 4;
    const limit = this.productsList.length;
    for (let i = 0; i < arrayMax; i++) {
      list.push(this.productsList[Math.floor(Math.random() * limit)]);
    }
    return list;
  }

}
