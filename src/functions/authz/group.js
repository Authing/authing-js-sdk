export default function group(_id) {
  const query = `
  query QueryRBACGroup($_id: String!) {
    rbacGroup(_id: $_id) {
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
      operationName: "QueryRBACGroup",
      query,
      variables: {
        _id
      }
    })
  })
}