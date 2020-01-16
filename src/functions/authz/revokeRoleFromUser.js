import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'userId',
      type: String
    },
    {
      name: 'roleId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "revokeRBACRoleFromUser",
      query: mutations.revokeRBACRoleFromUser,
      variables: {
        input: input
      }
    })
  })
}
