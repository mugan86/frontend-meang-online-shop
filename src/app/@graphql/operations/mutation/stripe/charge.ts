import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '@graphql/operations/fragment/stripe/charge';

export const CREATE_PAY_ORDER = gql`
  mutation pagarPedido($payment: ChargeInput!) {
    chargeOrder(payment: $payment) {
      status
      message
      charge {
        ...ChargeObject
      }
    }
  }
  ${CHARGE_FRAGMENT_OBJECT}
`;
