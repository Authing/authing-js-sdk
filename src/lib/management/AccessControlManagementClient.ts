import { addGroupMetadata } from './../graphqlapi/management.accesscontrol.addGroupMetadata';
import { createRBACGroup } from './../graphqlapi/management.accesscontrol.createGroup';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions, AuthingGroup } from './types';

export class AccessControlManagementClient {
  options: ManagementClientOptions
  graphqlClient: GraphqlClient
  tokenProvider: ManagementTokenProvider

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider) {
    this.options = options
    this.graphqlClient = graphqlClient
    this.tokenProvider = tokenProvider
  }

  async createGroup(name: string, description: string): Promise<AuthingGroup> {
    const res = await createRBACGroup(this.graphqlClient, this.tokenProvider, {
      input: {
        userPoolId: this.options.userPoolId,
        name,
        description
      }
    })
    const group = res.createRBACGroup
    return group
  }

  async addGroupMetadata(groupId: string, key: string, value: any): Promise<{ key: string, value: string }> {
    const res = await addGroupMetadata(this.graphqlClient, this.tokenProvider, {
      groupId,
      key,
      value
    })
    return res.addGroupMetadata
  }
}
