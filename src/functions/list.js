export default function list(page, count, queryOptions) {
  page = page || 1;
  count = count || 10;
  queryOptions = queryOptions || {
    populate: false
  };

  const options = {
    registerInClient: this.userPoolId,
    page,
    count,
    populate: queryOptions.populate
  };
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'users',
      query: `query users($registerInClient: String, $page: Int, $count: Int, $populate: Boolean){
      users(registerInClient: $registerInClient, page: $page, count: $count, populate: $populate) {
          totalCount
          list {
          _id
          email
          emailVerified
          username
          nickname
          phone
          unionid
          oauth
          company
          photo
          browser
          registerInClient
          registerMethod
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
            list{
              _id
              when
              success
              ip
              result
            }
          }
        }
      }
    }`,
      variables: options
    }, 'ownerToken');
  });
}
