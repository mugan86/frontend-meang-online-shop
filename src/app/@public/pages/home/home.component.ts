import { products } from 'projects/shop-ui/src/lib/constants/products';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { CarouselItem } from 'projects/shop-ui/src/lib/interfaces/carousel-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: CarouselItem[] = [];
  products;
  constructor(private usersApi: UsersService, private auth: AuthService) { }

  ngOnInit(): void {
    this.products = products;
    this.usersApi.getUsers(2, 1).subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    this.items.push({
      id: '01',
      title: 'GTA IV',
      description: 'Juego de Rockstar',
      url: 'http://www.rockstargames.com/V/',
      background: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg'
    });
    this.items.push({
      id: '02',
      title: 'Shadow of Tomb Raider',
      description: 'Lara Croft...',
      url: 'https://tombraider.square-enix-games.com/en-us',
      background: 'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg'
    });
    this.items.push({
      id: '03',
      title: 'Tomb Raider (2013)',
      description: 'Lara Croft...',
      url: 'https://tombraider.square-enix-games.com/en-us',
      background: 'https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg'
    });

  }

  addToCart($event) {
    console.log($event);
  }

}
