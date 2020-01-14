import queries from "../../graphql/queries"

export default function group(_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACRole",
      query: queries.rbacRole,
      variables: {
        _id
      }
    })
  })
}