import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: 'roleIdList',
      type: Array
    },
    {
      name: 'groupId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "RemoveRoleFromRBACGroupBatch",
      query: mutations.removeRoleFromRBACGroupBatch,
      variables: {
        input: input
      }
    })
  })
}
