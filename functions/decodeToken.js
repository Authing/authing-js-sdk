export default function decodeToken(token) {
  return this.UserServiceGql.request({
    operationName: "decodeJwtToken",
    query: `query decodeJwtToken($token: String) {
      decodeJwtToken(token: $token) {
          data {
            email
            id
            clientId
          }
          status {
            code
            message
          }
          iat
          exp
        }
      }`,
    variables: {
      token
    }
  });
}
