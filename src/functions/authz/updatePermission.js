import mutations from "../../graphql/mutations"
import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
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
        input: input
      }
    })
  })
}
