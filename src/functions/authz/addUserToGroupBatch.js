import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

export default function (options) {
  checkOptions(options, [
    {
      name: 'userIdList',
      type: String
    },
    {
      name: 'groupId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "addUserToRBACGroupBatch",
      query: mutations.addUserToRBACGroupBatch,
      variables: {
        input: options
      }
    })
  })
}