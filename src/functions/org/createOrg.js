import checkInput from "../../utils/checkInput"
import buildTree from "../../utils/buildTree"
import _ from "lodash"

export default function createOrg(input) {
  checkInput(input, [{
    name: "rootGroupId",
    type: String
  }])

  const query = `
  mutation createOrg($input: CreateOrgInput!){
    createOrg(input: $input){
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
  input.userPoolId = this.userPoolId
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "createOrg",
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