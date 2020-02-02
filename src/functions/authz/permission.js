export default function group(_id) {
  const query = `
  query rbacPermission($_id: String!) {
    rbacPermission(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
      description
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "rbacPermission",
      query,
      variables: {
        _id
      }
    })
  })
}