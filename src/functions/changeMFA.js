export default function changeMFA(options) {
  // 用于修改某一用户池（应用）的 MFA 状态
  if (!options) {
    throw Error("options is not provided.");
  }

  const variables = {
    userPoolId: this.opts.userPoolId,
    userId: options.userId,
    enable: options.enable
  };

  return this.UserServiceGql.request({
    operationName: "changeMFA",
    query: `
      mutation changeMFA($_id: String,$userId: String,$userPoolId: String,$enable: Boolean!, $refreshKey: Boolean) {
        changeMFA(_id: $_id, userId: $userId, userPoolId: $userPoolId, enable: $enable, refreshKey: $refreshKey) {
            _id
            userId
            userPoolId
            shareKey
            enable
        }
    }`,
    variables
  }, 'userToken');
}
