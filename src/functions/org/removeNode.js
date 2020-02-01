import checkInput from "../../utils/checkInput"
import buildTree from "../../utils/buildTree"
import _ from "lodash"

export default async function removeNode(input) {

  checkInput(input, [
    {
      name: "orgId",
      type: String
    },
    {
      name: "groupId",
      type: String
    }
  ])
  const query = `
  mutation removeOrgNode($input: RemoveOrgNodeInput!){
    removeOrgNode(input: $input){
      _id
      nodes {
        _id
        children
        root
        group {
          _id
          name
          description
          createdAt
          updatedAt
        }
      }
    }
  }
  `

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "removeOrgNode",
      query,
      variables: {
        input
      }
    }).then(res => {
      res.tree = buildTree(_.cloneDeep(res.nodes))
      return res
    })
  })
}