import { User } from '../../types/graphql.v2';
import { AuthenticationClientOptions } from './types';

const tokenKey = '_authing_token';
const userKey = '_authing_user';

export class AuthenticationTokenProvider {
  options: AuthenticationClientOptions;

  private token?: string;
  private user?: User;

  constructor(options: AuthenticationClientOptions) {
    this.options = options;

    // 为了兼容服务端不支持 localStorage 的情况
    this.token = null;
    this.user = null;
  }

  setToken(token: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(tokenKey, token);
    } else {
      this.token = token;
    }
  }

  getToken() {
    return typeof localStorage !== 'undefined'
      ? localStorage.getItem(tokenKey) || ''
      : this.token;
  }

  getUser(): User | null {
    return typeof localStorage !== 'undefined'
      ? localStorage.getItem(userKey)
        ? JSON.parse(localStorage.getItem(userKey))
        : null
      : this.user;
  }

  setUser(user: User) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(userKey, JSON.stringify(user));
      localStorage.setItem(tokenKey, user.token);
    } else {
      this.user = user;
      this.token = user.token;
    }
  }

  clearUser() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(userKey);
      localStorage.removeItem(tokenKey);
    } else {
      this.user = null;
      this.token = null;
    }
  }
}
