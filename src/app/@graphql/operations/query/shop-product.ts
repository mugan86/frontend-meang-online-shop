import gql from 'graphql-tag';

export const SHOP_LAST_UNITS_OFFERS = gql`
  query productoPorOfertaYStock(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $random: Boolean
    $topPrice: Float
    $lastUnits: Int
  ) {
    shopProductsOffersLast(
      page: $page
      itemsPage: $itemsPage
      active: $active
      topPrice: $topPrice
      lastUnits: $lastUnits
      random: $random
    ) {
      status
      message
      shopProducts {
        id
        price
        stock
        active
        productId
        product {
          id
          name
          slug
          img
          released
          rating {
            value
            count
          }
          clip {
            clips {
              low
              medium
              full
            }
            preview
            video
          }
          screenshoot
        }
      }
    }
  }
`;

export const SHOP_PRODUCT_BY_PLATFORM = gql`
  query productoPorPlataforma(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $random: Boolean
    $platform: ID!
  ) {
    shopProductsPlatforms(
      page: $page
      itemsPage: $itemsPage
      active: $active
      platform: $platform
      random: $random
    ) {
      status
      message
      shopProducts {
        id
        price
        stock
        active
        product {
          id
          name
          slug
          img
          rating {
            value
            count
          }
        }
      }
    }
  }
`;
