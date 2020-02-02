export default function getAuthedAppList(options) {
  if (!options) {
    throw Error("options is not provided.");
  }
  const variables = {
    clientId: this.userPoolId,
    userId: options.userId,
    page: options.page,
    count: options.count
  };

  return this.OAuthServiceGql.request({
    operationName: "GetUserAuthorizedApps",
    query: `
    query GetUserAuthorizedApps($clientId: String, $userId: String, $page: Int, $count: Int) {
      GetUserAuthorizedApps(clientId: $clientId, userId: $userId, page: $page, count: $count) {
          OAuthApps {
              _id
              name
              domain
              clientId
              description
              isDeleted
              grants
              redirectUris
              when
          }
          OIDCApps {
              _id
              name
              client_id
              domain
              description
              authorization_code_expire
              when
              isDeleted
              id_token_signed_response_alg
              response_types
              grant_types
              token_endpoint_auth_method
              redirect_uris
              image
              access_token_expire
              id_token_expire
              cas_expire
  
          }
          totalCount
      }
  }`,
    variables
  });
}
