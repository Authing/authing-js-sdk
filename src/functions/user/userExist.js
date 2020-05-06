export default function (userPoolId,options) {
  if (!userPoolId) {
    throw "userPoolId must be provided!"
  }

  let query = `
  query userExist($userPoolId: String!,$phone: String,$username: String,$email: String){
    userExist(userPoolId: $userPoolId,phone: $phone,username: $username,email: $email)
  }
  `
  return this.UserServiceGql.request({
    operationName: "userExist",
    query,
    variables: {
      userPoolId,
      ...options
    }
  })
}