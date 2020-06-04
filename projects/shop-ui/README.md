# Angular Shop UI Library

:warning: **Versión Alpha**: ¡Trabajando en muchas mejoras!

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

Cargamos los items del Carousel, usando [esta referencia](https://github.com/mugan86/frontend-meang-online-shop/blob/shop-ui-library/src/assets/data/carousel.json) por ejemplo.

La estructura de los productos deberá de ser la siguiente:

```
export interface ICarouselItem {
    id: number | string;        // Identificador
    title: string;              // Título
    description: string;        // Descripción
    background: string;         // URL de la imagen del fondo
    url: string;                // URL destino cuando hagamos click
}
```

Teniendo en cuenta esta estructura, tenemos que usarla dentro del componente, añadiendo la lista de los elementos del Carousel.

```
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
...
export class YourComponent implements OnInit {
  items: ICarouselItem[] = [];

  ngOnInit(): void {
    this.items = // Traer los valores cargados en el carousel.json u otros
  }
}
```

### Pasar la información

```
<shop-carousel-items [items]="items"></shop-carousel-items>

```

![Carousel](https://res.cloudinary.com/dd7kbplmv/image/upload/v1591081183/libraries-screens/shop-ui/rjmx8qdpjlaawzmriydg.png)

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

Cargamos los productos, usando [esta referencia](https://github.com/mugan86/frontend-meang-online-shop/blob/shop-ui-library/src/assets/data/products.json) por ejemplo.

La estructura de los productos deberá de ser la siguiente:

```
export interface IProduct {
    id: string;             // Identificador
    slug?: string;          // slug (opcional)
    name: string;           // nombre del producto
    img: string;            // url de la imagen
    stock: number;          // cantidad en el stock
    discount?: number;      // descuento que se aplicará en % (opcional)
    price: number;          // precio real
    description: string;    // descripción del producto
    qty?: number;           // cantidad seleccionada (opcional)
    rating?: IRatingItem;   // información del rating con los valores medio y cantidad de votos
}
```

Teniendo en cuenta esta estructura, tenemos que usarla dentro del componente, añadiendo la lista de productos.

```
export class YourComponent implements OnInit {
  productsList;

  ngOnInit(): void {
    this.productsList = // Traer los valores cargados en el products.json u otros
  }

  addToCart($event: IProduct) {
    // Usar la información del producto pasado para llevarlo al carrito de compra
    console.log($event);
  }

  showProductDetails($event: IProduct) {
    console.log($event);
  }
}
```

### Pasar / Recibir la información

```
// Un elemento
<shop-product-item
          [showDesc]="false"
          [product]="productDataObject"
          (add)="addToCart($event)"
          (itemDetails)="showProductDetails($event)"
        ></shop-product-item>

// Una lista de elementos
<div class="row">
      <div
        class="col-lg-3"
        *ngFor="let p of productsList"
        style="margin-bottom: 12px;"
      >
        <shop-product-item
          [showDesc]="false"
          [product]="p"
          (add)="addToCart($event)"
          (itemDetails)="showProductDetails($event)"
        ></shop-product-item>
      </div>
</div>
```

![Product Item](https://res.cloudinary.com/dd7kbplmv/image/upload/v1591081183/libraries-screens/shop-ui/eqeeosqhbqfgvzqzc0lm.png)
