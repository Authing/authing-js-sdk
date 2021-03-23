import { BaseAuthenticationClient } from '../authentication/BaseAuthenticationClient';
import { AuthenticationClientOptions } from '../authentication/types';
import { ManagementClientOptions } from '../management/types';
import { HttpClient } from './HttpClient';

export class PublicKeyManager {
  options: AuthenticationClientOptions | ManagementClientOptions;
  httpClient: HttpClient;
  baseClient: BaseAuthenticationClient;

  /**
   * @description 密码加密公钥
   */
  private publicKey: string;

  constructor(
    options: AuthenticationClientOptions | ManagementClientOptions,
    httpClient: HttpClient
  ) {
    this.options = options;
    this.baseClient = new BaseAuthenticationClient(this.options as AuthenticationClientOptions);
    this.httpClient = httpClient;
  }

  /**
   * @description 获取密码加密公钥
   */
  public async getPublicKey() {
    // 直接使用 options 传入的 publicKey
    if (this.options.publicKey) {
      return this.options.publicKey;
    }

    // 使用缓存过的 publicKey
    if (this.publicKey) {
      return this.publicKey;
    }

    const api = `${this.baseClient.appHost}/api/v2/.well-known`;
    const data = await this.httpClient.request({
      method: 'GET',
      url: api
    });
    const { publicKey } = data;
    this.publicKey = publicKey;
    return this.publicKey;
  }
}
