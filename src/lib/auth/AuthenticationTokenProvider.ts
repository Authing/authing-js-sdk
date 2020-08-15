import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';

const tokenKey = '_authing_token';

export class AuthenticationTokenProvider {
  options: AuthenticationClientOptions;
  graphqlClient: GraphqlClient;

  constructor(options: AuthenticationClientOptions) {
    this.options = options;
  }

  getAccessToken() {
    return localStorage.getItem(tokenKey) || '';
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem(tokenKey, accessToken);
  }

  clearAccessToken() {
    localStorage.removeItem(tokenKey);
  }
}
