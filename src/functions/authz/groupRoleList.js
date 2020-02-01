export default function groupRoleList(_id) {
  const query = `
  query QueryRBACGroupRoleList($_id: String!) {
    rbacGroup(_id: $_id) {
      _id
      name
      description
      roles {
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
      operationName: "QueryRBACGroupRoleList",
      query,
      variables
    }).then(res => {
      return res.roles
    })
  })
}