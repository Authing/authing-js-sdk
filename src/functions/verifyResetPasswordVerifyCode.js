export default function verifyResetPasswordVerifyCode(options) {
  if (!options) {
    throw Error("options is not provided");
  }
  if (!options.email) {
    throw Error("email in options is not provided");
  }
  if (!options.verifyCode) {
    throw Error("verifyCode in options is not provided");
  }
  options.client = this.userPoolId;
  return this.UserServiceGql.request({
    operationName: "verifyResetPasswordVerifyCode",
    query: `
      mutation verifyResetPasswordVerifyCode(
        $email: String!,
        $client: String!,
        $verifyCode: String!
      ) {
        verifyResetPasswordVerifyCode(
          email: $email,
          client: $client,
          verifyCode: $verifyCode
        ) {
            message
            code
        }
      }
    `,
    variables: options
  });
}
