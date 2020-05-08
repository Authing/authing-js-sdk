import checkInput from "../../utils/checkInput"

export default function (_id) {

  const query = `
  query groupMetadata($_id: String!) {
    groupMetadata(_id: $_id) {
      key
      value
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "groupMetadata",
      query,
      variables: input
    }).then(list => {
      return paseGroupMetadata(list)
    })
  })
}