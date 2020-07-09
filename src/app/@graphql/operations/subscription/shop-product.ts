import gql from 'graphql-tag';

export const SUBSCRIPTION_PRODUCT_STOCK = gql`
  subscription selectProductUpdate($id: Int!) {
    updateStockSelectProduct(id: $id) {
      id
      stock
    }
  }
`;
