import { Variables } from 'graphql-request/dist/src/types';
import { SDK_VERSION } from '../version';
import { GraphQLClient } from 'graphql-request';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../auth/types';

export class GraphqlClient {
  endpoint: string;
  options: ManagementClientOptions;

  constructor(
    endpoint: string,
    options: ManagementClientOptions | AuthenticationClientOptions
  ) {
    this.endpoint = endpoint;
    this.options = options;
  }

  async request<T>(options: {
    query: string;
    variables?: Variables;
    token?: string;
  }) {
    const { query, token, variables } = options;
    let headers: any = {
      'x-authing-sdk-version': SDK_VERSION,
      'x-authing-userpool-id': this.options.userPoolId,
      'x-authing-request-from': this.options.requestFrom || 'sdk',
      'x-authing-app-id': this.options.appId || ''
    };
    token && (headers.Authorization = `Bearer ${token}`);
    const graphQLClient = new GraphQLClient(this.endpoint, {
      headers
    });

    try {
      return await graphQLClient.request<T>(query, variables);
    } catch (error) {
      let errmsg = null;
      let errcode = null;
      const response = error.response;
      const errors = response.errors;
      errors.map((err: any) => {
        const { message: msg } = err;
        const { code, message } = msg;
        errcode = code;
        errmsg = message;
        this.options.onError(code, message);
      });
      throw { code: errcode, message: errmsg };
    }
  }
}
