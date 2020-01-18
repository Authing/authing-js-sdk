export default function groupList(options) {

  let variables = {
    userPoolId: this.userPoolId
  }
  if (options) {
    variables = Object.assign(variables, options)
  }
  const query = `
  query QueryRbacRoleList($userPoolId: String!, $sortBy: SortByEnum, $page: Int, $count: Int) {
    rbacRoleList(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
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
  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRbacRoleList",
      query,
      variables
    })
  })
}