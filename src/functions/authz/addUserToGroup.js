import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'userId',
      type: String
    },
    {
      name: 'groupId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "AddUserToRBACGroup",
      query: mutations.addUserToRBACGroup,
      variables: {
        input: input
      }
    })
  })
}