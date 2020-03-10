import checkInput from "../../utils/checkInput"

export default function (input) {

  checkInput(input, [
    {
      name: "key",
      type: String
    },
    {
      name: "value",
      type: Object
    }
  ])

  input.userPoolId = this.userPoolId
  input.operator = input.operator || "EQUAL"
  if(input.operator === "EQUAL"){
    input.value = {
      equal: input.value
    }
  } else if (input.operator === "IN") {
    input.value = {
      in: input.value
    }
  } else if (input.operator === "CONTAINS") {
    input.value = {
      contains: input.value
    }
  }
  let query = `
  query searchUserByMetadata($input: SearchUserByMetadataInput!){
    searchUserByMetadata(input: $input){
      totalCount
      list {
        _id
        email
        emailVerified
        unionid
        openid
        oauth
        registerMethod
        username
        nickname
        company
        photo
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
      operationName: "searchUserByMetadata",
      query,
      variables: {
        input
      }
    })
  })
}