import { IProduct } from './product.interface';
export interface ICart {
    subtotal: number;
    total: number;
    products: Array<IProduct>;
}
