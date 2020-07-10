import gql from 'graphql-tag';

export const SUBSCRIPTION_PRODUCT_STOCK = gql`
  subscription selectProductUpdate($id: Int!) {
    selectProductStockUpdate(id: $id) {
      id
      stock
    }
  }
`;
