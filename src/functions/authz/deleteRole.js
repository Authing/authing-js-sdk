export default function (_id) {
  const query = `
  mutation DeleteRBACRole($_id: String!) {
    deleteRBACRole(_id: $_id) {
      message
      code
      status
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACRole",
      query,
      variables: {
        _id
      }
    })
  })
}
