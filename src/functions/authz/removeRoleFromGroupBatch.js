import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

const createGroup = function (options) {
  checkOptions(options, [
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
        input: options
      }
    })
  })
}

export default createGroup