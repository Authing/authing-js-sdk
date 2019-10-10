export function checkLoginStatus(token) {
  return this.UserServiceGql.request({
    operationName: "checkLoginStatus",
    query: `query checkLoginStatus($token: String) {
      checkLoginStatus(token: $token) {
        status
        code
        message
      }
    }`,
    variables: {
      token
    }
  });
}
