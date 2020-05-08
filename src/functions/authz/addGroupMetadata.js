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
    },
    {
      name: 'value',
      type: String
    }
  ])

  if (typeof input.value !== "string") {
    input.value = JSON.stringify(input.value)
  }

  const query = `
  mutation addGroupMetadata($groupId: String!, $key: String!, $value: String!) {
    addGroupMetadata(groupId: $groupId, key: $key, value: $value) {
      key
      value
    }
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "addGroupMetadata",
      query,
      variables: input
    }).then(list => {
      return paseGroupMetadata(list)
    })
  })
}