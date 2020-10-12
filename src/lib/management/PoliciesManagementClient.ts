import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  PaginatedPolicies,
  PolicyAssignmentTargetType,
  PolicyStatement,
  Role
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
  removePolicyAssignments
} from '../graphqlapi';

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
   * @description 获取策略列表
   *
   * @param {number} [page=1]
   * @param {number} [limit=10]
   * @returns {Promise<DeepPartial<PaginatedPolicies>>}
   * @memberof PoliciesManagementClient
   */
  async list(
    page: number = 1,
    limit: number = 10
  ): Promise<DeepPartial<PaginatedPolicies>> {
    const { policies: data } = await policies(
      this.graphqlClient,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  /**
   * @description 获取策略详情
   *
   *
   */
  async detail(code: string): Promise<DeepPartial<Role>> {
    const { policy: data } = await policy(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data;
  }

  /**
   * @description 添加策略
   *
   */
  async create(
    code: string,
    statements: PolicyStatement[],
    description?: string
  ) {
    const res = await createPolicy(this.graphqlClient, this.tokenProvider, {
      code,
      statements,
      description
    });
    return res.createPolicy;
  }

  /**
   * @description 修改策略
   *
   */
  async update(
    code: string,
    statements?: PolicyStatement[],
    description?: string
  ) {
    const { updatePolicy: data } = await updatePolicy(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        description,
        statements
      }
    );
    return data;
  }

  /**
   * @description 删除策略
   *
   */
  async delete(code: string) {
    const { deletePolicy: data } = await deletePolicy(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data;
  }

  /**
   * @description 批量删除策略
   *
   */
  async deleteMany(codeList: string[]) {
    const { deletePolicies: data } = await deletePolicies(
      this.graphqlClient,
      this.tokenProvider,
      {
        codes: codeList
      }
    );
    return data;
  }

  /**
   * @description 获取策略授权列表
   *
   */
  async listAssignments(code: string, page: number = 1, limit: number = 10) {
    const { policyAssignments: data } = await policyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        page,
        limit
      }
    );
    return data;
  }

  /**
   * @description 添加授权
   *
   */
  async addAssignments(
    policies: string[],
    targetType: PolicyAssignmentTargetType,
    targetIdentifiers: string[]
  ) {
    const res = await addPolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        policies,
        targetType,
        targetIdentifiers
      }
    );
    return res.addPolicyAssignments;
  }

  /**
   * @description 移除授权
   *
   */
  async removeAssignments(
    policies: string[],
    targetType: PolicyAssignmentTargetType,
    targetIdentifiers: string[]
  ) {
    const res = await removePolicyAssignments(
      this.graphqlClient,
      this.tokenProvider,
      {
        policies,
        targetType,
        targetIdentifiers
      }
    );
    return res.removePolicyAssignments;
  }
}
