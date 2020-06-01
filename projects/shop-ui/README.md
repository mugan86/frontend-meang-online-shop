# Angular Shop UI Library

Librería que tendrá los elementos de una tienda con lista de productos, carrito, carousel,...

```
npm i @mugan86/ng-shop-ui
```

## Instrucciones de uso

## Añadir los estilos de Bootstrap

Añadir en el fichero principal de los estilos(**styles**):
```
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";

```
## Carousel

Lo primero que necesitamos es importar el módulo que tenemos para utilizar el componente y visualizar los items con la imagen de fondo y haciendo click sobre ella, nos redireccionará a la url almacenada

### Módulo
```
// your.module.ts
import { NgModule } from '@angular/core';
import { CarouselItemsModule } from '@mugan86/ng-shop-ui';

@NgModule({
  declarations: [YourComponent],
  imports: [
    ...
    CarouselItemsModule
  ]
})
export class YourModule { }
```

### Configuración del componente
```
import { CarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
...
export class YourComponent implements OnInit {
  items: CarouselItem[] = [];

  ngOnInit(): void {
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
}
```

### Pasar la información

```
<shop-carousel-items [items]="items"></shop-carousel-items>

```

![Carousel](https://raw.githubusercontent.com/mugan86/frontend-meang-online-shop/shop-ui-library/src/assets/screens/carousel.png?token=ABGYW4XXAVOGXMN75MDEN4S62VZ2M)
## Item del producto

Lo primero que necesitamos es importar el módulo que tenemos para utilizar el componente y visualizar la información del producto, como el precio, imagen, posible descuento, valoración,...

### Módulo
```
// your.module.ts
import { NgModule } from '@angular/core';
import {  ProductItemModule } from '@mugan86/ng-shop-ui';

@NgModule({
  declarations: [YourComponent],
  imports: [
    ...
     ProductItemModule
  ]
})
export class YourModule { }
```

### Configuración del componente
```
import { products } from '@mugan86/ng-shop-ui/lib/contants/products';
...
export class YourComponent implements OnInit {
  productsList;

  ngOnInit(): void {
    this.productsList = products;
  }

  addToCart($event) {
    // Usar la información del producto pasado para llevarlo al carrito de compra
    console.log($event);
  }

  showProductDetails($event) {
    console.log($event);
  }
}
```

### Pasar / Recibir la información

```
<shop-product-item
          [showDesc]="false"
          [product]="p"
          (add)="addToCart($event)"
          (itemDetails)="showProductDetails($event)"
        ></shop-product-item>
```

![Product Item](https://raw.githubusercontent.com/mugan86/frontend-meang-online-shop/shop-ui-library/src/assets/screens/products.png?token=ABGYW4QIM7N2ZZNDO2O6MY262V2MC)