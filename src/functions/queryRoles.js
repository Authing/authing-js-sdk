export default function queryRoles(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  const variables = {
    clientId: this.userPoolId,
    page: options.page,
    count: options.count
  };

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'ClientRoles',
      query: `
      query ClientRoles(
        $clientId: String!
        $page: Int
        $count: Int
      ) {
        clientRoles(
          client: $clientId
          page: $page
          count: $count
        ) {
          totalCount
          list {
            _id
            name
            descriptions
            client
            createdAt
            permissions
          }
        }
      }
    `,
      variables
    }, 'ownerToken');
  });
}
