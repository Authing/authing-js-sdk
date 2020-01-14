import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

export default function (options) {
  checkOptions(options, [
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
        input: options
      }
    })
  })
}