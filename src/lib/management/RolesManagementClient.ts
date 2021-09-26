import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  CommonMessage,
  PaginatedAuthorizedResources,
  PaginatedPolicyAssignments,
  PaginatedRoles,
  PolicyAssignmentTargetType,
  ResourceType,
  Role,
  SetUdfValueBatchInput,
  UdfTargetType
} from '../../types/graphql.v2';
import {
  assignRole,
  addRole,
  roles,
  role,
  roleWithUsers,
  updateRole,
  revokeRole,
  deleteRole,
  deleteRoles,
  policyAssignments,
  addPolicyAssignments,
  removePolicyAssignments,
  listRoleAuthorizedResources,
  udv,
  udfValueBatch,
  setUdvBatch,
  setUdfValueBatch,
  removeUdv,
  roleWithUsersWithCustomData
} from '../graphqlapi';
import { DeepPartial, KeyValuePair, PaginatedUsers } from '../../types/index';
import { convertUdvToKeyValuePair, formatAuthorizedResources } from '../utils';
import { HttpClient } from '../common/HttpClient';

/**
 * @class RolesManagementClient 管理角色
 * @description 此模块用于管理 Authing 角色，可以进行角色的增删改查、角色添加/删除用户、角色添加/删除策略 等操作。
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
 * managementClient.roles.list // 获取角色列表
 * managementClient.roles.create // 创建角色
 * managementClient.roles.listUsers // 获取角色用户列表
 * \`\`\`
 *
 * @name RolesManagementClient
 */
export class RolesManagementClient {
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
   * @name create
   * @name_zh 创建角色
   * @description 创建角色
   *
   * @param {string} code 角色唯一标志符
   * @param {string} [options.description] 描述
   * @param {string} [options.namespace] 该角色所在的 namespace，默认为 default
   *
   * @example
   * managementClient.roles.create('rolea', 'RoleA')
   *
   * @returns {Promise<DeepPartial<Role>>}
   * @memberof RolesManagementClient
   */
  async create(
    code: string,
    description?: string,
    namespace?: string
  ): Promise<DeepPartial<Role>> {
    const res = await addRole(this.graphqlClient, this.tokenProvider, {
      code,
      description,
      namespace
    });
    return res.createRole;
  }

