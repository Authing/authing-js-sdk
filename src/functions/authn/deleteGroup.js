import mutations from "../../graphql/mutations"

export default function (_id) {
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACGroup",
      query: mutations.deleteRBACGroup,
      variables: {
        _id
      }
    })
  })
}
