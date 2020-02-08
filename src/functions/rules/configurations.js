export default function () {
  const query = `
  query ruleConfigurations($userPoolId: String!) {
    ruleConfigurations(userPoolId: $userPoolId) {
      totalCount
      list {
        key
        value
      }
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "ruleConfigurations",
      query,
      variables: {
        userPoolId: this.userPoolId
      }
    })
  })
}