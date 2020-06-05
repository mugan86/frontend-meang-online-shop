import gql from 'graphql-tag';
import { TAG_FRAGMENT } from '../fragment/tag';
import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';

export const TAG_LIST_QUERY = gql`
    query tagsList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum) {
        tags(page: $page, itemsPage: $itemsPage, active: $active) {
            info {
                ...ResultInfoObject
            }
            status
            message
            tags {
                ...TagObject
            }
        }
    }
    ${TAG_FRAGMENT}
    ${RESULT_INFO_FRAGMENT}
`;

