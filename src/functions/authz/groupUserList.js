export default function group(_id) {
  const query = `
  query QueryRBACGroupUserList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacGroup(_id: $_id) {
      _id
      name
      description
      users(sortBy: $sortBy, page: $page, count: $count) {
        totalCount
        list {
          _id
          unionid
          email
          emailVerified
          username
          nickname
          company
          photo
          phone
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
      }
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACGroupUserList",
      query,
      variables: {
        _id
      }
    })
  })
}