export default function updateRolePermissions(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  const variables = {
    client: this.userPoolId,
    name: options.name,
    permissions: options.permissions,
    _id: options.roleId
  };

  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'UpdateRole',
      query: `
      mutation UpdateRole(
        $_id: String!
        $name: String!
        $client: String!
        $descriptions: String
        $permissions: String
      ) {
        updateRole(
          _id: $_id
          name: $name
          client: $client
          descriptions: $descriptions
          permissions: $permissions
        ) {
          _id,
          name,
          client,
          descriptions,
          permissions
        }
      }
    `,
      variables
    }, 'ownerToken');
  });
}
