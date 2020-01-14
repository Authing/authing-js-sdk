export default function checkLoginStatus(token) {
  return this.UserServiceGql.request({
    operationName: "checkLoginStatus",
    query: `query checkLoginStatus($token: String) {
      checkLoginStatus(token: $token) {
        status
        code
        message
        token {
          data {
            email
            id
            clientId
            unionid
          }
          iat
          exp
        }
      }
    }`,
    variables: {
      token
    }
  }, 'userToken');
}
