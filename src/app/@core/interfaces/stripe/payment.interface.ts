export interface IPayment {
    amount: string | number;
    description: string;
    customer: string;
    currency: string;
    token?: string;
}
