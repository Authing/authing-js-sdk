export default function (_id) {

  if (!_id) {
    throw "_id must be provided!"
  }

  let query = `
  query userPermissionList($_id: String!){
    userPermissionList(_id: $_id){
        totalCount
        rawList
        list {
          _id
          name
          description
          createdAt
          updatedAt
        }
    }
}
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "userPermissionList",
      query,
      variables: {
        _id
      }
    })
  })
}