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
