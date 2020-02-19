export default function (key, value) {
  if (!key || !value) {
    throw "key or value is not provided!"
  }
  const query = `
  mutation setRuleEnv($input: SetRuleEnvInput!) {
    setRuleEnv(input: $input) {
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
      operationName: "setRuleEnv",
      query,
      variables: {
        input
      }
    })
  })
}