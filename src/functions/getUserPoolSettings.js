export function getUserPoolSettings() {
  return this.UserServiceGql.request({
    operationName: "getUserPoolSettings",
    query: `query getUserPoolSettings($userPoolId: String!) {
      getUserPoolSettings(userPoolId: $userPoolId) {
          name
          logo
          descriptions
          allowedOrigins
          emailVerifiedDefault
          useMiniLogin
          registerDisabled
          showWXMPQRCode
          enableEmail
          jwtExpired
        }
      }`,
    variables: {
      userPoolId: this.userPoolId
    }
  });
}
