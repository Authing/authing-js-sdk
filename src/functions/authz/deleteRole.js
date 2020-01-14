import mutations from "../../graphql/mutations"

export default function (_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACRole",
      query: mutations.deleteRBACRole,
      variables: {
        _id
      }
    })
  })
}
