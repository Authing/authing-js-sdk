import buildTree from "../../utils/buildTree"
import _ from "lodash"

export default function findById() {

  const query = `
  query orgs($userPoolId: String!){
    orgs(userPoolId: $userPoolId) {
      totalCount
      list {
        _id
        nodes {
          _id
          name
          description
          createdAt
          updatedAt
          children
          root
        }
      }
    }
  }
  `
  let userPoolId = this.userPoolId
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "orgs",
      query,
      variables: {
        userPoolId
      }
    }).then(res => {
      for (let org of res.list) {
        org.tree = buildTree(_.cloneDeep(org.nodes))
      }
      return res
    })
  })
}