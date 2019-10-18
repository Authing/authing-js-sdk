export function getUserPoolSettings() {
  let that = this
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
  }).then(res => {
    // 兼容以前的版本
    that.clientInfo = res
    that.userPoolSettings = res
    return res
  });
}
