export default function groupList(options) {
  let variables = {
    userPoolId: this.userPoolId
  }
  if (options) {
    variables = Object.assign(variables, options)
  }
  const query = `
  query rbacPermissionList($userPoolId: String!, $sortBy: SortByEnum, $page: Int, $count: Int) {
    rbacPermissionList(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
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
      operationName: "rbacPermissionList",
      query,
      variables: variables
    })
  })
}