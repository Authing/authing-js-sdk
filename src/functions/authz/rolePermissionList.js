export default function group(_id) {
  const query = `
  query QueryRBACRolePermissionList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacRole(_id: $_id) {
      _id
      name
      description
      createdAt
      updatedAt
      permissions (sortBy: $sortBy, page: $page, count: $count) {
        totalCount
        list {
          _id
          name
          description
          createdAt
          updatedAt
        }
      }
    }
  }
  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRolePermissionList",
      query,
      variables: {
        _id
      }
    })
  })
}