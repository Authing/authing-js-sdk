import encryption from "../utils/_encryption";

export default function changePassword(options) {
  if (!options) {
    throw Error("options is not provided");
  }
  if (!options.email) {
    throw Error("email in options is not provided");
  }
  if (!options.password) {
    throw Error("password in options is not provided");
  }
  if (!options.verifyCode) {
    throw Error("verifyCode in options is not provided");
  }
  options.client = this.userPoolId;
  options.password = encryption(options.password);
  return this.UserServiceGql.request({
    operationName: "changePassword",
    query: `
      mutation changePassword(
        $email: String!,
        $client: String!,
        $password: String!,
        $verifyCode: String!
      ){
        changePassword(
          email: $email,
          client: $client,
          password: $password,
          verifyCode: $verifyCode
        ) {
          _id
          email
          emailVerified
          username
          nickname
          company
          photo
          browser
          registerInClient
          registerMethod
          oauth
          token
          tokenExpiredAt
          loginsCount
          lastLogin
          lastIP
          signedUp
          blocked
          isDeleted
          metadata
        }
      }
    `,
    variables: options
  });
}
