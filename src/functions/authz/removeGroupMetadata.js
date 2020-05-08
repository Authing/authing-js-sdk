import checkInput from "../../utils/checkInput"
import { paseGroupMetadata } from "../../utils/parseGroupMetadata"

export default function (input) {

  checkInput(input, [
    {
      name: 'groupId',
      type: String
    },
    {
      name: 'key',
      type: String
    }
  ])

  const query = `
  mutation removeGroupMetadata($groupId: String!, $key: String!) {
    removeGroupMetadata(groupId: $groupId, key: $key) {
      key
      value
    }
  }  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "removeGroupMetadata",
      query,
      variables: input
    }).then(list => {
      return paseGroupMetadata(list)
    })
  })
}