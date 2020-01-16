import queries from "../../graphql/queries"
import checkInput from "../../utils/checkInput"

export default function groupList() {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "rbacPermissionList",
      query: queries.rbacPermissionList,
      variables: {
        userPoolId: this.userPoolId
      }
    })
  })
}