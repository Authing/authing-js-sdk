import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

const createGroup = function (options) {
  checkOptions(options, [
    {
      name: 'name',
      type: String
    },
    {
      name: 'description',
      type: String
    }
  ])
  options.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "CreateRBACRole",
      query: mutations.createRBACRole,
      variables: {
        input: options
      }
    })
  })
}

export default createGroup