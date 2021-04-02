import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  IAppAccessPolicy,
  IAppAccessPolicyQueryFilter,
  IResourceDto,
  IResourceQueryFilter,
  IResourceResponse,
  IResourceUpdateDto,
  ManagementClientOptions
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
  tokenProvider: ManagementTokenProvider;
  httpClient: HttpClient;

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
    action: string
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
    options?: IResourceUpdateDto
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
  ) {
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
}
