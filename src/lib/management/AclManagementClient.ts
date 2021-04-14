import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  IAppAccessPolicy,
  IAppAccessPolicyQueryFilter,
  IApplication,
  IApplicationAccessPolicies,
  IResourceDto,
  IResourceQueryFilter,
  IResourceResponse,
  IResourceUpdateDto,
  ManagementClientOptions,
  ProgrammaticAccessAccount,
  ProgrammaticAccessAccountList
} from './types';
import {
  allow,
  authorizeResource,
  isAllowed,
  listAuthorizedResources
} from '../graphqlapi';
import {
  AuthorizeResourceOpt,
  CommonMessage,
  PaginatedAuthorizedResources,
  PolicyAssignmentTargetType,
  ResourceType
} from '../../types/graphql.v2';
import { formatAuthorizedResources } from '../utils';
import { HttpClient } from '../common/HttpClient';

/**
 * @class AclManagementClient 管理权限、访问控制
 * @description Authing 基于 PBAC（Policy Based Access Control，基于策略的访问控制）构建权限模型，
 * 可以和 RBAC （Role Based Access Control，基于角色的访问控制）结合，实现非常灵活、精细化的权限控制。
 * 此模块将此模型抽象成了两个方法: allow, isAllowed。
 *
 * @example
 *
 * 请使用以下方式使用该模块，而不要直接初始化该模块：
 *
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.acl.allow // 允许某个用户对某个资源进行某个操作
 * managementClient.acl.isAllowed // 判断某个用户是否对某个资源有某个操作权限
 * \`\`\`
 *
 * @name AclManagementClient
 */
export class AclManagementClient {
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
   * @name allow
   * @name_zh 允许某个用户对某个资源进行某个操作
   *
   * @description 允许某个用户对某个资源进行某个操作
   *
   * @param {string} userId 用户 ID
   * @param {string} action 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
   * @param {string} resource 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*`
   * @example
   * managementClient.acl.allow('USERID1', 'books:123', 'books:read')
   * managementClient.acl.isAllowed('USERID1', 'books:123', 'books:read') // true
   * managementClient.acl.isAllowed('USERID1', 'books:123', 'books:edit') // false
   *
   * @example
   * managementClient.acl.allow('USERID2', 'books:*', 'books:*')
   * managementClient.acl.isAllowed('USERID2', 'books:123', 'books:read') // true
   * managementClient.acl.isAllowed('USERID2', 'books:124', 'books:edit') // true
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AclManagementClient
   */
  async allow(
    userId: string,
    resource: string,
    action: string,
    // namespace: string
  ): Promise<CommonMessage> {
    const { allow: data } = await allow(
      this.graphqlClient,
      this.tokenProvider,
      {
        resource,
        action,
        userId
      }
    );
    return data;
  }

  /**
   * @name isAllowed
   * @name_zh 判断某个用户是否对某个资源有某个操作权限
   *
   * @description 判断某个用户是否对某个资源有某个操作权限
   *
   * @param {string} userId 用户ID
   * @param {string} action 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
   * @param {string} resource 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*`
   * @example
   * managementClient.acl.isAllowed('USERID', 'books:*', 'books:edit')
   *
   * @returns {Promise<boolean>} 是否具备操作权限
   * @memberof AclManagementClient
   *
   */
  async isAllowed(
    userId: string,
    resource: string,
    action: string
  ): Promise<boolean> {
    const { isActionAllowed } = await isAllowed(
      this.graphqlClient,
      this.tokenProvider,
      {
        resource,
        action,
        userId
      }
    );
    return isActionAllowed;
  }

  /**
   * @description 获取用户被授权的所有资源
   *
   * @param userId
   * @param namespace
   */
  public async listAuthorizedResources(
    targetType: PolicyAssignmentTargetType,
    targetIdentifier: string,
    namespace: string,
    options?: {
      resourceType?: ResourceType;
    }
  ): Promise<PaginatedAuthorizedResources> {
    const { resourceType } = options || {};
    let {
      authorizedResources: { list, totalCount }
    } = await listAuthorizedResources(this.graphqlClient, this.tokenProvider, {
      targetType,
      targetIdentifier,
      namespace,
      resourceType
    });
    list = formatAuthorizedResources(list);
    return {
      list,
      totalCount
    };
  }

  /**
   * @description 将一个（类）资源授权给用户、角色、分组、组织机构，且可以分别指定不同的操作权限。
   *
   */
  public async authorizeResource(params: {
    namespace: string;
    resource: string;
    opts: AuthorizeResourceOpt[];
  }): Promise<CommonMessage> {
    const { namespace, resource, opts } = params;
    const { authorizeResource: data } = await authorizeResource(
      this.graphqlClient,
      this.tokenProvider,
      {
        namespace,
        resource,
        opts
      }
    );
    return data;
  }

  /**
   * @description 获取具备某个（类）资源操作权限的用户、分组、角色、组织机构。
   *
   */
  public async listResourcePermissions() {}

