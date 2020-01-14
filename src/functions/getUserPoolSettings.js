export default function getUserPoolSettings() {
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
          useSelfWxapp
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
    this.clientInfo = res
    this.userPoolSettings = res
    return res
  });
}
