import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { loadData, closeAlert } from '@shared/alerts/alerts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  listOne: IProduct[];
  listTwo: IProduct[];
  listThree: IProduct[];
  loading: boolean;
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.loading = true;
    loadData('Cargando datos', 'Espera mientras carga la información');
    this.products.getHomePage().subscribe( data => {
      this.listOne = data.ps4;
      this.listTwo = data.topPrice;
      this.listThree = data.pc;
      this.items = this.manageCarousel(data.carousel);
      closeAlert();
      this.loading = false;
    });
  }

  private manageCarousel(list) {
    const itemsValues: Array<ICarouselItem> = [];
    list.shopProducts.map((item) => {
      itemsValues.push({
        id: item.id,
        title: item.product.name,
        description: item.platform.name,
        background: item.product.img,
        url: '/games/details/'.concat(item.id)
      });
    });
    return itemsValues;
  }
}
