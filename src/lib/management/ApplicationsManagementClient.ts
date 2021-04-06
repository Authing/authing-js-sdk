import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ActiveUsers, Application, ApplicationDetail, ManagementClientOptions } from './types';
import { HttpClient } from '../common/HttpClient';

/**
 * @class ApplicationsManagementClient 管理分组
 * @description 此模块用于管理 Authing 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。
 *
 * @example
 *
 * 请使用以下方式使用该模块，而不要直接初始化该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.applications.list // 获取应用列表
 * managementClient.applications.findById // 通过 ID 获取应用详情
 * \`\`\`
 *
 * @name ApplicationsManagementClient
 */
export class ApplicationsManagementClient {
  options: ManagementClientOptions;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * @description 获取用户池应用列表
   *
   */
  public async list(params?: {
    page: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    list: ApplicationDetail[];
  }> {
    const { page = 1, limit = 10 } = params || {};
    const data = await this.httpClient.request({
      url: `${this.options.host}/api/v2/applications`,
      method: 'GET',
      data: {
        page,
        limit
      }
    });
    return data;
  }

  /**
   * 创建应用
   * @param options.name 应用名称
   * @param options.identifier 应用认证地址
   * @param options.redirectUris 应用回调链接
   * @param options.logo 应用 logo
   * @returns Promise<Application>
   */
  public async create(options: {
    name: string;
    identifier: string;
    redirectUris: string[];
    logo?: string;
  }): Promise<Application> {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications`,
      data: { ...options }
    });
    return result;
  }

  /**
   * 删除应用
   * @param appId 应用 ID
   * @returns Promise<boolean>
   */
  public async delete(appId: string): Promise<boolean> {
    try {
      await this.httpClient.request({
        method: 'DELETE',
        url: `${this.options.host}/api/v2/applications/${appId}`
      });

      return true;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description 通过 ID 获取应用详情
   * @param id 应用 ID
   */
  public async findById(id: string):Promise<ApplicationDetail> {
    if (!id) {
      throw new Error('params id is required!');
    }
    const data = await this.httpClient.request({
      url: `${this.options.host}/api/v2/applications/${id}`,
      method: 'GET'
    });
    return data;
  }

  /**
   * 查看应用下已登录用户
   * @param appId 应用 ID
   * @param page 当前页数
   * @param limit 每页显示条数
   * @returns Promise<Application>
   */
  public async activeUsers(
    appId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<ActiveUsers> {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/applications/${appId}/active-users?page=${page}&limit=${limit}`
    });
    return result;
  }

  /**
   * 刷新应用密钥
   * @param appId 应用 ID
   * @returns Promise<Application>
   */
  public async refreshApplicationSecret(appId: string): Promise<Application> {
    const result = await this.httpClient.request({
      method: 'PATCH',
      url: `${this.options.host}/api/v2/application/${appId}/refresh-secret`
    });
    return result;
  }
}
