import { CarouselItem } from '../../interfaces/carousel-item.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shop-carousel-items',
  templateUrl: './carousel-items.component.html',
  styles: [
    `
      section {
        margin-bottom: 25px
      }
      .url-item {
        cursor: pointer;
      }

      .carousel-inner {
        height: 500px;
      }

      .carousel-item {
        height: 100%;
        min-height: 350px;
        background: no-repeat center center scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }

      @media (max-width: 1440px) {
        .carousel-item {
          max-height: 640px;
        }
      }
      @media (max-width: 400px) {
        .carousel-item {
          max-height: 240px;
        }
      }
    `,
  ],
})
export class CarouselItemsComponent {
  @Input() items: CarouselItem[] = [];
  open(i: number) {
    window.open(this.items[i].url);
  }
}
