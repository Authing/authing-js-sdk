import { Variables } from 'graphql-request/dist/src/types';
import { SDK_VERSION } from '../version';
import { GraphQLClient } from 'graphql-request';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../authentication/types';

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
      'x-authing-sdk-version': `js:${SDK_VERSION}`,
      'x-authing-userpool-id': this.options.userPoolId,
      'x-authing-request-from': this.options.requestFrom || 'sdk',
      'x-authing-app-id': this.options.appId || ''
    };
    token && (headers.Authorization = `Bearer ${token}`);
    const graphqlOptions = {
      timeout: this.options.timeout,
      headers
    };
    const graphQLClient = new GraphQLClient(this.endpoint, graphqlOptions);

    try {
      return await graphQLClient.request<T>(query, variables);
    } catch (error) {
      if (error.name === 'FetchError') {
        this.options.onError(500, '网络请求超时', null);
        throw { code: 500, message: '网络请求超时', data: null };
      }

      let errmsg = null;
      let errcode = null;
      let data = null;
      const response = error.response;
      const errors = response.errors;
      errors.map((err: any) => {
        const { message: msg } = err;
        const { code, message, data: _data } = msg;
        errcode = code;
        errmsg = message;
        data = _data;
        this.options.onError(code, message, data);
      });
      throw { code: errcode, message: errmsg, data };
    }
  }
}
