import queries from "../../graphql/queries"
import checkInput from "../../utils/checkInput"

export default function groupList(options) {

  let variables = {
    userPoolId: this.userPoolId
  }
  if (options) {
    variables = Object.assign(variables, options)
  }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRbacRoleList",
      query: queries.rbacRoleList,
      variables
    })
  })
}