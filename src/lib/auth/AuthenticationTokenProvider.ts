import { User } from '../../types/graphql.v2';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';

const tokenKey = '_authing_token';
const userKey = '_authing_user';

export class AuthenticationTokenProvider {
  options: AuthenticationClientOptions;
  graphqlClient: GraphqlClient;

  constructor(options: AuthenticationClientOptions) {
    this.options = options;
  }

  getAccessToken() {
    return localStorage.getItem(tokenKey) || '';
  }

  getUser(): User | null {
    return localStorage.getItem(userKey)
      ? JSON.parse(localStorage.getItem(userKey))
      : null;
  }

  setUser(user: User) {
    localStorage.setItem(userKey, JSON.stringify(user));
    localStorage.setItem(tokenKey, user.token);
  }

  clearUser() {
    localStorage.removeItem(userKey);
    localStorage.removeItem(tokenKey);
  }
}
