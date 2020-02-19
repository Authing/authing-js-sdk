export default function userPatch(options) {
  if (!options) {
    throw Error('options is not provided');
  }
  if (!options.ids) {
    throw Error('ids in options is not provided');
  }
  options.registerInClient = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'userPatch',
      query: `query userPatch($ids: String!){
      userPatch(ids: $ids) {
        list {
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
          metadata
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
        totalCount
      }
    }`,
      variables: options
    }, 'ownerToken');
  });
}
