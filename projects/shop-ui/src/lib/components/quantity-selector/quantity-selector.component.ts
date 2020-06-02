import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shop-qty-selector',
  templateUrl: './quantity-selector.component.html',
  styles: [
    `
      div {
        margin-bottom: 5px;
      }
      .quantity {
        width: 20%;
        margin-bottom: 5px;
      }

      input[type='text']:disabled {
        color: black;
      }

      .qty-btn {
        padding-top: 3px;
        /* top - right - bottom - left => sentido de las agujas del reloj*/
        margin: -2px 3px 2px 3px;
      }
    `,
  ],
})
export class QuantitySelectorComponent {
  @Input() qty: number;
  @Input() stock: number;
  @Output() updateValue = new EventEmitter<number>();
  changeValue(action: string) {
    if (action === '-' && this.qty > 1) {
      this.qty--;
    } else if (action === '+' && this.qty < this.stock) {
      this.qty++;
    }
    this.sendUpdate();
  }

  sendUpdate() {
    this.updateValue.emit(this.qty);
  }

}
