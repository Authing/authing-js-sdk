export default function readOAuthList(params) {
  let variables = {}
  if (params) {
    variables = params
  }
  return this.OAuthServiceGql.request({
    operationName: 'ReadOauthList',
    query: `query ReadOauthList($clientId: String!, $useGuard: Boolean) {
      ReadOauthList(clientId: $clientId, useGuard: $useGuard) {
          _id
          name
          image
          description
          enabled
          client
          user
          url
          alias
      }
    }`,
    variables: {
      clientId: this.userPoolId,
      ...variables
    }
  }).then(list => list.filter(v => v.enabled))
}