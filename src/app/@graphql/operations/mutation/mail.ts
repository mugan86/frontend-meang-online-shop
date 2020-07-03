import gql from 'graphql-tag';

export const SEND_MAIL_ACTION = gql`
    mutation sendEmailAction($mail: MailInput!) {
        sendEmail( mail: $mail ) {
            status
            message
        }
    }
`;
