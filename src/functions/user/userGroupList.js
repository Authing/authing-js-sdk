export default function (_id) {

  if (!_id) {
    throw "_id must be provided!"
  }

  let query = `
  query userGroupList($_id: String!){
    userGroupList(_id: $_id){
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
      operationName: "userGroupList",
      query,
      variables: {
        _id
      }
    })
  })
}