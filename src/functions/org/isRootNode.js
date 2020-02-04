import checkInput from "../../utils/checkInput"


export default function isRoot(input) {
  checkInput(input, [{
    name: "orgId",
    type: String
  }, {
    name: 'groupId',
    type: String
  }])
  const query = `
  query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!){
    isRootNodeOfOrg(input: $input)
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "isRootNodeOfOrg",
      query,
      variables: {
        input
      }
    }).then(res => {
      return res
    })
  })
}