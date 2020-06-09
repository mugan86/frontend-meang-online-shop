import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import carouselItems from '@data/carousel.json';
import { ProductsService } from '@core/services/products.service';
import { ACTIVE_FILTERS } from '@core/constants/filters';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  listOne;
  listTwo;
  listThree;
  constructor(private usersApi: UsersService, private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getByLastUnitsOffers(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, 35).subscribe(result => {
        console.log('productos a menos de 35', result);
        this.listTwo = result;
      });

    this.products.getByPlatform(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, '18'
    ).subscribe(result => {
      console.log('products ps4', result);
      this.listOne = result;
    });

    this.products.getByPlatform(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, '4'
    ).subscribe(result => {
      console.log('products pc', result);
      this.listThree = result;
    });
    this.items = carouselItems;
  }
}
