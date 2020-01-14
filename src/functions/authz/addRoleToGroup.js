import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

const createGroup = function (options) {
  checkOptions(options, [
    {
      name: 'roleId',
      type: String
    },
    {
      name: 'groupId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "AddRoleToRBACGroup",
      query: mutations.addRoleToRBACGroup,
      variables: {
        input: options
      }
    })
  })
}

export default createGroup