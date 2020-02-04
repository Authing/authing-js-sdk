export default function (_id) {
  const query = `
  query orgRootNode($_id: String!){
    orgRootNode(_id: $_id){
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
      operationName: "orgRootNode",
      query,
      variables: {
        _id
      }
    }).then(res => {
      return res
    })
  })
}