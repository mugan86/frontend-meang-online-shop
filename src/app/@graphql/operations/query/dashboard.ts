import gql from 'graphql-tag';

export const DASHBOARD_STATS = gql`
  {
    users: totalElements(collection: "users")
    platforms: totalElements(collection: "platforms")
    tags: totalElements(collection: "tags")
    genres: totalElements(collection: "genres")
    shopProducts: totalElements(collection: "products_platforms")
    games: totalElements(collection: "products")
  }
`;
