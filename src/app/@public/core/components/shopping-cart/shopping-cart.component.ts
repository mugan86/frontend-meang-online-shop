import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    console.log('Open nav');
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    console.log('Close nav');
  }
}
