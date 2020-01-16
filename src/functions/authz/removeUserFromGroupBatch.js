import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
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
      operationName: "removeUserFromRBACGroupBatch",
      query: mutations.removeUserFromRBACGroupBatch,
      variables: {
        input: input
      }
    })
  })
}
