export default function () {
  const query = `
  query ruleEnv($userPoolId: String!) {
    ruleEnv(userPoolId: $userPoolId) {
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
      operationName: "ruleEnv",
      query,
      variables: {
        userPoolId: this.userPoolId
      }
    })
  })
}