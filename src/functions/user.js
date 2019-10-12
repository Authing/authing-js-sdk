export function user(options) {
  if (!options) {
    throw Error('options is not provided');
  }
  if (!options.id) {
    throw Error('id in options is not provided');
  }
  options.registerInClient = this.userPoolId;
  return this.FetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'user',
      query: `query user($id: String!, $registerInClient: String!){
      user(id: $id, registerInClient: $registerInClient) {
        _id
        unionid
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
        userLocation {
          _id
          when
          where
        }
        userLoginHistory {
          totalCount
          list {
            _id
            when
            success
            ip
            result
          }
        }
      }
    }`,
      variables: options
    });
  });
}
