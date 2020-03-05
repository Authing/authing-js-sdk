export default function refreshSignInToken(options) {
  if (!options) {
    throw Error("options is not provided.");
  }
  options.userPoolId = this.userPoolId

  // if (!options.oidcAppId) {
  //   throw Error("options.oidcAppId is not provided.");
  // }
  if (!options.refreshToken) {
    throw Error("options.refreshToken is not provided.");
  }

  return this.UserServiceGql.request({
    operationName: "RefreshSignInToken",
    query: `
      mutation RefreshSignInToken(
        $oidcAppId: String,
        $userPoolId: String,
        $refreshToken: String!
      ) {
        refreshSignInToken(
          oidcAppId: $oidcAppId
          userPoolId: $userPoolId
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
