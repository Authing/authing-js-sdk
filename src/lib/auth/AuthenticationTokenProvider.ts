import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';

export class AuthenticationTokenProvider {

  /** 内部变量，请不要直接引用 **/
  /** 该用户池对应的 accessToken **/
  private _accessToken: string
  /** accessToken 过期时间，为 unix 时间戳 **/

  options: AuthenticationClientOptions
  graphqlClient: GraphqlClient

  constructor(options: AuthenticationClientOptions) {
    this.options = options
  }

  async getAccessToken() {
    return this._accessToken
  }

  async setAccessToken(accessToken: string) {
    this._accessToken = accessToken
  }
}