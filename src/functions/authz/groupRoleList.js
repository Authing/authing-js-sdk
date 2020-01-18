export default function group(_id) {
  const query = `
  query QueryRBACGroupRoleList($_id: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacGroup(_id: $_id) {
      _id
      name
      description
      roles(sortBy: $sortBy, page: $page, count: $count) {
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
      operationName: "QueryRBACGroupRoleList",
      query,
      variables: {
        _id
      }
    })
  })
}