export interface IStripeCharge {
    id: string;
    card: string;
    customer: string;
    created: string;
    amount: number;
    status: boolean;
    receiptUrl: string;
    receiptEmail: string;
    typeOrder: string;
}