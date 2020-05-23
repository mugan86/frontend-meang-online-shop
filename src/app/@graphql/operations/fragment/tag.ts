import gql from 'graphql-tag';

export const TAG_FRAGMENT = gql`
    fragment TagObject on Tag {
        id
        name
        slug
    }
`;
