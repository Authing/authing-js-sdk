import { Variables } from 'graphql-request/dist/src/types';
import { SDK_VERSION } from '../version';
import { GraphQLClient } from 'graphql-request';

export class GraphqlClient {
  endpoint: string;
  userPoolId: string;
  onError: (code: number, message: string) => void;

  constructor(
    endpoint: string,
    userPoolId: string,
    onError: (code: number, message: string) => void
  ) {
    this.endpoint = endpoint;
    this.userPoolId = userPoolId;
    this.onError = onError;
  }

  async request<T>(options: {
    query: string;
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

    try {
      return await graphQLClient.request<T>(query, variables);
    } catch (error) {
      let errmsg = null;
      const response = error.response;
      const errors = response.errors;
      errors.map((err: any) => {
        const { message: msg } = err;
        const { code, message } = msg;
        errmsg = message;
        this.onError(code, message);
      });
      throw new Error(errmsg);
    }
  }
}
