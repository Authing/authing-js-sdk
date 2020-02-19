import checkInput from "../../utils/checkInput"
import _ from "lodash"

export default function (input) {
  checkInput(input, [
    {
      name: "_id",
      type: String
    }
  ])

  const query = `
mutation updateRule($input: UpdateRuleInput!) {
  updateRule(input: $input) {
    _id
    name
    description
    type
    enabled
    code
    faasUrl
    createdAt
    updatedAt
  }
}  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "updateRule",
      query,
      variables: {
        input
      }
    })
  })
}