import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

export default function (options) {
  checkOptions(options, [
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
        input: options
      }
    })
  })
}
