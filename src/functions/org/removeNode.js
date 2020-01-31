import checkInput from "../../utils/checkInput"


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
      return res
    })
  })
}