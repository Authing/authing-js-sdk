export function assignUserToRole(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  const variables = {
    client: this.userPoolId,
    group: options.roleId,
    user: options.user
  };

  return this.UserServiceGql.request({
    operationName: 'AssignUserToRole',
    query: `
      mutation AssignUserToRole(
        $group: String!
        $client: String!
        $user: String!
      ) {
        assignUserToRole(
          group: $group
          client: $client
          user: $user
        ) {
          totalCount,
          list {
            _id,
            client {
              _id
            },
            user {
              _id
            },
            createdAt
          }
        }
      }
    `,
    variables
  })
}