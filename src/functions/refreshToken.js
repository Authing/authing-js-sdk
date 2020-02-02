export default function refreshToken(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  const variables = {
    client: this.userPoolId,
    user: options.user
  };

  return this.UserServiceGql.request({
    operationName: "RefreshToken",
    query: `
      mutation RefreshToken(
        $client: String!
        $user: String!
      ) {
        refreshToken(
          client: $client
          user: $user
        ) {
          token
          iat
          exp
        }
      }
    `,
    variables
  }, 'ownerToken');
}
