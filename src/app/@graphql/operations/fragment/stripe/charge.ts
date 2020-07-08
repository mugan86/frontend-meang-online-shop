import gql from 'graphql-tag';

export const CHARGE_FRAGMENT_OBJECT = gql`
  fragment ChargeObject on StripeCharge {
    id
    card
    paid
    description
    customer
    created
    amount
    status
    receiptUrl
    receiptEmail
    typeOrder
  }
`;
