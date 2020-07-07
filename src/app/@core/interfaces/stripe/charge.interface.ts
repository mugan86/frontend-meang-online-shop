export interface ICharge {
    id: string;
    card: string;
    paid: boolean;
    customer: string;
    created: string;
    amount: number;
    status: string;
    receiptUrl: string;
    receiptEmail: string;
    typeOrder: string;
}
