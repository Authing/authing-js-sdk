import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'name',
      type: String
    }
  ])
  let query = `
  mutation CreateRBACGroup($input: CreateRBACGroupInput!) {
    createRBACGroup(input: $input) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
  
  `
  input.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "CreateRBACGroup",
      query,
      variables: {
        input: input
      }
    })
  })
}
