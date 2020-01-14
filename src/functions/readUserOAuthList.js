export default function readUserOAuthList(variables) {
  return this.OAuthServiceGql.request({
    operationName: 'notBindOAuthList',
    query: `query notBindOAuthList($user: String, $client: String) {
      notBindOAuthList(user: $user, client: $client) {
        type
        oAuthUrl
        image
        name
        binded
      }
    }`,
    variables
  }, 'userToken')
}