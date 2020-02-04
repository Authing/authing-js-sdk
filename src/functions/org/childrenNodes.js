import checkInput from "../../utils/checkInput"


export default function addNode(input) {

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
  query orgChildrenNodes($input: OrgChildrenNodesInput!){
    orgChildrenNodes(input: $input){
      group {
        _id
        name
        description
        createdAt
        updatedAt
      }

      depth
    }
  }
  `

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "orgChildrenNodes",
      query,
      variables: {
        input
      }
    }).then(res => {
      return res
    })
  })
}