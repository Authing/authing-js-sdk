export default function groupList(options) {

  let variables = {
    userPoolId: this.userPoolId
  }
  if (options) {
    variables = Object.assign(variables, options)
  }
  const query = `
  query QueryRbacGroupList($userPoolId: String!, $sortBy: SortByEnum = CREATEDAT_DESC, $page: Int = 0, $count: Int = 10) {
    rbacGroupList(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
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
      operationName: "QueryRbacGroupList",
      query,
      variables
    })
  })
}