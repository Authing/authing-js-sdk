import { CreateOIDCApp } from './../graphqlapi/management.connection.createOidcProvider';
import { GetOIDCAppList } from './../graphqlapi/management.connection.oidcProviders';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions, CreateOIDCProviderInput } from './types';
import _ from 'lodash'

export class ConnectionManagementClient {
  options: ManagementClientOptions
  graphqlClient: GraphqlClient
  tokenProvider: ManagementTokenProvider

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider) {
    this.options = options
    this.graphqlClient = graphqlClient
    this.tokenProvider = tokenProvider
  }

  async oidcProviders(page = 0, count = 10) {
    const res = await GetOIDCAppList(this.graphqlClient, this.tokenProvider, {
      clientId: this.options.userPoolId,
      page,
      count
    })
    return res.GetOIDCAppList
  }

  async createOidcProvider(app: CreateOIDCProviderInput) {
    app = Object.assign({}, {
      "description": "",
      "image": "",
      "grant_types": ["authorization_code", "refresh_token"],
      "token_endpoint_auth_method": "client_secret_post",
      "response_types": ["code"],
      "id_token_signed_response_alg": "HS256",
      "id_token_encrypted_response_alg": "不加密",
      "id_token_encrypted_response_enc": "不加密",
      "userinfo_signed_response_alg": "不加密",
      "userinfo_encrypted_response_alg": "不加密",
      "userinfo_encrypted_response_enc": "不加密",
      "request_object_signing_alg": "不加密",
      "request_object_encryption_alg": "不加密",
      "request_object_encryption_enc": "不加密",
      "jwks": "",
      "jwks_uri": "",
      "authorization_code_expire": "600",
      "id_token_expire": "3600",
      "access_token_expire": "3600",
      "cas_expire": "3600",
    }, app)
    const res = await CreateOIDCApp(this.graphqlClient, this.tokenProvider, app)
    return res.CreateOIDCApp
  }
}
