import { HttpClient } from './HttpClient';

export class PublicKeyManager {
  host: string;
  httpClient: HttpClient;

  /**
   * @description 密码加密公钥
   */
  private publicKey: string;

  constructor(host: string, httpClient: HttpClient) {
    this.host = host;
    this.httpClient = httpClient;
  }

  /**
   * @description 获取密码加密公钥
   */
  public async getPublicKey() {
    if (this.publicKey) {
      return this.publicKey;
    }

    const api = `${this.host}/api/v2/.well-known`;
    const data = await this.httpClient.request({
      method: 'GET',
      url: api
    });
    const { publicKey } = data;
    this.publicKey = publicKey;
    return this.publicKey;
  }
}
