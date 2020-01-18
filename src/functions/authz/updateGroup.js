import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: '_id',
      type: String
    }
  ])
  const query = `
  mutation UpdateRBACGroup($input: UpdateRBACGroupInput!) {
    updateRBACGroup(input: $input) {
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
      operationName: "UpdateRBACGroup",
      query,
      variables: {
        input
      }
    })
  })
}
