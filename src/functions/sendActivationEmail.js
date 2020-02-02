export default function sendActivationEmail(options) {
  if (!options.email) {
    throw Error('email in options is not provided');
  }

  options.client = this.userPoolId;

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'SendVerifyEmail',
      query: `
      mutation SendVerifyEmail($email: String!, $client: String!) {
        sendVerifyEmail(email: $email, client: $client) {
          message
        }
      }
    `,
      variables: options
    });
  });
}
