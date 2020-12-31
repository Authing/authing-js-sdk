import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  PaginatedPolicies,
  PolicyAssignmentTargetType,
  PolicyStatement,
  Policy,
  CommonMessage,
  PaginatedPolicyAssignments
} from '../../types/graphql.v2';
import {
  policies,
  policy,
  createPolicy,
  updatePolicy,
  deletePolicy,
  deletePolicies,
  policyAssignments,
  addPolicyAssignments,
  removePolicyAssignments,
  enablePolicyAssignment,
  disablePolicyAssignment
} from '../graphqlapi';
import { DeepPartial } from '../../types/index';

/**
 * @class PoliciesManagementClient 管理策略
 * @name PoliciesManagementClient
 * @description Authing 的访问控制与权限管理模型核心围绕着两个点来设计：**资源（Resource）**和**策略（Policy）**。策略定义了对某个（类）资源的某个（些）操作权限，将策略授权给用户（或角色），就能知道用户（或角色）是否具备对某个资源的某个操作具备操作权限。
 *
 * 此模块可以用于对策略进行增删改查，以及管理策略授权，策略可以被授予用户或角色。详细介绍请见 https://docs.authing.co/docs/access-control/index.html
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.policies.list // 获取策略列表
 * managementClient.policies.create // 创建策略
 * managementClient.policies.listUsers // 获取策略授权记录
 * \`\`\`
 *
 */
