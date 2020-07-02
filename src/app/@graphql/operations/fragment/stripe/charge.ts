import gql from 'graphql-tag';

export const CHARGE_FRAGMENT = gql`
    fragment ChargeObject on StripeCharge {
        id
        created
        amount
        status
        receiptUrl
        receiptEmail
        typeOrder
        customer
        card
    }
`;
