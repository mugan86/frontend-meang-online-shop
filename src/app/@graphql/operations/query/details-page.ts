import gql from 'graphql-tag';
import { SHOP_PRODUCT_FRAGMENT } from '@graphql/operations/fragment/shop-product';

export const DETAILS_PAGE = gql`
  query DetailsPageInfo(
    $id: Int!
    $showPlatform: Boolean = true
    $relationScreens: Boolean = true
  ) {
    randomItems: shopProductsOffersLast(itemsPage: 6, random: true) {
      shopProducts {
        ...ShopProductObject
      }
    }
    details: shopProductDetails(id: $id) {
      shopProduct {
        ...ShopProductObject
      }
    }
  }
  ${SHOP_PRODUCT_FRAGMENT}
`;
