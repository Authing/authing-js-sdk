export default function (_id) {
  const query = `
  mutation DeleteRBACGroup($_id: String!) {
    deleteRBACGroup(_id: $_id) {
      message
      code
      status
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACGroup",
      query,
      variables: {
        _id
      }
    })
  })
}
