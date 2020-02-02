export default function sendVerifyEmail(options) {
  if (!options.email) {
    throw Error("email in options is not provided");
  }

  options.client = this.userPoolId;

  return this.UserServiceGql.request({
    operationName: "sendVerifyEmail",
    query: `
      mutation sendVerifyEmail(
        $email: String!,
        $client: String!
      ){
        sendVerifyEmail(
          email: $email,
          client: $client
        ) {
          message,
          code,
          status
        }
      }
    `,
    variables: options
  });
}
