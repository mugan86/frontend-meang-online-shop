import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '@graphql/operations/fragment/stripe/charge';

export const CUSTOMER_CHARGES_LIST = gql`
  query listaDePedidosCliente(
    $customer: ID!
    $limit: Int
    $startingAfter: ID
    $endingBefore: ID
  ) {
    chargesByCustomer(
      customer: $customer
      limit: $limit
      startingAfter: $startingAfter
      endingBefore: $endingBefore
    ) {
      status
      message
      hasMore
      charges {
        ...ChargeObject
      }
    }
  }
  ${CHARGE_FRAGMENT_OBJECT}
`;