  /**
   * @name delete
   * @name_zh 删除角色
   * @description 删除角色
   *
   * @param {string} code 角色唯一标志符
   * @param {string} [namespace] 角色所属的 Namespace code，默认值为 'default'
   *
   * @example
   * managementClient.roles.delete('rolea')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async delete(code: string, namespace?: string): Promise<CommonMessage> {
    const { deleteRole: data } = await deleteRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        namespace
      }
    );
    return data;
  }

  /**
   * @name deleteMany
   * @name_zh 批量删除角色
   * @description 批量删除角色
   *
   * @param {string[]} codeList 角色唯一标志符列表
   * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.delete(['rolea'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async deleteMany(
    codeList: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const { deleteRoles: data } = await deleteRoles(
      this.graphqlClient,
      this.tokenProvider,
      {
        codeList,
        namespace
      }
    );
    return data;
  }

  /**
   * @name update
   * @name_zh 修改角色
   * @description 修改角色
   *
   * @param {string} code 角色唯一标志符
   * @param {Object} options
   * @param {string} options.description 描述信息
   * @param {string} options.newCode 新的唯一标志符
   * @param {string} options.namespace 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.update('rolea', {newCode: 'newcode'})
   *
   *
   * @returns {Promise<DeepPartial<Role>>}
   * @memberof RolesManagementClient
   */
  async update(
    code: string,
    options: {
      description?: string;
      newCode?: string;
      namespace?: string;
    }
  ): Promise<DeepPartial<Role>> {
    const { description, newCode, namespace } = options;
    const { updateRole: data } = await updateRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        description,
        newCode,
        namespace
      }
    );
    return data;
  }

  /**
   * @deprecated  已过时, 不建议使用
   */
  async detail(code: string, namespace?: string): Promise<DeepPartial<Role>> {
    const { role: data } = await role(this.graphqlClient, this.tokenProvider, {
      code,
      namespace
    });
    return data;
  }

  /**
   *
   * @name findByCode
   * @name_zh 获取角色详情
   * @description 获取角色详情
   *
   * @param {string} code 角色唯一标志符
   * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example`
   * managementClient.roles.detail('manager')
   *
   * @returns {Promise<DeepPartial<Role>>} 角色详情
   * @memberof RolesManagementClient
   */
  async findByCode(
    code: string,
    namespace?: string
  ): Promise<DeepPartial<Role>> {
    const data = await this.detail(code, namespace);
    return data;
  }

  /**
   * @name list
   * @name_zh 获取角色列表
   * @description 获取角色列表
   *
   * @param {Object} [options]
   * @param {number} [options.page=1] 页码数
   * @param {number} [options.limit=10] 每页个数
   * @param {string} [options.namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.list(2, 10)
   *
   * @returns {Promise<DeepPartial<PaginatedRoles>>}
   * @memberof RolesManagementClient
   */
  async list(options?: {
    page?: number;
    limit?: number;
    namespace?: string;
  }): Promise<DeepPartial<PaginatedRoles>> {
    const { page = 1, limit = 10, namespace } = options || {};
    const { roles: data } = await roles(
      this.graphqlClient,
      this.tokenProvider,
      {
        page,
        limit,
        namespace
      }
    );
    return data;
  }

  /**
   * @name listUsers
   * @name_zh 获取角色用户列表
   * @description 获取角色用户列表
   *
   * @param {string} code 角色唯一标志符
   * * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.listUsers(code)
   *
   * @returns {Promise<DeepPartial<PaginatedUsers>>}
   * @memberof RolesManagementClient
   */
  async listUsers(
    code: string,
    options?: {
      namespace?: string;
      withCustomData?: boolean;
      page?: number;
      limit?: number;
    }
  ): Promise<DeepPartial<PaginatedUsers>> {
    const { namespace, withCustomData = false, page = 1, limit = 10 } =
      options || {};

    if (!withCustomData) {
      const { role: data } = await roleWithUsers(
        this.graphqlClient,
        this.tokenProvider,
        {
          code,
          namespace,
          page,
          limit
        }
      );
      if (!data) {
        return {
          totalCount: 0,
          list: []
        };
      }
      return data.users;
    } else {
      const { role: data } = await roleWithUsersWithCustomData(
        this.graphqlClient,
        this.tokenProvider,
        {
          code,
          namespace,
          page,
          limit
        }
      );
      if (!data) {
        return {
          totalCount: 0,
          list: []
        };
      }
      let { totalCount, list } = data.users;
      list = list.map(user => {
        // @ts-ignore
        user.customData = convertUdvToKeyValuePair(user.customData);
        return user;
      });
      return {
        totalCount,
        // @ts-ignore
        list
      };
    }
  }

  /**
   * @name findUsers
   * @name_zh 查找角色特定用户
   * @description 查找角色特定用户
   *
   * @param {string} code 角色唯一标志符
   * * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   * * @param {string} [search] 匹配用户、手机、组织模糊搜索，默认值为 ''
   *
   * @example
   * managementClient.roles.findUsers(code)
   *
   * @returns {Promise<DeepPartial<PaginatedUsers>>}
   * @memberof RolesManagementClient
   */
   async findUsers(
    code: string,
    options?: {
      namespace?: string;
      search?: string;
      page?: number;
      limit?: number;
    }
  ): Promise<DeepPartial<PaginatedUsers>> {
    const { namespace = 'default', search = '', page = 1, limit = 10 } =
      options || {};

      const data = await this.httpClient.request({
        method: 'POST',
        url: `${this.options.host}/api/v2/roles/roleUsers`,
        data: {
          namespace: namespace,
          code: code,
          limit: limit,
          page: page,
          search: search,
        }
      });
      return data;
  }

  /**
   * @name addUsers
   * @name_zh 添加用户
   * @description 添加用户
   *
   * @param {string} code 角色唯一标志符
   * @param {string[]} userIds 用户 ID 列表
   * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.addUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async addUsers(
    code: string,
    userIds: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const res = await assignRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds,
      namespace
    });
    return res.assignRole;
  }

  /**
   * @name removeUsers
   * @name_zh 移除用户
   *
   * @description 移除用户
   *
   * @param {string} code 角色唯一标志符
   * @param {string[]} userIds 用户 ID 列表
   * @param {string} [namespace] 角色所属的 Namespace，默认值为 'default'
   *
   * @example
   * managementClient.roles.removeUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async removeUsers(
    code: string,
    userIds: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const res = await revokeRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds,
      namespace
    });
    return res.revokeRole;
  }

  /**
   * @name listPolicies
   * @name_zh 获取角色策略列表
   *
   * @description 获取角色策略列表
   *
   * @param {string} code 角色唯一标志符
   * @param {number} [page=1] 页码数
   * @param {number} [limit=10] 页码个数
   * @example
   *  managementClient.roles.listPolicies('codea', 1, 10)
   *
   * @returns {Promise<PaginatedPolicyAssignments>}
   * @memberof RolesManagementClient
   */
  async listPolicies(
    code: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedPolicyAssignments> {
    const { policyAssignments: data } = await policyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: PolicyAssignmentTargetType.Role,
        targetIdentifier: code,
        page,
        limit
      }
    );
    return data;
  }

  /**
   * @name addPolicies
   * @name_zh 授权策略
   *
   * @description 给角色授权策略策略
   *
   * @param {string} code 角色唯一标志符
   * @param {string[]} policies 策略列表
   * @example
   * managementClient.roles.addPolicies('rolea', ['PolicyA', 'PolicyB'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async addPolicies(code: string, policies: string[]): Promise<CommonMessage> {
    const res = await addPolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: PolicyAssignmentTargetType.User,
        targetIdentifiers: [code],
        policies
      }
    );
    return res.addPolicyAssignments;
  }

  /**
   * @name removePolicies
   * @name_zh 角色移除策略
   *
   * @description 角色移除策略
   *
   * @param {string} code 角色唯一标志符
   * @param {string[]} policies 策略列表
   * @example
   * managementClient.roles.removePolicies('rolea', ['PolicyA', 'PolicyB'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async removePolicies(
    code: string,
    policies: string[]
  ): Promise<CommonMessage> {
    const res = await removePolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: PolicyAssignmentTargetType.User,
        targetIdentifiers: [code],
        policies
      }
    );
    return res.removePolicyAssignments;
  }

  /**
   * @description 获取角色被授权的所有资源
   *
   * @param code: 角色 code
   * @param namespace: 角色权限组 namespace code
   * @param options.resourceType 资源类型
   */
  public async listAuthorizedResources(
    code: string,
    namespace: string,
    options?: {
      resourceType?: ResourceType;
    }
  ): Promise<PaginatedAuthorizedResources> {
    const { resourceType } = options || {};
    const { role } = await listRoleAuthorizedResources(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        namespace,
        resourceType
      }
    );
    if (!role) {
      throw new Error('角色不存在');
    }
    let {
      authorizedResources: { list, totalCount }
    } = role;
    list = formatAuthorizedResources(list);
    return {
      list,
      totalCount
    };
  }

  /**
   * 获取某个角色扩展字段列表
   * @param roleId 角色 ID
   * @returns Promise<{ [key: string]: any }>
   */
  public async getUdfValue(roleId: string): Promise<{ [key: string]: any }> {
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.Role,
      targetId: roleId
    });
    return convertUdvToKeyValuePair(list);
  }

  /**
   * 获取某个角色某个扩展字段
   * @param roleId 角色 ID
   * @param udfKey 扩展字段 Key
   * @returns Promise<{ [key: string]: any }>
   */
  public async getSpecificUdfValue(
    roleId: string,
    udfKey: string
  ): Promise<{ [key: string]: any }> {
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.Role,
      targetId: roleId
    });

    const udfMap = convertUdvToKeyValuePair(list);
    const udfValue: { [key: string]: any } = {};

    for (const key in udfMap) {
      if (udfKey === key) {
        udfValue[key] = udfMap[key];
      }
    }

    return udfValue;
  }

  /**
   * 获取多个角色扩展字段列表
   * @param roleId 角色 ID 列表
   * @returns Promise<{ [x: string]: KeyValuePair }>
   */
  public async getUdfValueBatch(
    roleIds: string[]
  ): Promise<{ [x: string]: KeyValuePair }> {
    if (roleIds.length === 0) {
      throw new Error('empty user id list');
    }
    const { udfValueBatch: result } = await udfValueBatch(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.Role,
        targetIds: roleIds
      }
    );
    let ret: { [x: string]: KeyValuePair } = {};
    for (const { targetId, data } of result) {
      ret[targetId] = convertUdvToKeyValuePair(data);
    }
    return ret;
  }

  /**
   * 设置某个角色扩展字段列表
   * @param roleId 角色 ID 列表
   * @param data 扩展字段
   */
  public async setUdfValue(roleId: string, data: KeyValuePair) {
    if (Object.keys(data).length === 0) {
      throw new Error('empty udf value list');
    }

    await setUdvBatch(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.Role,
      targetId: roleId,
      udvList: Object.keys(data).map(key => ({
        key,
        value: JSON.stringify(data[key])
      }))
    });
  }

  /**
   * 设置多个角色扩展字段列表
   * @param input.roleId 角色 ID 列表
   * @param input.data 扩展字段
   */
  public async setUdfValueBatch(
    input: { roleId: string; data: KeyValuePair }[]
  ) {
    if (input.length === 0) {
      throw new Error('empty input list');
    }
    const params: SetUdfValueBatchInput[] = [];
    input.forEach(({ roleId: userId, data }) => {
      for (const key of Object.keys(data)) {
        params.push({
          targetId: userId,
          key,
          value: JSON.stringify(data[key])
        });
      }
    });
    await setUdfValueBatch(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.Role,
      input: params
    });
  }

  /**
   * 删除用户的扩展字段
   * @param input.roleId 角色 ID 列表
   * @param input.key 扩展字段名
   */
  public async removeUdfValue(roleId: string, key: string) {
    await removeUdv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.Role,
      targetId: roleId,
      key
    });
  }
}
