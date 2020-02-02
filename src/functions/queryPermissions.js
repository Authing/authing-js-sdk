export default function queryPermissions(userId) {
  if (!userId) {
    throw Error('userId is not provided.');
  }

  const variables = {
    client: this.userPoolId,
    user: userId
  };

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'QueryRoleByUserId',
      query: `query QueryRoleByUserId($user: String!, $client: String!){
      queryRoleByUserId(user: $user, client: $client) {
        totalCount
        list {
          group {
            name
            permissions
          }
        }
      }
    }`,
      variables
    }, 'ownerToken');
  });
}
