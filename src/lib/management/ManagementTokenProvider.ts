import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementClientOptions, DecodedAccessToken } from './types';
import jwtDecode from 'jwt-decode';
import { getAccessToken, refreshAccessToken } from '../graphqlapi';

export class ManagementTokenProvider {
  /** 内部变量，请不要直接引用 **/
  /** 该用户池对应的 accessToken **/
  private _accessToken: string;
  /** accessToken 过期时间，为 unix 时间戳 **/
  private _accessTokenExpriredAt: number;

  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient) {
    this.options = options;
    this.graphqlClient = graphqlClient;

    const { accessToken } = this.options;
    if (accessToken) {
      this._accessToken = accessToken;
      const decoded: DecodedAccessToken = jwtDecode(accessToken);
      const { exp } = decoded;
      this._accessTokenExpriredAt = exp * 1000;
    }
  }

  /**
   * 发送 GraphQL 接口请求获取 accessToken
   *
   * @returns
   * @memberof ManagementTokenProvider
   */
  private async getClientWhenSdkInit() {
    const res = await getAccessToken(this.graphqlClient, {
      userPoolId: this.options.userPoolId,
      secret: this.options.secret
    });
    return res.accessToken.accessToken;
  }

  /**
   * 刷新 accessToken
   *
   * @memberof ManagementTokenProvider
   */
  private async refreshToken() {
    const res = await refreshAccessToken(this.graphqlClient, {
      accessToken: this.options.accessToken
    });
    return res.refreshAccessToken.accessToken;
  }

  /**
   * 获取用户池 accessToken
   *
   * @returns {Promise<string>}
   * @memberof ManagementTokenProvider
   */
  async getToken(): Promise<string> {
    if (this.options.accessToken) {
      return this.options.accessToken;
    }

    // 缓存到 accessToken 过期前 3600 s
    if (
      this._accessToken &&
      this._accessTokenExpriredAt > new Date().getTime() + 3600 * 1000
    ) {
      return this._accessToken;
    }
    return await this.getAccessTokenFromServer();
  }

  /**
   * 刷新用户池 accessToken
   *
   * @returns
   * @memberof ManagementTokenProvider
   */
  private async getAccessTokenFromServer() {
    // 如果是通过密钥刷新
    let accessToken = null;
    if (this.options.secret) {
      accessToken = await this.getClientWhenSdkInit();
    } else {
      accessToken = await this.refreshToken();
    }

    this._accessToken = accessToken;
    const decoded: DecodedAccessToken = jwtDecode(this._accessToken);
    const { exp } = decoded;
    this._accessTokenExpriredAt = exp * 1000;
    return this._accessToken;
  }
}
