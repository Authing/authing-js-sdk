import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'name',
      type: String
    }
  ])
  const query = `
  mutation createRBACPermission($input: CreateRBACPermissionInput!){
    createRBACPermission(input: $input){
        _id
        name
        userPoolId
        createdAt
        updatedAt
        description
    }
}
  `
  input.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "createRBACPermission",
      query,
      variables: {
        input: input
      }
    })
  })
}
