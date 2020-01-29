import checkInput from "../../utils/checkInput"


export default async function addNode(input) {

  checkInput(input, [
    {
      name: "orgId",
      type: String
    },
    {
      name: "groupId",
      type: String
    },
    {
      name: "parentId",
      type: String
    },
  ])
  const query = `
  mutation addOrgNode($input: AddOrgNodeInput!){
    addOrgNode(input: $input){
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
      operationName: "addOrgNode",
      query,
      variables: {
        input
      }
    }).then(res => {
      return res
    })
  })
}