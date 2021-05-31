import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  AuthenticationClientOptions,
  PrincipalDetail,
  PrincipalInput,
  PrincipalType
} from './types';
import { HttpClient } from '../common/HttpClient';
import { BaseAuthenticationClient } from './BaseAuthenticationClient';

/**
 * @class PrincipalAuthenticationClient 主体认证模块
 * @description 此模块用于进行主体认证。
 *
 * 请求主体认证信息：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * await authenticationClient.principal.detail()
 * \`\`\`
 *
 *
 * @name PrincipalAuthenticationClient
 */
export class PrincipalAuthenticationClient {
  options: AuthenticationClientOptions;
  tokenProvider: AuthenticationTokenProvider;
  httpClient: HttpClient;
  baseClient: BaseAuthenticationClient;

  constructor(
    options: AuthenticationClientOptions,
    tokenProvider: AuthenticationTokenProvider,
    httpClient: HttpClient
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
    this.baseClient = new BaseAuthenticationClient(options);
  }

  /**
   * @name detail
   * @name_zh 获取主体认证详情
   * @description 获取主体认证详情，未认证时返回 null
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.principal.detail()
   *
   * @returns {Promise<PrincipalDetail | null>}
   * @memberof PrincipalAuthenticationClient
   */
  async detail(): Promise<PrincipalDetail | null> {
    const api = `${this.baseClient.appHost}/api/v2/users/principal_authentication`;

    const data: PrincipalDetail = await this.httpClient.request({
      method: 'GET',
      url: api
    });
    return data;
  }

  /**
   * @name authentication
   * @name_zh 进行主体认证
   * @description 获取主体认证详情，未认证时返回 null
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.principal.authenticate()
   *
   * @returns {Promise<boolean>}
   * @memberof PrincipalAuthenticationClient
   */
  async authenticate(info: PrincipalInput): Promise<boolean> {
    const api = `${this.baseClient.appHost}/api/v2/users/principal_authentication`;

    let params: {
      type: PrincipalType;
      name: string;
      idCard: string;
      ext: string;
    };

    if (info.type === 'P') {
      params = {
        type: 'P',
        name: info.name,
        idCard: info.idCard,
        ext: info.bankCard
      };
    } else {
      params = {
        type: 'E',
        name: info.enterpriseName,
        idCard: info.enterpriseCode,
        ext: info.legalPersonName
      };
    }

    await this.httpClient.request({
      method: 'POST',
      url: api,
      data: params
    });

    return true;
  }
}
