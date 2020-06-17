import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

export interface ICart {
    total: number; // Almacenamos el total de lo que tendriamos que pagar
    subtotal: number; // Añadimos el número de unidades totales
    products: Array<IProduct>; // Productos almacenados
}
