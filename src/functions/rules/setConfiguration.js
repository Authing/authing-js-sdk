export default function (key, value) {
  if (!key || !value) {
    throw "key or value is not provided!"
  }
  const query = `
mutation setRuleConfiguration($input: AddRuleConfigurationInput!) {
  setRuleConfiguration(input: $input) {
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
    value,
    userPoolId: this.userPoolId
  }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "setRuleConfiguration",
      query,
      variables: {
        input
      }
    })
  })
}