export default async function (userPoolId,{phone,username,email}) {
  if (!userPoolId) {
    throw "userPoolId must be provided!"
  }

  let query = `
  query userExist($userPoolId: String!,$phone: String,$username: String,$email: String){
    userExist(userPoolId: $userPoolId,phone: $phone,username: $username,email: $email)
  }
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "userExist",
      query,
      variables: {
        userPoolId,
        phone,
        username,
        email,
      }
    })
  })
}