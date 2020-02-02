export default function group(_id) {
  const query = `
  query QueryRBACGroupPermissionList($_id: String!) {
    rbacGroup(_id: $_id) {
      permissions {
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
  let variables = { _id }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACGroupPermissionList",
      query,
      variables
    }).then(res => {
      return res.permissions
    })
  })
}