import {
  AccessControlList,
  ActiveUsers,
  Application,
  ApplicationList,
  ManagementClientOptions,
  ProgrammaticAccessAccount,
  ProgrammaticAccessAccountList
} from './types';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { HttpClient } from '../common/HttpClient';
import { objectToQueryString } from '../utils';

/**
 * @class ApplicationManagementClient 应用管理
 * @name ApplicationManagementClient
 * @description 应用管理
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ApplicationManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.application.list    // 应用列表
 * managementClient.application.create // 创建应用
 * \`\`\`
 *
 */
export class ApplicationManagementClient {
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
   * 生成随机字符串
   * @param randomLenth 随机长度
   * @returns string
   */
  public static randomString(randomLenth: number = 32): string {
    randomLenth = randomLenth || 32;

    const t = 'abcdefhijkmnprstwxyz2345678';
    const a = t.length;
    let n = '';

    for (let i = 0; i < randomLenth; i++) {
      n += t.charAt(Math.floor(Math.random() * a));
    }

    return n;
  }

  /**
   * 应用列表
   * @param page 当前页数
   * @param limit 每页显示条数
   * @returns Promise<ApplicationList>
   */
  public async list(
    page: number = 1,
    limit: number = 10
  ): Promise<ApplicationList> {
    const result = await this.httpClient.request({
      method: 'GET',
      url:
        `${this.options.host}/api/v2/applications` +
        objectToQueryString({ page: page.toString(), limit: limit.toString() })
    });
    return result;
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
   * 编程访问账号列表
   * @param appId 应用 ID
   * @param page 当前页数
   * @param limit 每页显示条数
   * @returns Promise<ProgrammaticAccessAccountList>
   */
  public async programmaticAccessAccountList(
    appId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<ProgrammaticAccessAccountList> {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/applications/${appId}/programmatic-access-accounts?limit=${limit}&page=${page}`
    });
    return result;
  }

  /**
   * 添加编程访问账号
   * @param appId 应用 ID
   * @param options.tokenLifetime AccessToken 过期时间（秒）
   * @param options.remarks 备注
   * @returns Promise<ProgrammaticAccessAccount>
   */
  public async createProgrammaticAccessAccount(
    appId: string,
    options: {
      tokenLifetime: number;
      remarks?: string;
    } = {
      tokenLifetime: 600
    }
  ): Promise<ProgrammaticAccessAccount> {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/programmatic-access-accounts`,
      data: { ...options }
    });
    return result;
  }

  /**
   * 添加编程访问账号
   * @param programmaticAccessAccountId 编程访问账号 ID
   * @returns Promise<boolean>
   */
  public async deleteProgrammaticAccessAccount(
    programmaticAccessAccountId: string
  ): Promise<boolean> {
    try {
      await this.httpClient.request({
        method: 'DELETE',
        url: `${this.options.host}/api/v2/applications/programmatic-access-accounts?id=${programmaticAccessAccountId}`
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 刷新编程访问账号密钥
   * @param programmaticAccessAccountId 编程访问账号 ID
   * @param programmaticAccessAccountSecret 编程访问账号 Secret
   * @returns Promise<ProgrammaticAccessAccount>
   */
  public async refreshProgrammaticAccessAccountSecret(
    programmaticAccessAccountId: string,
    programmaticAccessAccountSecret: string = ApplicationManagementClient.randomString(
      32
    )
  ): Promise<ProgrammaticAccessAccount> {
    const result = await this.httpClient.request({
      method: 'PATCH',
      url: `${this.options.host}/api/v2/applications/programmatic-access-accounts`,
      data: {
        id: programmaticAccessAccountId,
        secret: programmaticAccessAccountSecret
      }
    });
    return result;
  }

  /**
   * 启用编程访问账号
   * @param programmaticAccessAccountId 编程访问账号 ID
   * @returns Promise<ProgrammaticAccessAccount>
   */
  public async enableProgrammaticAccessAccount(
    programmaticAccessAccountId: string
  ): Promise<ProgrammaticAccessAccount> {
    const result = await this.httpClient.request({
      method: 'PATCH',
      url: `${this.options.host}/api/v2/applications/programmatic-access-accounts`,
      data: {
        id: programmaticAccessAccountId,
        enabled: true
      }
    });
    return result;
  }

  /**
   * 禁用编程访问账号
   * @param programmaticAccessAccountId 编程访问账号 ID
   * @returns Promise<ProgrammaticAccessAccount>
   */
  public async disableProgrammaticAccessAccount(
    programmaticAccessAccountId: string
  ): Promise<ProgrammaticAccessAccount> {
    const result = await this.httpClient.request({
      method: 'PATCH',
      url: `${this.options.host}/api/v2/applications/programmatic-access-accounts`,
      data: {
        id: programmaticAccessAccountId,
        enabled: false
      }
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

  /**
   * 应用访问控制列表
   * @param appId 应用 ID
   * @param page 当前页数
   * @param limit 每页显示条数
   * @returns Promise<Application>
   */
  public async accessControlList(
    appId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<AccessControlList> {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/records?page=${page}&limit=${limit}`
    });
    return result;
  }

  /**
   * 允许所有用户访问应用
   * @param appId 应用 ID
   * @returns Promise<Application>
   */
  public async allowAllAccessControl(appId: string): Promise<Application> {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}`,
      data: {
        permissionStrategy: {
          defaultStrategy: 'ALLOW_ALL'
        }
      }
    });
    return result;
  }

  /**
   * 拒绝所有用户访问应用
   * @param appId 应用 ID
   * @returns Promise<Application>
   */
  public async denyAllAccessControl(appId: string): Promise<Application> {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}`,
      data: {
        permissionStrategy: {
          defaultStrategy: 'DENY_ALL'
        }
      }
    });
    return result;
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
   * 强制下线用户
   * @param appId 应用 ID
   * @param userIds 用户 ID 列表
   * @returns Promise<Application>
   */
  public async kickActiveUsers(
    appId: string,
    userIds: string[]
  ): Promise<boolean> {
    try {
      await this.httpClient.request({
        method: 'POST',
        url: `${this.options.host}/api/v2/applications/${appId}/kick-active-users`,
        data: {
          userIds
        }
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
}
