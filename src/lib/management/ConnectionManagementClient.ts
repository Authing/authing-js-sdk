import { GetOIDCAppList } from './../graphqlapi/management.connection.oidcProviders';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
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
}
