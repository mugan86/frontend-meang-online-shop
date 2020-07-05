export interface IPayment {
    amount: string | number;
    description: string;
    customer: string;
    token?: string;
    currency: string;
}

