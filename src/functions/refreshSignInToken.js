export default function refreshSignInToken(options) {
  if (!options) {
    throw Error("options is not provided.");
  }
  if (!options.oidcAppId) {
    throw Error("options.oidcAppId is not provided.");
  }
  if (!options.refreshToken) {
    throw Error("options.refreshToken is not provided.");
  }

  return this.UserServiceGql.request({
    operationName: "RefreshSignInToken",
    query: `
      mutation RefreshSignInToken(
        $oidcAppId: String!
        $refreshToken: String!
      ) {
        refreshSignInToken(
          oidcAppId: $oidcAppId
          refreshToken: $refreshToken
        ) {
          id_token
          access_token
          refresh_token
          scope
          expires_in
        }
      }
    `,
    variables: options
  });
}
