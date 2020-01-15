import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

export default function (options) {
  checkOptions(options, [
    {
      name: '_id',
      type: String
    },
    {
      name: 'name',
      type: String
    },
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "updateRBACPermission",
      query: mutations.updateRBACPermission,
      variables: {
        input: options
      }
    })
  })
}
