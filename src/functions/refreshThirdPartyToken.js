export default function refreshThirdPartyToken(userId) {
  if (!userId) {
    throw Error("userId is not provided.");
  }

  const variables = {
    userPoolId: this.userPoolId,
    userId: userId
  };
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request(
      {
        operationName: "RefreshThirdPartyToken",
        query: `
          mutation RefreshThirdPartyToken($userPoolId: String!, $userId: String!) {
            refreshThirdPartyToken(userPoolId: $userPoolId, userId: $userId) {
              refreshSuccess
              message
              provider
              refreshToken
              accessToken
              updatedAt
            }
        }
        `,
        variables
      },
      "ownerToken"
    );
  });
}
