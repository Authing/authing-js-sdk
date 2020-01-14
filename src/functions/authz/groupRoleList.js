import queries from "../../graphql/queries"

export default function group(_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACGroupRoleList",
      query: queries.rbacGroupRoleList,
      variables: {
        _id
      }
    })
  })
}