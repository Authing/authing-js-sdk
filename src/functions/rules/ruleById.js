export default function (_id) {
  const query = `
  query ruleById($_id: String!) {
    ruleById(_id: $_id) {
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
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "ruleById",
      query,
      variables: {
        _id
      }
    })
  })
}