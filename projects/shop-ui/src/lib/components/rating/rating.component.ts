import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop-rating',
  templateUrl: './rating.component.html',
  styles: [
    `
      $checked-color: orange;
      $no-checked-color: black;
      .checked {
        color: $checked-color;
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
          color-stop(0.25, $checked-color),
          color-stop(1, $no-checked-color)
        );
        background-image: gradient(
          linear,
          left top,
          right top,
          color-stop(0.25, $checked-color),
          color-stop(1, $no-checked-color)
        );
      }

      .star-100 {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(1, $checked-color)
        );
        background-image: gradient(
          linear,
          left top,
          right top,
          color-stop(1, $checked-color)
        );
      }
    `,
  ],
})
export class RatingComponent implements OnInit {
  @Input() min = 1;
  @Input() max = 5;
  @Input() value: number = undefined;
  starsCssValues;
  ngOnInit() {
    if (this.value === undefined || this.value === null) {
      this.value = 0;
    }
    this.starsCssValues = Array(this.max).fill('');
  }
}
