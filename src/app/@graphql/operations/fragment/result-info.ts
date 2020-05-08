import gql from 'graphql-tag';

export const RESULT_INFO_FRAGMENT = gql`
    fragment ResultInfoObject on ResultInfo {
        page
        pages
        total
        itemsPage
    }
`;
