export default function unbindEmail(variables) {
  return this.UserServiceGql.request({
    operationName: "unbindEmail",
    query: `mutation unbindEmail(
      $user: String,
      $client: String,
    ){
      unbindEmail(
        user: $user,
        client: $client,
      ) {
        _id
        email
        emailVerified
        username
        nickname
        company
        photo
        browser
        registerInClient
        registerMethod
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        metadata
      }
    }`,
    variables
  });
}
