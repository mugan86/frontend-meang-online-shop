export interface IProduct {
    id: string;
    name: string;
    img: string;
    stock: number;
    discount?: number;
    price: number;
    description: string;
    qty?: number;
    rating?: number;
}
