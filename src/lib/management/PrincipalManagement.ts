import { ManagementClientOptions } from './types';
import { HttpClient } from '../common/HttpClient';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  PrincipalInput,
  PrincipalType,
  PrincipalDetail
} from '../authentication/types';

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
export class PrincipalManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.httpClient = httpClient;
    this.tokenProvider = tokenProvider;
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
  async detail(userId: string): Promise<PrincipalDetail | null> {
    const api = `${this.options.host}/api/v2/users/${userId}/management/principal_authentication`;

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
  async authenticate(userId: string, info: PrincipalInput): Promise<boolean> {
    const api = `${this.options.host}/api/v2/users/${userId}/management/principal_authentication`;

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
