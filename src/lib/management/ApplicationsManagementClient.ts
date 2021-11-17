import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  ActiveUsers,
  Application,
  AgreementInput,
  ApplicationDetail,
  ManagementClientOptions,
  IApplication,
  ApplicationType,
  ApplicationTenantDetails
} from './types';
import { HttpClient } from '../common/HttpClient';
import { AclManagementClient } from './AclManagementClient';
import { GraphqlClient } from '../common/GraphqlClient';
import { RolesManagementClient } from './RolesManagementClient';
import { ResourceType } from '../../types/graphql.v2';
import { AgreementManagementClient } from './AgreementManagementClient';

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
  agreements: AgreementManagementClient;

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
      httpClient,
      tokenProvider
    );
    this.agreements = new AgreementManagementClient(
      options,
      graphqlClient,
      httpClient,
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
    list: IApplication[];
  }> {
    const { page = 1, limit = 10 } = params || {};
    const data = await this.httpClient.request({
      url: `${this.options.host}/api/v2/applications`,
      method: 'GET',
      params: {
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
    return await this.acl.updateResource(options.code, {
      ...options,
      namespace: appId
    });
  }

  public async deleteResource(appId: string, code: string) {
    return await this.acl.deleteResource(code, appId);
  }

  /**
   * @description 获取应用访问控制策略
   * @param appId
   * @param options
   */
  public async getAccessPolicies(
    appId: string,
    options?: {
      page?: number;
      limit?: number;
    }
  ) {
    return await this.acl.getApplicationAccessPolicies({
      ...options,
      appId
    });
  }

  /**
   * @description 启用针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async enableAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: boolean;
    }
  ) {
    return await this.acl.enableApplicationAccessPolicy({
      ...options,
      appId,
      namespace: appId
    });
  }

  /**
   * @description 停用针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async disableAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: boolean;
    }
  ) {
    return await this.acl.disableApplicationAccessPolicy({
      ...options,
      appId,
      namespace: appId
    });
  }

  /**
   * @description 删除针对某个用户、角色、分组、组织机构的应用访问控制策略
   * @param appId
   * @param options
   */
  public async deleteAccessPolicy(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: boolean;
    }
  ) {
    return await this.acl.deleteApplicationAccessPolicy({
      ...options,
      appId,
      namespace: appId
    });
  }

  /**
   * @description 配置「允许主体（用户、角色、分组、组织机构节点）访问应用」的控制策略
   * @param appId
   * @param options
   */
  public async allowAccess(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: boolean;
    }
  ) {
    return await this.acl.allowAccessApplication({
      ...options,
      appId,
      namespace: appId
    });
  }

  /**
   * @description 配置「拒绝主体（用户、角色、分组、组织机构节点）访问应用」的控制策略
   * @param appId
   * @param options
   */
  public async denyAccess(
    appId: string,
    options: {
      targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
      targetIdentifiers: string[];
      inheritByChildren?: boolean;
    }
  ) {
    return await this.acl.denyAccessApplication({
      ...options,
      appId,
      namespace: appId
    });
  }

  /**
   * @description 更改默认应用访问策略
   * @param appId
   * @param defaultStrategy
   */
  public async updateDefaultAccessPolicy(
    appId: string,
    defaultStrategy: 'ALLOW_ALL' | 'DENY_ALL'
  ) {
    return await this.acl.updateDefaultApplicationAccessPolicy({
      appId,
      defaultStrategy
    });
  }

  public async createRole(
    appId: string,
    options: {
      code: string;
      description?: string;
    }
  ) {
    return await this.roles.create(options.code, options.description, appId);
  }

  public async deleteRole(appId: string, code: string) {
    return await this.roles.delete(code, appId);
  }

  public async deleteRoles(appId: string, codes: string[]) {
    return await this.roles.deleteMany(codes, appId);
  }

  public async updateRole(
    appId: string,
    options: {
      code: string;
      description?: string;
      newCode?: string;
    }
  ) {
    return await this.roles.update(options.code, {
      ...options,
      namespace: appId
    });
  }

  public async findRole(appId: string, code: string) {
    return this.roles.detail(code, appId);
  }

  public async getRoles(
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

  public async getUsersByRoleCode(appId: string, code: string) {
    return await this.roles.listUsers(code, {
      namespace: appId
    });
  }

  public async addUsersToRole(appId: string, code: string, userIds: string[]) {
    return await this.roles.addUsers(code, userIds, appId);
  }

  public async removeUsersFromRole(
    appId: string,
    code: string,
    userIds: string[]
  ) {
    return await this.roles.removeUsers(code, userIds, appId);
  }

  public async listAuthorizedResourcesByRole(
    appId: string,
    code: string,
    resourceType?: ResourceType
  ) {
    return await this.roles.listAuthorizedResources(code, appId, {
      resourceType
    });
  }

  public async createAgreement(appId: string, agreement: AgreementInput) {
    return await this.agreements.create(appId, agreement);
  }

  public async deleteAgreement(appId: string, agreementId: number) {
    return await this.agreements.delete(appId, agreementId);
  }

  public async modifyAgreement(
    appId: string,
    agreementId: number,
    updates: AgreementInput
  ) {
    return await this.agreements.modify(appId, agreementId, updates);
  }

  public async listAgreement(appId: string) {
    return await this.agreements.list(appId);
  }

  public async sortAgreement(appId: string, order: number[]) {
    return await this.agreements.sort(appId, order);
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


  /**
   * 更改应用类型
   * @param appId 应用ID
   * @param type 应用类型
   */
  public async changeApplicationType(appId:string,type:ApplicationType): Promise<IApplication> {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/applications/${appId}`,
      data:{
        appType: type.toString()
      }
    });
    return result;
  }

  /**
   * 获取应用关联租户
   * @param appId 应用ID
   */
  public async applicationTenants(appId:string): Promise<ApplicationTenantDetails> {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/application/${appId}/tenants`,
    });
    return result;
  }

}
