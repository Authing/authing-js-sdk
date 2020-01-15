import queries from "../../graphql/queries"

export default function group(_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRoleUserList",
      query: queries.rbacRoleUserList,
      variables: {
        _id
      }
    })
  })
}