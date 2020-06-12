import { IInfoPage } from '@core/interfaces/result-data.interface';
import { ACTIVE_FILTERS } from '@core/constants/filters';
import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { IGamePageInfo } from './games-page-info.interface';
import { GAMES_PAGES_INFO } from './game.constants';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  selectPage;
  infoPage: IInfoPage = {
    page: 1,
    pages: 8,
    total: 160,
    itemsPage: 20
  };
  gamesPageInfo: IGamePageInfo;
  productsList: Array<IProduct> = [];
  constructor(private products: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.gamesPageInfo = GAMES_PAGES_INFO[`${params.type}/${params.filter}`]
      console.log(this.gamesPageInfo);
    });
    this.loadData();
  }

  loadData() {
    this.products.getByPlatform(
      this.infoPage.page, this.infoPage.itemsPage, ACTIVE_FILTERS.ACTIVE,
      false, ['18', '16'], true, true
    ).subscribe(data => {
      console.log('products ps4', data.result);
      this.productsList = data.result;
      this.infoPage = data.info;
    });
  }
}
