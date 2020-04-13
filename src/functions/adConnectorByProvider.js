export default function adConnectorByProvider(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  if (!options.providerId) {
    throw Error("providerId is not provided.");
  }

  if (!options.providerType) {
    throw Error("providerType is not provided.");
  }

  return this.UserServiceGql.request({
    operationName: "adConnectorByProvider",
    query: `
    query adConnectorByProvider(
      $providerId: String!
      $providerType: providerType!
    ) {
      adConnectorByProvider(providerId: $providerId, providerType: $providerType) {
        _id
        name
        logo
        status
        
      }
    }
    `,
    variables: options,
  });
}
