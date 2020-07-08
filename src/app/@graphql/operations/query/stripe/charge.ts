import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '@graphql/operations/fragment/stripe/charge';

export const CHARGES_CUSTOMERS_LIST = gql`
  query obtenerPagosDelCliente(
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
      hasMore
      message
      charges {
        ...ChargeObject
      }
    }
  }
  ${CHARGE_FRAGMENT_OBJECT}
`;
