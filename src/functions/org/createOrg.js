import checkInput from "../../utils/checkInput"

export default async function createOrg(input) {
  checkInput(input, [{
    name: "rootId",
    type: String
  }])

  const query = `
  mutation createOrg($input: CreateOrgInput!){
    createOrg(input: $input){
      _id
      nodes {
        _id
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
      return res
    })
  })
}