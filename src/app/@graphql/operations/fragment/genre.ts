import gql from 'graphql-tag';

export const GENRE_FRAGMENT = gql`
    fragment GenreObject on Genre {
        id
        name
        slug
    }
`;
