import gql from 'graphql-tag';

export const RESET_PASSWORD = gql`
    mutation resetearPassword($email: String!) {
        resetPassword(email: $email) {
            status
            message
        }
    }
`;

export const CHANGE_PASSWORD = gql`
    mutation cambio($id: ID!, $password: String!) {
        changePassword(id: $id, password: $password) {
            status
            message
        }
    }
`;
