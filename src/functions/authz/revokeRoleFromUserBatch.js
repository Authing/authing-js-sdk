import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'userIdList',
      type: String
    },
    {
      name: 'roleId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "revokeRBACRoleFromUserBatch",
      query: mutations.revokeRBACRoleFromUserBatch,
      variables: {
        input: input
      }
    })
  })
}
