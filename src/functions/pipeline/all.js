export default function () {
  const query = `
  query rules($userPoolId: String!) {
    rules(userPoolId: $userPoolId) {
      totalCount
      list {
        _id
        name
        description
        type
        enabled
        faasUrl
        code
        createdAt
        updatedAt
      }
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "rules",
      query,
      variables: {
        userPoolId: this.userPoolId
      }
    })
  })
}