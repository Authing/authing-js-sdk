import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import _ from 'lodash';
import { CreateOidcAppVariables } from '../../types/graphql.v1';
import {
  GetOIDCAppList,
  CreateOIDCApp,
  oidcProviderByDomain
} from '../graphqlapi';

export class ConnectionManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  async oidcProviders(page = 0, count = 10) {
    const res = await GetOIDCAppList(this.graphqlClient, this.tokenProvider, {
      clientId: this.options.userPoolId,
      page,
      count
    });
    return res.GetOIDCAppList;
  }

  async createOidcProvider(app: CreateOidcAppVariables) {
    app = Object.assign(
      {},
      {
        description: '',
        image: '',
        grant_types: ['authorization_code', 'refresh_token', 'authingToken'],
        token_endpoint_auth_method: 'client_secret_post',
        response_types: ['code'],
        id_token_signed_response_alg: 'HS256',
        _jwks: '',
        _jwks_uri: '',
        authorization_code_expire: '600',
        id_token_expire: '3600',
        access_token_expire: '3600',
        cas_expire: '3600',
        custom_jwks: ''
      },
      app
    );

    const res = await CreateOIDCApp(
      this.graphqlClient,
      this.tokenProvider,
      app
    );
    return res.CreateOIDCApp;
  }

  async oidcProviderByDomain(domain: string) {
    const res = await oidcProviderByDomain(
      this.graphqlClient,
      this.tokenProvider,
      { domain }
    );
    return res.QueryOIDCAppInfoByDomain;
  }
}
