export default function sendResetPasswordEmail(options) {
  if (!options) {
    throw Error("options is not provided");
  }
  if (!options.email) {
    throw Error("email in options is not provided");
  }

  options.client = this.userPoolId;
  return this.UserServiceGql.request({
    operationName: "sendResetPasswordEmail",
    query: `
      mutation sendResetPasswordEmail(
        $email: String!,
        $client: String!
      ){
        sendResetPasswordEmail(
          email: $email,
          client: $client
        ) {
            message
            code
        }
      }
    `,
    variables: options
  });
}
