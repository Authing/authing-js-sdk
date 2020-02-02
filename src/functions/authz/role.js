export default function (_id) {
  const query = `
  query QueryRBACRole($_id: String!) {
    rbacRole(_id: $_id) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRole",
      query,
      variables: {
        _id
      }
    })
  })
}