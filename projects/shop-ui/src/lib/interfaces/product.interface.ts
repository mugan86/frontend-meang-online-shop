import { IRatingItem } from './rating-item.interface';

export interface IProduct {
    id: string;
    slug?: string;
    name: string;
    img: string;
    stock: number;
    discount?: number;
    price: number;
    description: string;
    qty?: number;
    rating?: IRatingItem;
}
