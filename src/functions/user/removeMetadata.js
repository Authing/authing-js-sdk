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
    }
  ])

  let query = `
  mutation removeUserMetadata($input: RemoveUserMetadataInput!){
    removeUserMetadata(input: $input){
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
      operationName: "removeUserMetadata",
      query,
      variables: {
        input
      }
    })
  })
}