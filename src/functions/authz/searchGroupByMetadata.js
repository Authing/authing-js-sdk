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
      key
      value
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "searchGroupByMetadata",
      query,
      variables: input
    })
  })
}