import mutations from "../../graphql/mutations"

export default function (_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "deleteRBACPermission",
      query: mutations.deleteRBACPermission,
      variables: {
        _id
      }
    })
  })
}
