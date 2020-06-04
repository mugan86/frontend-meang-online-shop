import { IRatingItem } from './rating-item.interface';

export interface IProduct {
    /** Identify ID */
    id: string;
    /** Element slug */
    slug?: string;
    /** Name product */
    name: string;
    /** Card product image */
    img: string;
    /** Stock total value */
    stock: number;
    /** Discount percentage */
    discount?: number;
    /** Real price */
    price: number;
    /** New price if discount value exist to apply respect real price */
    priceDiscount?: number;
    /** Product description with more details */
    description: string;
    /** Quantity select */
    qty?: number;
    /** Produc review rating */
    rating?: IRatingItem;
}
