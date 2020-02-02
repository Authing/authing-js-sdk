export default function (idList) {

  if (!idList instanceof Array) {
    throw "idList must be an array!"
  }
  const query = `
  mutation DeleteRBACRoleBatch($idList: [String!]!) {
    deleteRBACRoleBatch(idList: $idList) {
      message
      code
      status
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACRoleBatch",
      query,
      variables: {
        idList
      }
    })
  })
}
