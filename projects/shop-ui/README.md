# Angular Shop UI Library

[![npm version](https://badge.fury.io/js/%40mugan86%2Fng-shop-ui.svg)](https://badge.fury.io/js/%40mugan86%2Fng-shop-ui)

:warning: **Versión Alpha**: ¡Trabajando en muchas mejoras!

Librería que tendrá los elementos de una tienda con lista de productos, carrito, carousel,...

```
npm i @mugan86/ng-shop-ui
```

## Guía de referencia actualizada

[Manual con todas las configuraciones](https://anartz-mugika.gitbook.io/angular-shop-ui-library/)

## Progreso de la librería con las mejoras

[Manual con todas las configuraciones](https://anartz-mugika.gitbook.io/angular-shop-ui-library/versions)

## Instrucciones de uso básicas

## Añadir los estilos de Bootstrap

Añadir en el fichero principal de los estilos(**styles**):

```
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";

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

Cargamos los items del Carousel, usando [esta referencia](https://drive.google.com/file/d/1Y87rI7-QvyaBDrj-Rti5mTD6G85E1Qmo/view?usp=sharing) por ejemplo.

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

Cargamos los productos, usando [esta referencia](https://drive.google.com/file/d/1bpEwCvkLtkpR6R81rOFwzBDXazTAkRiy/view?usp=sharing) por ejemplo.

La estructura de los productos deberá de ser la siguiente:

```
export interface IProduct {
    id: string;                 //Identificador del product de la tienda
    slug?: string;              //Slug del product0
    name: string;               // Nombre
    img: string;                // Imagen del producto
    stock: number;              // Cantidad de unidades en el stock
    discount?: number;          // Porcentaje de descuento que se aplicará
    price: number;              // Precio real
    priceDiscount?: number;     // Nuevo precio con descuento, si discount tiene valor
    description: string;        // Descripción del producto
    qty?: number;               // Cantidad de unidades que se van a adquirir
    rating?: IRatingItem;       // Información sobre las reseñas
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
