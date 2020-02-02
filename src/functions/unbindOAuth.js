export default function unbindOAuth(variables) {
  if (!variables) {
    throw Error("options is not provided");
  }
  if (!variables.type) {
    throw Error("type in options is not provided");
  }

  return this.UserServiceGql.request({
    operationName: "unbindOtherOAuth",
    query: `mutation unbindOtherOAuth(
      $user: String,
      $client: String,
      $type: String!
    ){
      unbindOtherOAuth(
        user: $user,
        client: $client,
        type: $type
      ) {
        _id
        user
        client
        type
        userInfo
        unionid
        createdAt
      }
    }`,
    variables
  });
}
