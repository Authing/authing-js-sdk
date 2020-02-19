export default function (_id) {
  const query = `
  mutation deleteRule($_id: String!) {
    deleteRule(_id: $_id) {
      code
      message
    }
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "deleteRule",
      query,
      variables: {
        _id
      }
    })
  })
}