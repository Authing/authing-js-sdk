export default function (_id) {
  const query = `
  mutation deleteRBACPermission($_id: String!) {
    deleteRBACPermission(_id: $_id) {
      message
      code
      status
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "deleteRBACPermission",
      query,
      variables: {
        _id
      }
    })
  })
}
