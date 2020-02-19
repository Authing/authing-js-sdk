import checkInput from "../../utils/checkInput"

export default function (input) {
  checkInput(input, [
    {
      name: "_id",
      type: String
    },
    {
      name: "key",
      type: String,
    },
    {
      name: "value",
      type: String
    }
  ])

  let query = `
  mutation setUserMetadata($input: SetUserMetadataInput!) {
    setUserMetadata(input: $input) {
      totalCount
      list {
        key
        value
      }
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "setUserMetadata",
      query,
      variables: {
        input
      }
    })
  })
}