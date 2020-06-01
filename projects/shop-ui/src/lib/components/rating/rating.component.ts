import { IRatingItem } from './../../interfaces/rating-item.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop-rating',
  templateUrl: './rating.component.html',
  styles: [
    `
      .checked {
        color: orange;
      }

      .star,
      .star-20,
      .star-100 {
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }

      .star-20 {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(0.25, orange),
          color-stop(1, black)
        );
        background-image: gradient(
          linear,
          left top,
          right top,
          color-stop(0.25, orange),
          color-stop(1, black)
        );
      }

      .star-100 {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(1, orange)
        );
        background-image: gradient(
          linear,
          left top,
          right top,
          color-stop(1, orange)
        );
      }
    `,
  ],
})
export class RatingComponent implements OnInit {
  @Input() min = 1;
  @Input() max = 5;
  @Input() rating: IRatingItem = undefined;
  starsCssValues;
  ngOnInit() {
    if (this.rating === undefined || this.rating === null) {
      this.rating.value = 0;
      this.rating.count = 0;
    }
    this.starsCssValues = Array(this.max).fill('');
  }
}
