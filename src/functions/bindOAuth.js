export default function bindOAuth(variables) {
  if (!variables) {
    throw Error('options is not provided');
  }
  if (!variables.type) {
    throw Error('type in options is not provided');
  }
  if (!variables.unionid) {
    throw Error('unionid in options is not provided');
  }
  if (!variables.userInfo) {
    throw Error('userInfo in options is not provided');
  }

  return this.UserServiceGql.request({
    operationName: 'bindOtherOAuth',
    query: `mutation bindOtherOAuth(
      $user: String,
      $client: String,
      $type: String!,
      $unionid: String!,
      $userInfo: String!
    ) {
      bindOtherOAuth (
        user: $user,
        client: $client,
        type: $type,
        unionid: $unionid,
        userInfo: $userInfo
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