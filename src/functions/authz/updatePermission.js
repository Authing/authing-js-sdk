import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: '_id',
      type: String
    }
  ])
  const query = `
  mutation updateRBACPermission($input: UpdateRBACPermissionInput!){
    updateRBACPermission(input: $input){
        _id
        name
        createdAt
        updatedAt
        description
    }
}
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "updateRBACPermission",
      query,
      variables: {
        input
      }
    })
  })
}
