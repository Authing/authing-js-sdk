import queries from "../../graphql/queries"
import checkOptions from "../../utils/checkOptions"

export default function groupList() {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRbacRoleList",
      query: queries.rbacRoleList,
      variables: {
        userPoolId: this.userPoolId
      }
    })
  })
}