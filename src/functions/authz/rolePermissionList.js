export default function group(_id) {
  const query = `
  query QueryRBACRolePermissionList($_id: String!) {
    rbacRole(_id: $_id) {
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
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRolePermissionList",
      query,
      variables: {
        _id
      }
    }).then(res => {
      return res.permissions
    })
  })
}