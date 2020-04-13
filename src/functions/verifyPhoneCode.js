export default function verifyPhoneCode(options) {
  if (!options) {
    throw Error("options is not provided");
  }
  if (!options.phone) {
    throw Error("phone in options is not provided");
  }
  if (!options.phoneCode) {
    throw Error("phoneCode in options is not provided");
  }
  options.userPoolId = this.userPoolId;

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "checkPhoneCode",
      query: `
      query checkPhoneCode(
        $phone: String!,
        $phoneCode: String!,
        $userPoolId: String!
      ) {
        checkPhoneCode (
          phone: $phone,
          phoneCode: $phoneCode,
          userPoolId: $userPoolId,
        ) {
          code
          message
          status
        }
      }
    `,
      variables: options
    }, 'ownerToken');
  });
}
