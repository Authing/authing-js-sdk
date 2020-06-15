import checkInput from "../../utils/checkInput"

export default function (options) {
  checkInput(input, [
    {
      name: "orgId",
      type: String
    },
    {
      name: "nodeId",
      type: String
    },
    {
      name: "query",
      type: String
    },
  ])

  const query = `
  query searchOrgNodeUser(
    $orgId: String!
    $nodeId: String!
    $query: String!
    $includeChildrenNodes: Boolean = false
  ) {
    searchOrgNodeUser(
      orgId: $orgId
      nodeId: $nodeId
      query: $query
      includeChildrenNodes: $includeChildrenNodes
    ) {
      totalCount
      list {
        _id
        unionid
        email
        emailVerified
        username
        nickname
        company
        photo
        phone
        browser
        registerInClient
        registerMethod
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        metadata
      }
    }
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "searchOrgNodeUser",
      query,
      variables: options
    }).then(res => {
      return res
    })
  })
}