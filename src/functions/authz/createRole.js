import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'name',
      type: String
    }
  ])
  const query = `
  mutation CreateRBACRole($input: CreateRBACRoleInput!){
    createRBACRole(input: $input){
        _id
        name
        description
        updatedAt
        createdAt
    }
}
  `
  input.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "CreateRBACRole",
      query,
      variables: {
        input
      }
    })
  })
}
