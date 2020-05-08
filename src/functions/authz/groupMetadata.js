import { paseGroupMetadata } from "../../utils/parseGroupMetadata"

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
      variables: {
        _id
      }
    }).then(list => {
      return paseGroupMetadata(list)
    })
  })
}