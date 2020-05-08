import checkInput from "../../utils/checkInput"

export default function (input) {

  checkInput(input, [
    {
      name: 'groupId',
      type: String
    },
    {
      name: 'key',
      type: String
    },
    {
      name: 'value',
      type: String
    }
  ])

  const query = `
  query searchGroupByMetadata($userPoolId: String!, $key:String!, $value: String!) {
    searchGroupByMetadata(userPoolId: $userPoolId, key: $key, value: $value) {
      list {
        _id
        name
        description
        createdAt
        updatedAt
      }
      totalCount
    }
  }  
  `

  if (typeof input.value !== "string") {
    input.value = JSON.stringify(input.value)
  }

  input.userPoolId = this.userPoolId
  
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "searchGroupByMetadata",
      query,
      variables: input
    })
  })
}