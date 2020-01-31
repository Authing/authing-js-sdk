export default async function findById() {

  const query = `
  query orgs($userPoolId: String!){
    orgs(userPoolId: $userPoolId) {
      totalCount
      list {
        _id
        nodes {
          _id
          children
          root
        }
      }
    }
  }
  `
  let userPoolId = this.userPoolId
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "orgs",
      query,
      variables: {
        userPoolId
      }
    }).then(res => {
      return res
    })
  })
}