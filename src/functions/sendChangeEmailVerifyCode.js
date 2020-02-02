export default function sendChangeEmailVerifyCode(options) {
    if (!options) {
        throw Error("options is not provided");
    }
    if (!options.email) {
        throw Error("email in options is not provided");
    }

    options.userPoolId = this.userPoolId;
    return this.UserServiceGql.request({
        operationName: "sendChangeEmailVerifyCode",
        query: `
        mutation sendChangeEmailVerifyCode(
          $email: String!,
          $userPoolId: String!
        ){
            sendChangeEmailVerifyCode(
            email: $email,
            userPoolId: $userPoolId
          ) {
              message
              code
              status
          }
        }
      `,
        variables: options
    });
}
