import { ManagementClientOptions, Resource, Resources } from './types';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { HttpClient } from '../common/HttpClient';
import { objectToQueryString } from '../utils';

/**
 * @class ResouceManagementClient 资源管理
 * @name ResouceManagementClient
 * @description 应用管理
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ResouceManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.resource.list    // 资源列表
 * managementClient.resource.create // 创建资源
 * \`\`\`
 *
 */
export class ResouceManagementClient {
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
   * 资源列表
   * @param page 当前页数
   * @param limit 每页显示条数
   * @param namespace 权限分组 Code
   * @returns Promise<Resources>
   */
  public async list(
    page: number = 1,
    limit: number = 10,
    namespace: string = 'default'
  ): Promise<Resources> {
    const result = await this.httpClient.request({
      method: 'GET',
      url:
        `${this.options.host}/api/v2/resources` +
        objectToQueryString({
          page: page?.toString(),
          limit: limit?.toString(),
          namespace: namespace?.toString()
        })
    });
    return result;
  }

  /**
   * 删除资源
   * @param resourceCodes 资源 Code 集合
   * @param namespace 权限分组 Code
   * @returns Promise<boolean>
   */
  public async delete(
    resourceCodes: Array<string>,
    namespace: string = 'default'
  ): Promise<boolean> {
    try {
      await this.httpClient.request({
        method: 'DELETE',
        url: `${this.options.host}/api/v2/resources/${resourceCodes.join(
          ','
        )}?namespace=${namespace}`
      });

      return true;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 创建资源
   * @param code 资源名称
   * @param description 资源描述
   * @param type 资源类型
   * @param apiIdentifier API 地址（资源类型为 API 时必填）
   * @param actions 资源操作
   * @param namespace 权限分组 Code
   * @returns Promise<Resource>
   */
  public async create(
    code: string,
    description: string,
    type: 'DATA' | 'API' | 'MENU' | 'BUTTON',
    apiIdentifier?: string,
    actions: Array<{
      name: string;
      description: string;
    }> = [],
    namespace: string = 'default'
  ): Promise<Resource> {
    if (
      type === 'API' &&
      (apiIdentifier === undefined ||
        apiIdentifier === null ||
        apiIdentifier === '')
    ) {
      throw new Error(`Missing Parameters: 'apiIdentifier'`);
    }

    const data = {
      code,
      description,
      type,
      actions,
      namespace
    };

    if (type === 'API') {
      // @ts-ignore
      data.apiIdentifier = apiIdentifier;
    }

    if (actions.length > 0) {
      for (let i = 0; i < actions.length; i++) {
        actions[i].name = code + ':' + actions[i].name;
      }
    }

    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/resources`,
      data
    });

    return result;
  }

  /**
   * 修改资源
   * @param code 资源名称
   * @param description 资源描述
   * @param type 资源类型
   * @param apiIdentifier API 地址（资源类型为 API 时必填）
   * @param actions 资源操作
   * @param namespace 权限分组 Code
   * @returns Promise<Resource>
   */
  public async update(
    code: string,
    description: string,
    type: 'DATA' | 'API' | 'MENU' | 'BUTTON',
    apiIdentifier?: string,
    actions: Array<{
      name: string;
      description: string;
    }> = [],
    namespace: string = 'default'
  ): Promise<Resource> {
    if (
      type === 'API' &&
      (apiIdentifier === undefined ||
        apiIdentifier === null ||
        apiIdentifier === '')
    ) {
      throw new Error(`Missing Parameters: 'apiIdentifier'`);
    }

    const data = {
      description,
      type,
      actions,
      namespace
    };

    if (type === 'API') {
      // @ts-ignore
      data.apiIdentifier = apiIdentifier;
    }

    if (actions.length > 0) {
      for (let i = 0; i < actions.length; i++) {
        actions[i].name = code + ':' + actions[i].name;
      }
    }

    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/resources/${code}`,
      data
    });

    return result;
  }
}
