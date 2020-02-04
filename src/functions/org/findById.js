import buildTree from "../../utils/buildTree"
import _ from "lodash"

export default function findById(_id) {

  const query = `
  query org($_id: String!){
    org(_id: $_id) {
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
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "org",
      query,
      variables: {
        _id
      }
    }).then(res => {
      res.tree = buildTree(_.cloneDeep(res.nodes))
      return res
    })
  })
}