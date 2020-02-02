export default function queryMFA(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  const variables = {
    userPoolId: this.opts.userPoolId,
    userId: options.userId
  };

  return this.UserServiceGql.request({
    operationName: "queryMFA",
    query: `
      query queryMFA($_id: String,$userId: String,$userPoolId: String) {
        queryMFA(_id: $_id, userId: $userId, userPoolId: $userPoolId) {
          _id
          userId
          userPoolId
          enable
          shareKey
        }
      }`,
    variables
  });
}
