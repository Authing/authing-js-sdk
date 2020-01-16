import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'name',
      type: String
    },
    {
      name: 'description',
      type: String
    }
  ])
  input.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "CreateRBACRole",
      query: mutations.createRBACRole,
      variables: {
        input: input
      }
    })
  })
}
