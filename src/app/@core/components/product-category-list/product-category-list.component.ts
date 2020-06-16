import { Component, Input } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent {
  @Input() title = 'Título de la categoría';
  @Input() productsList: Array<IProduct> = [];
  @Input() description = '';
  constructor(private router: Router) { }
  addToCart($event: IProduct) {
    console.log('Add to cart', $event);
  }
  showProductDetails($event: IProduct) {
    console.log('Shoe details', $event);
    this.router.navigate(['/games/details', +$event.id]);
  }

}
