import gql from 'graphql-tag';

export const PROCCESS_ORDER_PAY = gql`
  mutation payOrder($payment: ChargeInput!) {
    chargeOrder(payment: $payment) {
      status
      message
      charge {
        ...ChargeObject
      }
    }
  }
`;