  public async getResources(options?: IResourceQueryFilter) {
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/resources`,
      params: {
        namespaceCode: options?.namespaceCode,
        type: options?.type,
        limit: options?.limit || 10,
        page: options?.page || 1
      }
    });
  }

  public async createResource(
    options: IResourceDto
  ): Promise<IResourceResponse> {
    if (!options) {
      throw new Error('请传入资源数据');
    }
    if (!options.code) {
      throw new Error('请为资源设定一个资源标识符');
    }
    if (!options.actions || options?.actions.length === 0) {
      throw new Error('请至少定义一个资源操作');
    }
    if (!options.namespace) {
      throw new Error('请传入权限分组标识符');
    }
    return await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/resources`,
      data: options
    });
  }

  public async updateResource(
    code: string,
    options: IResourceUpdateDto
  ): Promise<IResourceResponse> {
    if (!code) {
      throw new Error('请传入资源标识符');
    }
    return await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/resources/${code}`,
      data: options
    });
  }
  public async deleteResource(
    code: string,
    namespaceCode: string
  ): Promise<boolean> {
    if (!code) {
      throw new Error('请传入资源标识符');
    }
    if (!namespaceCode) {
      throw new Error('请传入权限分组标识符');
    }
    await this.httpClient.request({
      method: 'DELETE',
      url: `${this.options.host}/api/v2/resources/${code}`,
      params: {
        namespace: namespaceCode
      }
    });
    return true;
  }

  public async getApplicationAccessPolicies(
    options: IAppAccessPolicyQueryFilter
  ) : Promise<IApplicationAccessPolicies> {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    const { appId, page, limit } = options;
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/records`,
      params: {
        page,
        limit
      }
    });
  }
  public async enableApplicationAccessPolicy(options: IAppAccessPolicy) {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    if (!options?.targetType) {
      throw new Error(
        '请传入主体类型，可选值为 USER、ROLE、ORG、GROUP，含义为用户、角色、组织机构节点、用户分组'
      );
    }
    if (!options?.targetIdentifiers) {
      throw new Error('请传入主体 id');
    }
    const {
      namespace,
      targetIdentifiers,
      targetType,
      appId,
      inheritByChildren
    } = options;
    await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/enable-effect`,
      data: {
        targetType,
        namespace,
        targetIdentifiers,
        inheritByChildren
      }
    });
    return { code: 200, message: '启用应用访问控制策略成功' };
  }
  public async disableApplicationAccessPolicy(options: IAppAccessPolicy) {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    if (!options?.targetType) {
      throw new Error(
        '请传入主体类型，可选值为 USER、ROLE、ORG、GROUP，含义为用户、角色、组织机构节点、用户分组'
      );
    }
    if (!options?.targetIdentifiers) {
      throw new Error('请传入主体 id');
    }

    const {
      namespace,
      targetIdentifiers,
      targetType,
      appId,
      inheritByChildren
    } = options;
    await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/disable-effect`,
      data: {
        targetType,
        namespace,
        targetIdentifiers,
        inheritByChildren
      }
    });
    return { code: 200, message: '停用应用访问控制策略成功' };
  }
  public async deleteApplicationAccessPolicy(options: IAppAccessPolicy) {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    if (!options?.targetType) {
      throw new Error(
        '请传入主体类型，可选值为 USER、ROLE、ORG、GROUP，含义为用户、角色、组织机构节点、用户分组'
      );
    }
    if (!options?.targetIdentifiers) {
      throw new Error('请传入主体 id');
    }

    const {
      namespace,
      targetIdentifiers,
      targetType,
      appId,
      inheritByChildren
    } = options;
    await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/revoke`,
      data: {
        targetType,
        namespace,
        targetIdentifiers,
        inheritByChildren
      }
    });
    return { code: 200, message: '删除应用访问控制策略成功' };
  }
  public async allowAccessApplication(options: IAppAccessPolicy) {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    if (!options?.targetType) {
      throw new Error(
        '请传入主体类型，可选值为 USER、ROLE、ORG、GROUP，含义为用户、角色、组织机构节点、用户分组'
      );
    }
    if (!options?.targetIdentifiers) {
      throw new Error('请传入主体 id');
    }
    const {
      namespace,
      targetIdentifiers,
      targetType,
      appId,
      inheritByChildren
    } = options;
    await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/allow`,
      data: {
        targetType,
        namespace,
        targetIdentifiers,
        inheritByChildren
      }
    });
    return { code: 200, message: '允许主体访问应用的策略配置已生效' };
  }
  public async denyAccessApplication(options: IAppAccessPolicy) {
    if (!options?.appId) {
      throw new Error('请传入 appId');
    }
    if (!options?.targetType) {
      throw new Error(
        '请传入主体类型，可选值为 USER、ROLE、ORG、GROUP，含义为用户、角色、组织机构节点、用户分组'
      );
    }
    if (!options?.targetIdentifiers) {
      throw new Error('请传入主体 id');
    }
    const {
      namespace,
      targetIdentifiers,
      targetType,
      appId,
      inheritByChildren
    } = options;
    await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}/authorization/deny`,
      data: {
        targetType,
        namespace,
        targetIdentifiers,
        inheritByChildren
      }
    });
    return { code: 200, message: '拒绝主体访问应用的策略配置已生效' };
  }
  public async updateDefaultApplicationAccessPolicy(options: {
    defaultStrategy: 'ALLOW_ALL' | 'DENY_ALL';
    appId: string;
  }): Promise<IApplication> {
    if (!options?.appId) {
      throw new Error('请传入应用 id');
    }
    if (!options?.defaultStrategy) {
      throw new Error(
        '请传入默认策略，可选值为 ALLOW_ALL、DENY_ALL，含义为默认允许所有用户登录应用、默认拒绝所有用户登录应用'
      );
    }
    return await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${options.appId}`,
      data: {
        permissionStrategy: { defaultStrategy: options.defaultStrategy }
      }
    });
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
    programmaticAccessAccountSecret: string = AclManagementClient.randomString(
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
}
