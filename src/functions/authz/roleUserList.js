export default function roleUserList(_id, options) {
  const query = `
  query QueryRBACRoleUserList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacRole(_id: $_id) {
      users(sortBy: $sortBy, page: $page, count: $count) {
        totalCount
        list {
          _id,
          email,
          phone,
          emailVerified,
          unionid,
          openid,
          oauth,
          registerMethod,
          username,
          nickname,
          company,
          photo,
          browser,
          signedUp
          lastLogin
          token,
          blocked,
          device,
          metadata,
          registerInClient
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
      operationName: "QueryRBACRoleUserList",
      query,
      variables
    }).then(res => {
      return res.users
    })
  })
}