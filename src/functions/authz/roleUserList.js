export default function group(_id) {
  const query = `
  query QueryRBACRoleUserList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacRole(_id: $_id) {
      _id
      userPoolId
      name
      description
      users(sortBy: $sortBy, page: $page, count: $count) {
        totalCount
        list {
          _id
          name
          email
        }
      }
    }
  }
  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRoleUserList",
      query,
      variables: {
        _id
      }
    })
  })
}