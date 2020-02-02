export default function (idList) {

  if (!idList instanceof Array) {
    throw "idList must be an array!"
  }

  const query = `
  mutation deleteRBACPermissionBatch($idList: [String!]!) {
    deleteRBACPermissionBatch(idList: $idList) {
      message
      code
      status
    }
  }  
  `

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "deleteRBACPermissionBatch",
      query,
      variables: {
        idList
      }
    })
  })
}
