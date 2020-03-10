export default function (_id) {

  if (!_id) {
    throw "_id must be provided!"
  }

  let query = `
  query userMetadata($_id: String!) {
    userMetadata(_id: $_id) {
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
      operationName: "userMetadata",
      query,
      variables: {
        _id
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