import gql from 'graphql-tag';

export const CREATE_CUSTOMER_STRIPE = gql`
  mutation createClient($name: String!, $email: String!) {
    createCustomer(name: $name, email: $email) {
      status
      message
      customer {
        id
        name
        email
        description
      }
    }
  }
`;
