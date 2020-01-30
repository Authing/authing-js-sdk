export default async function createOrg(_id) {

  const query = `
  query org($_id: String!){
    org(_id: $_id) {
      _id
      nodes {
        _id
        children
        root
      }
    }
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "org",
      query,
      variables: {
        _id
      }
    }).then(res => {
      return res
    })
  })
}