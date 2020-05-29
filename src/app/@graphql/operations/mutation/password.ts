import gql from 'graphql-tag';

export const RESET_PASSWORD = gql`
    mutation resetearPassword($email: String!) {
        resetPassword(email: $email) {
            status
            message
        }
    }
`;
