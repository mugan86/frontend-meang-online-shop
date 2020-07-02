import gql from 'graphql-tag';

export const CREATE_STRIPE_CUSTOMER = gql`
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
