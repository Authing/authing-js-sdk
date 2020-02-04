export default function findById(_id) {

  const query = `
  mutation deleteOrg($_id: String!){
    deleteOrg(_id: $_id) {
      code
      message
      status
    }
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "deleteOrg",
      query,
      variables: {
        _id
      }
    }).then(res => {
      return res
    })
  })
}