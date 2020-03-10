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

  if(typeof input.value !== "string") {
    input.value = JSON.stringify(input.value)
  }

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
    }).then(res => {
      for(let item of res.list){
        try{
          item.value = parsetInt(item.value)
        }catch(error){}

        try{
          item.value = JSON.parse(item.value)
        }catch(error){}
      }
      return res
    })
  })
}