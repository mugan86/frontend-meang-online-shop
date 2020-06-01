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
  ${USER_FRAGMENT}
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
  ${USER_FRAGMENT}
`;

export const BLOCK_USER = gql`
  mutation blockUser($id: ID!, $unblock: Boolean = false, $admin: Boolean = false) {
    blockUser(id: $id, admin: $admin, unblock: $unblock) {
      status
      message
    }
  }
`;

export const ACTIVE_USER_EMAIL = gql`
  mutation activarUserEmail($id: ID!, $email: String!){
    activeUserEmail(id: $id, email: $email) {
      status
      message
    }
  }
`;

export const ACTIVE_USER = gql`
  mutation activeUser($id: ID!, $birthday: String!, $password: String!) {
    activeUserAction(id: $id, birthday: $birthday, password: $password) {
      status
      message
    }
  }
`;
