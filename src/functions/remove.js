export default function remove(_id, operator) {
  if (!_id) {
    throw Error("_id is not provided");
  }
  let ids;
  if (Array.isArray(_id)) {
    ids = _id;
  } else if (typeof _id === "string") {
    ids = [_id];
  } else {
    throw new Error("请传入一个 User ID 字符串或 User ID 字符串数组");
  }
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request(
      {
        operationName: "removeUsers",
        query: `mutation removeUsers($ids: [String], $registerInClient: String, $operator: String) {
      removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {
        _id
      }
    }`,
        variables: {
          ids,
          registerInClient: this.userPoolId,
          operator,
        },
      },
      "ownerToken"
    );
  });
}
