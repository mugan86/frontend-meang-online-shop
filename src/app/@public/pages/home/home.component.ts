import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { Component, OnInit } from '@angular/core';
import carouselItems from '@data/carousel.json';
import { ProductsService } from '@core/services/products.service';
import { ACTIVE_FILTERS } from '@core/constants/filters';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
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
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getByLastUnitsOffers(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, 35).subscribe(data => {
        console.log('productos a menos de 35', data.result);
        this.listTwo = data.result;
      });

    this.products.getByPlatform(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, ['18']
    ).subscribe(data => {
      console.log('products ps4', data.result);
      this.listOne = data.result;
    });

    this.products.getByPlatform(
      1, 4, ACTIVE_FILTERS.ACTIVE,
      true, ['4']
    ).subscribe(data => {
      console.log('products pc', data.result);
      this.listThree = data.result;
    });

    this.products.getByLastUnitsOffers(
      1, 6, ACTIVE_FILTERS.ACTIVE, true, -1, 20).subscribe( (data) => {
        data.result.map((item: IProduct) => {
          this.items.push({
            id: item.id,
            title: item.name,
            description: item.description,
            background: item.img,
            url: ''
          });
        });
    });
    // this.items = carouselItems;

  }
}
