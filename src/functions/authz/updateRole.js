import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: '_id',
      type: String
    }
  ])
  const query = `
  mutation UpdateRBACRole($input: UpdateRBACRoleInput!){
    updateRBACRole(input: $input){
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
      operationName: "UpdateRBACRole",
      query,
      variables: {
        input: input
      }
    })
  })
}
