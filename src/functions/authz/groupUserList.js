export default function groupUserList(_id, options) {
  const query = `
  query QueryRBACGroupUserList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacGroup(_id: $_id) {
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
      }
    }
  }  
  `
  let variables = { _id }
  if (options) {
    variables = Object.assign(variables, options)
  }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACGroupUserList",
      query,
      variables
    }).then(res => {
      return res.users
    })
  })
}