import queries from "../../graphql/queries"
import checkOptions from "../../utils/checkOptions"

export default function group(options) {
  checkOptions(options, [
    {
      name: '_id',
      type: String
    }
  ])
  options.userPoolId = this.userPoolId;
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "QueryRBACGroup",
      query: queries.rbacGroup,
      variables: {
        _id: options._id
      }
    })
  })
}