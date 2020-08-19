import { Variables } from 'graphql-request/dist/src/types';
import { SDK_VERSION } from '../version';
import { GraphQLClient } from 'graphql-request';
import { DocumentNode } from 'graphql';

export class GraphqlClient {
  endpoint: string;
  userPoolId: string;

  constructor(endpoint: string, userPoolId: string) {
    this.endpoint = endpoint;
    this.userPoolId = userPoolId;
  }

  async request<T>(options: {
    query: DocumentNode;
    variables?: Variables;
    token?: string;
  }) {
    const { query, token, variables } = options;
    let headers: any = {
      'x-authing-sdk-version': SDK_VERSION,
      'x-authing-userpool-id': this.userPoolId,
      'x-authing-request-from': 'sdk'
    };
    token && (headers.Authorization = `Bearer ${token}`);
    const graphQLClient = new GraphQLClient(this.endpoint, {
      headers
    });
    // 这一步可能会报错
    return await graphQLClient.request<T>(query.loc.source.body, variables);
  }
}
