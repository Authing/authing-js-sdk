import checkInput from "../../utils/checkInput"
import _ from "lodash"

export default function (input) {
  checkInput(input, [
    {
      name: "name",
      type: String
    },
    {
      name: "type",
      type: String,
    },
    {
      name: "code",
      type: String
    }
  ])

  const query = `
  mutation createRule($input: CreateRuleInput!) {
    createRule(input: $input) {
      _id
      name
      description
      type
      enabled
      faasUrl
      code
      createdAt
      updatedAt
    }
  }  
  `
  input.userPoolId = this.userPoolId
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "createRule",
      query,
      variables: {
        input
      }
    })
  })
}