export class PoliciesManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }
  /**
   * @name create
   * @name_zh 添加策略
   * @description 添加策略
   *
   * @param {string} code 策略唯一标志
   * @param {PolicyStatement[]} 策略语句，详细格式与说明请见 https://docs.authing.co/docs/access-control/index.html
   * @param {string} [description] 描述
   *
   * @example
   *
   * import { PolicyEffect } from "authing-js-sdk"
   *
   * const statements = [
   *   {
   *     resource: 'books:123',
   *     effect: PolicyEffect.Allow,
   *     actions: ['books:edit']
   *   }
   * ];
   *
   * const policy = await managementClient.policies.create(code, statements);
   *
   * @returns {Promise<DeepPartial<Policy>>}
   * @memberof PoliciesManagementClient
   */
  async create({
    code,
    statements,
    description,
    namespace
  }: {
    code: string;
    statements: PolicyStatement[];
    description?: string;
    namespace?: string;
  }): Promise<DeepPartial<Policy>> {
    const res = await createPolicy(this.graphqlClient, this.tokenProvider, {
      code,
      statements,
      description,
      namespace
    });
    return res.createPolicy;
  }

  /**
   * @name delete
   * @name_zh 删除策略
   * @description 删除策略，系统内置策略由 Authing 官方维护，不能修改和删除。
   *
   * @example
   *
   * const { code, message } = await managementClient.policies.delete("CODE"); // 通过 code 是否为 200 判断操作是否成功
   *
   *
   * @param {string} code 策略唯一标志
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   *
   */
  async delete(code: string, namespace?: string): Promise<CommonMessage> {
    const { deletePolicy: data } = await deletePolicy(
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
   * @name_zh 批量删除策略
   * @description 批量删除策略，系统内置策略由 Authing 官方维护，不能修改和删除。
   *
   * @example
   *
   * const { code, message } = await managementClient.policies.deleteMany(["CODE"]); // 通过 code 是否为 200 判断操作是否成功
   *
   *
   * @param {string} codeList 策略唯一标志列表
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   *
   */
  async deleteMany(
    codeList: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const { deletePolicies: data } = await deletePolicies(
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
   * @name_zh 修改策略
   * @description 修改策略，系统内置策略由 Authing 官方维护，不能修改和删除。
   *
   * @param {string} code 策略唯一标志
   * @param {Object} updates
   * @param {string} [updates.description] 描述
   * @param {PolicyStatement[]} [updates.statements] 策略语句，详细格式与说明请见 https://docs.authing.co/docs/access-control/index.html
   * @param {string} [updates.newCode] 新的唯一标志，如果传入，需要保证其在用户池内是唯一的。
   *
   * @example
   *
   * const policy = await managementClient.policies.update('CODE', { newCode: 'NEWCODE' });
   *
   * @returns {Promise<DeepPartial<Policy>>}
   * @memberof PoliciesManagementClient
   *
   */
  async update(
    code: string,
    updates: {
      statements?: PolicyStatement[];
      description?: string;
      newCode?: string;
      namespace?: string;
    }
  ): Promise<DeepPartial<Policy>> {
    const { description, statements, newCode, namespace } = updates;
    const { updatePolicy: data } = await updatePolicy(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        description,
        statements,
        newCode,
        namespace
      }
    );
    return data;
  }

  /**
   * @name detail
   * @name_zh 获取策略详情
   * @description 获取策略详情
   *
   * @param {string} code 策略唯一标志
   *
   * const policy = await managementClient.policies.detail('CODE');
   *
   * @returns {Promise<DeepPartial<Policy>>}
   * @memberof PoliciesManagementClient
   */
  async detail(code: string, namespace?: string): Promise<DeepPartial<Policy>> {
    const { policy: data } = await policy(
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
   * @name list
   * @name_zh 获取策略列表
   * @description 获取策略列表
   *
   * @param {Object} options
   * @param {number} [options.page=1]
   * @param {number} [options.limit=10]
   * @param {number} [options.namespace='default'] 所属权限组
   * @param {boolean} [options.excludeDefault=true] 是否排除系统默认资源
   *
   * @example
   *
   * const { list, totalCount } = await managementClient.policies.list({
   *   excludeDefault: false // 包含系统默认的策略
   * });
   *
   * @returns {Promise<DeepPartial<PaginatedPolicies>>}
   * @memberof PoliciesManagementClient
   */
  async list(options?: {
    page?: number;
    limit?: number;
    namespace?: string;
  }): Promise<DeepPartial<PaginatedPolicies>> {
    options = options || {};
    const { page = 1, limit = 10, namespace } = options;
    const { policies: data } = await policies(
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
   * @name listAssignments
   * @name_zh 获取策略授权记录
   * @description 获取策略授权记录
   *
   * @param {string} code 策略唯一标志
   * @param {number} [page=1]
   * @param {number} [limit=10]
   *
   * @example
   *
   * const { totalCount, list } = await managementClient.policies.listAssignments("CODE");
   *
   * // list 数据示例
   *
   *[
   *  {
   *    code: "PolicyCode", // 策略唯一标志
   *    targetType: 'USER', // 'USER' 表示用户, 'ROLE' 表示角色
   *    targetIdentifier: '5f8812866795cc0026352fc5' // 用户 ID 或者角色 code
   *  },
   *  {
   *    code: "PolicyCode", // 策略唯一标志
   *    targetType: 'ROLE', // 'USER' 表示用户, 'ROLE' 表示角色
   *    targetIdentifier: 'ROLE_CODE' // 用户 ID 或者角色 code
   *  }
   *]
   *
   * @returns {Promise<PaginatedPolicyAssignments>}
   * @memberof PoliciesManagementClient
   */
  async listAssignments({
    code,
    namespace,
    page = 1,
    limit = 10
  }: {
    code: string;
    namespace?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedPolicyAssignments> {
    const { policyAssignments: data } = await policyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        page,
        limit,
        namespace
      }
    );
    return data;
  }

  /**
   * @name addAssignments
   * @name_zh 添加策略授权
   * @description 添加策略授权，可以将策略授权给用户和角色，授权给角色的策略会被该角色下的所有用户继承 。此接口可以进行批量操作。
   *
   * @param {string[]} policies 策略 code 列表
   * @param {PolicyAssignmentTargetType} targetType 可选值为 USER (用户) 和 ROLE (角色)
   * @param {string[]} targetIdentifiers 用户 id 列表和角色 code 列表
   *
   * @example
   *
   * import { PolicyAssignmentTargetType } from "authing-js-sdk"
   *
   * await managementClient.policies.addAssignments(
   *   ["code1", "code2"],
   *   PolicyAssignmentTargetType.User,
   *   ['USERID']
   * );
   *
   * await managementClient.policies.addAssignments(
   *   ["code1", "code2"],
   *   PolicyAssignmentTargetType.Role,
   *   ['ROLE_CODE']
   * );
   *
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   */
  async addAssignments(
    policies: string[],
    targetType: PolicyAssignmentTargetType,
    targetIdentifiers: string[],
    options?: {
      inheritByChildren?: boolean;
      namespace?: string;
    }
  ): Promise<CommonMessage> {
    const { inheritByChildren, namespace } = options || {};
    const res = await addPolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        policies,
        targetType,
        targetIdentifiers,
        inheritByChildren,
        namespace
      }
    );
    return res.addPolicyAssignments;
  }

  /**
   * @name removeAssignments
   * @name_zh 撤销策略授权
   * @description 撤销策略授权，此接口可以进行批量操作。
   *
   * @param {string[]} policies 策略 code 列表
   * @param {PolicyAssignmentTargetType} targetType 可选值为 USER (用户) 和 ROLE (角色)
   * @param {string[]} targetIdentifiers 用户 id 列表和角色 code 列表
   *
   * @example
   *
   * import { PolicyAssignmentTargetType } from "authing-js-sdk"
   *
   * await managementClient.policies.removeAssignments(
   *   ["code1", "code2"],
   *   PolicyAssignmentTargetType.User,
   *   ['USERID']
   * );
   *
   * await managementClient.policies.removeAssignments(
   *   ["code1", "code2"],
   *   PolicyAssignmentTargetType.Role,
   *   ['ROLE_CODE']
   * );
   *
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   */
  async removeAssignments(
    policies: string[],
    targetType: PolicyAssignmentTargetType,
    targetIdentifiers: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const res = await removePolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        policies,
        targetType,
        targetIdentifiers,
        namespace
      }
    );
    return res.removePolicyAssignments;
  }

  /**
   * @name enableAssignment
   * @name_zh 设置策略授权状态为开启
   * @description 开启授权，处于未开启状态的策略授权不会生效
   *
   * @param {string} policy 策略 code
   * @param {PolicyAssignmentTargetType} targetType 可选值为 USER (用户), ROLE (角色), GROUP（分组）, ORG（组织机构）
   * @param {string} targetIdentifier 用户 id 、角色 code、分组 code、组织机构节点 ID
   *
   * @example
   *
   * import { PolicyAssignmentTargetType } from "authing-js-sdk"
   *
   * await managementClient.policies.enableAssignment(
   *   "code1",
   *   PolicyAssignmentTargetType.User,
   *   'USERID'
   * );
   *
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   */
  async enableAssignment(
    policy: string,
    targetType: PolicyAssignmentTargetType,
    targetIdentifier: string,
    namespace?: string
  ): Promise<CommonMessage> {
    const res = await enablePolicyAssignment(
      this.graphqlClient,
      this.tokenProvider,
      {
        policy,
        targetType,
        targetIdentifier,
        namespace
      }
    );
    return res.enablePolicyAssignment;
  }

  /**
   * @name disableAssignment
   * @name_zh 设置策略授权状态为关闭
   * @description 关闭策略授权，处于未开启状态的策略授权不会生效
   *
   * @param {string} policy 策略 code
   * @param {PolicyAssignmentTargetType} targetType 可选值为 USER (用户), ROLE (角色), GROUP（分组）, ORG（组织机构）
   * @param {string} targetIdentifier 用户 id 、角色 code、分组 code、组织机构节点 ID
   *
   * @example
   *
   * import { PolicyAssignmentTargetType } from "authing-js-sdk"
   *
   * await managementClient.policies.disableAssignment(
   *   "code1",
   *   PolicyAssignmentTargetType.User,
   *   'USERID'
   * );
   *
   * @returns {Promise<CommonMessage>}
   * @memberof PoliciesManagementClient
   */
  async disableAssignment(
    policy: string,
    targetType: PolicyAssignmentTargetType,
    targetIdentifier: string,
    namespace?: string
  ): Promise<CommonMessage> {
    const res = await disablePolicyAssignment(
      this.graphqlClient,
      this.tokenProvider,
      {
        policy,
        targetType,
        targetIdentifier,
        namespace
      }
    );
    return res.disbalePolicyAssignment;
  }
}
