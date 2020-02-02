export default function revokeAuthedApp(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  const variables = {
    userPoolId: this.userPoolId,
    userId: options.userId,
    appId: options.appId
  };

  return this.OAuthServiceGql.request({
    operationName: "RevokeUserAuthorizedApp",
    query: `
    mutation RevokeUserAuthorizedApp($userPoolId: String, $userId: String, $appId: String) {
      RevokeUserAuthorizedApp(userPoolId: $userPoolId, userId: $userId, appId: $appId) {
          isRevoked
          _id
          scope
          appId
          userId
          type
          when
      }
    }`,
    variables
  });
}
