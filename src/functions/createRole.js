export default function createRole(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  const variables = {
    client: this.opts.userPoolId,
    name: options.name,
    descriptions: options.descriptions
  };
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'CreateRole',
      query: `
        mutation CreateRole(
          $name: String!
          $client: String!
          $descriptions: String
        ) {
          createRole(
            name: $name
            client: $client
            descriptions: $descriptions
          ) {
            _id,
            name,
            client,
            descriptions
          }
        }
      `,
      variables
    }, 'ownerToken');
  });
}
