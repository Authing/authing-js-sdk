import checkInput from "../../utils/checkInput"
import buildTree from "../../utils/buildTree"
import _ from "lodash"

export default function removeNode(input) {

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