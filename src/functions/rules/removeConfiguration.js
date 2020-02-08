export default function (key) {
  if (!key) {
    throw "key is not provided!"
  }
  const query = `
  mutation removeRuleConfiguration($input: RemoveRuleConfigurationInput!) {
    removeRuleConfiguration(input: $input) {
      totalCount
      list {
        key
        value
      }
    }
  }  
  `
  let input = {
    key,
    userPoolId: this.userPoolId
  }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "removeRuleConfiguration",
      query,
      variables: {
        input
      }
    })
  })
}