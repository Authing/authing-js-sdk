import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  ApplicationDetail,
  ManagementClientOptions
} from './types';
import { HttpClient } from '../common/HttpClient';
import { AclManagementClient } from './AclManagementClient';
import { GraphqlClient } from '../common/GraphqlClient';
import { RolesManagementClient } from './RolesManagementClient';
import { ResourceType } from '../../types/graphql.v2';

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
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;
  acl: AclManagementClient;
  roles: RolesManagementClient;

  constructor(
    options: ManagementClientOptions,
    httpClient: HttpClient,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
    this.acl = new AclManagementClient(
      options,
      graphqlClient,
      httpClient,
      tokenProvider
    );
    this.roles = new RolesManagementClient(
      options,
      graphqlClient,
      tokenProvider
    );
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
   * @description 通过 ID 获取应用详情
   * @param id 应用 ID
   */
  public async findById(id: string): Promise<ApplicationDetail> {
    if (!id) {
      throw new Error('params id is required!');
    }
    const data = await this.httpClient.request({
      url: `${this.options.host}/api/v2/applications/${id}`,
      method: 'GET'
    });
    return data;
  }

  public async listResources(
    appId: string,
    options?: {
      page?: number;
      limit?: number;
      type?: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
    }
  ) {
    return await this.acl.getResources({
      ...options,
      namespace: appId
    });
  }

  public async createResource(
    appId: string,
    options: {
      code: string;
      type: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
      description?: string;
      actions: Array<{
        name: string;
        description: string;
      }>;
    }
  ) {
    return await this.acl.createResource({
      ...options,
      namespace: appId
    });
  }

  public async updateResource(
    appId: string,
    options: {
      code: string;
      type?: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
      description?: string;
      actions?: Array<{
        name: string;
        description: string;
      }>;
    }
  ) {
    return await this.acl.updateResource(
      options.code,
      {
        ...options,
        namespace: appId
      }
    );
  }

  public async deleteResource(
    appId: string,
    code: string
  ) {
    return await this.acl.deleteResource(
      code,
      appId
    );
  }

  /**
   * @description 获取应用访问控制策略
   * @param appId
   * @param options
   */
  public async getApplicationAccessPolicies(
    appId: string,
    options?: {
      page?: number;
      limit?: number;
    }
  ) {
    return await this.acl.getApplicationAccessPolicies(
      {
        ...options,
        appId
      }
    );
  }

  /**
   * @description 启用针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async enableApplicationAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: string;
    }
  ) {
    return await this.acl.enableApplicationAccessPolicy(
      {
        ...options,
        appId,
        namespace: appId
      }
    );
  }

  /**
   * @description 停用针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async disableApplicationAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: string;
    }
  ) {
    return await this.acl.disableApplicationAccessPolicy(
      {
        ...options,
        appId,
        namespace: appId
      }
    );
  }

  /**
   * @description 删除针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async deleteApplicationAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: string;
    }
  ) {
    return await this.acl.deleteApplicationAccessPolicy(
      {
        ...options,
        appId,
        namespace: appId
      }
    );
  }

  /**
   * @description 配置「允许主体（用户、角色、分组、组织机构节点）访问应用」的控制策略
   * @param appId
   * @param options
   */
  public async allowAccessApplication(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      namespace?: string;
      inheritByChildren?: string;
    }
  ) {
    return await this.acl.allowAccessApplication(
      {
        ...options,
        appId
      }
    );
  }

  /**
   * @description 配置「拒绝主体（用户、角色、分组、组织机构节点）访问应用」的控制策略
   * @param appId
   * @param options
   */
  public async denyAccessApplication(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      namespace?: string;
      inheritByChildren?: string;
    }
  ) {
    return await this.acl.denyAccessApplication(
      {
        ...options,
        appId
      }
    );
  }

  /**
   * @description 更改默认应用访问策略
   * @param appId
   * @param defaultStrategy
   */
  public async updateDefaultApplicationAccessPolicy(
    appId: string,
    defaultStrategy: 'ALLOW_ALL' | 'DENY_ALL'
  ) {
    return await this.acl.updateDefaultApplicationAccessPolicy(
      {
        appId,
        defaultStrategy
      }
    );
  }

  public async createRole(
    appId: string,
    options: {
      code: string,
      description?: string,
    }
  ) {
    return await this.roles.create(
      options.code,
      options.description,
      appId
    );
  }

  public async deleteRole(
    appId: string,
    code: string
  ) {
    return await this.roles.delete(
      code,
      appId
    );
  }

  public async deleteRoles(
    appId: string,
    codes: string[]
  ) {
    return await this.roles.deleteMany(codes, appId);
  }

  public async updateRole(
    appId: string,
    options: {
      code: string,
      description?: string;
      newCode?: string;
    }
  ) {
    return await this.roles.update(
      options.code,
      {
        ...options,
        namespace: appId
      }
    );
  }

  public async findRoleInfo(
    appId: string,
    code: string
  ) {
    return this.roles.detail(code, appId);
  }

  public async rolesList(
    appId: string,
    options?: {
      page?: number;
      limit?: number;
    }
  ) {
    return await this.roles.list({
      ...options,
      namespace: appId
    });
  }

  public async rolesUsersList(
    appId: string,
    code: string
  ) {
    return await this.roles.listUsers(code, appId);
  }

  public async roleAddUser(
    appId: string,
    code: string,
    userIds: string[]
  ) {
    return await this.roles.addUsers(
      code,
      userIds,
      appId
    );
  }

  public async roleRemoveUsers(
    appId: string,
    code: string,
    userIds: string[]
  ) {
    return await this.roles.removeUsers(
      code,
      userIds,
      appId
    );
  }

  public async roleListAuthorizedResources(
    appId: string,
    code: string,
    resourceType?: ResourceType
  ) {
    return await this.roles.listAuthorizedResources(
      code,
      appId,
      {
        resourceType
      }
    )
  }
}
