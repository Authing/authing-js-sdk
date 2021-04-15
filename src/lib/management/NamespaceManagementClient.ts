import { ManagementClientOptions, Namespaces, Namespace } from './types';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { HttpClient } from '../common/HttpClient';
import { objectToQueryString } from '../utils';

/**
 * @class NamespaceManagementClient 权限分组管理
 * @name NamespaceManagementClient
 * @description NamespaceManagementClient 权限分组管理
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { NamespaceManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.namespace.list    // 权限分组列表
 * managementClient.namespace.create // 创建权限分组
 * \`\`\`
 *
 */
export class NamespaceManagementClient {
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
   * 权限分组列表
   * @param page 当前页数
   * @param limit 每页显示条数
   * @returns Promise<Resources>
   */
  public async list(page: number = 1, limit: number = 10): Promise<Namespaces> {
    const result = await this.httpClient.request({
      method: 'GET',
      url:
        `${this.options.host}/api/v2/resource-namespace/${this.options.userPoolId}` +
        objectToQueryString({
          page: page?.toString(),
          limit: limit?.toString()
        })
    });
    return result;
  }

  /**
   * 删除权限分组
   * @param code 权限分组 Code
   * @returns Promise<boolean>
   */
  public async delete(code: string): Promise<boolean> {
    try {
      await this.httpClient.request({
        method: 'DELETE',
        url: `${this.options.host}/api/v2/resource-namespace/${this.options.userPoolId}/code/${code}`
      });

      return true;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 创建权限分组
   * @param code 权限分组 Code
   * @param name 权限分组名称
   * @param description 权限分组描述
   * @returns Promise<boolean>
   */
  public async create(
    code: string,
    name: string,
    description?: string
  ): Promise<Namespace> {
    try {
      const data = await this.httpClient.request({
        method: 'POST',
        url: `${this.options.host}/api/v2/resource-namespace/${this.options.userPoolId}`,
        data: {
          name,
          code,
          description
        }
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 修改权限分组
   * @param code 权限分组 Code
   * @param name 权限分组名称
   * @param code 权限分组 Code
   * @param description 权限分组描述
   * @returns Promise<boolean>
   */
  public async update(
    code: string,
    updates: {
      name?: string;
      code?: string;
      description?: string;
    }
  ): Promise<Namespace> {
    try {
      const data = await this.httpClient.request({
        method: 'PUT',
        url: `${this.options.host}/api/v2/resource-namespace/${this.options.userPoolId}/code/${code}`,
        data: {
          name: updates.name,
          code: updates.code,
          description: updates.description
        }
      });

      return data;
    } catch (error) {
      throw error;
    }
  }
}
