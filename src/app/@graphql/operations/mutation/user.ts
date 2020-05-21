import { USER_FRAGMENT } from '@graphql/operations/fragment/user';
import gql from 'graphql-tag';
export const REGISTER_USER = gql`
    mutation addUser($user: UserInput!, $include: Boolean!) {
        register(user: $user) {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const UPDATE_USER = gql`
    mutation updateUser($user: UserInput!, $include: Boolean!) {
        updateUser(user: $user) {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const BLOCK_USER = gql`
    mutation blockUser($id: ID!) {
        blockUser(id: $id) {
            status
            message
        }
    }
`;


