import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  addRole,
  assignRole,
  deleteRole,
  deleteRoles,
  getGroups,
  revokeRole,
  role,
  roleWithUsers,
  updateRole
} from '../graphqlapi';
import { Role, CommonMessage, PaginatedUsers } from '../..';

export class GroupsManagementClient {
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
   * @description 获取分组列表
   *
   */
  async list(page: number = 1, limit: number = 10) {
    const { groups: data } = await getGroups(
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
   *
   * @name detail
   * @name_zh 获取角色详情
   * @description 获取角色详情
   *
   * @param {string} code 角色唯一标志符
   *
   * @example
   * RolesManagementClient().detail('manager')
   *
   * @returns {Promise<DeepPartial<Role>>} 角色详情
   * @memberof RolesManagementClient
   */
  async detail(code: string): Promise<DeepPartial<Role>> {
    const { role: data } = await role(this.graphqlClient, this.tokenProvider, {
      code
    });
    return data;
  }

  /**
   * @name create
   * @name_zh 创建角色
   * @description 创建角色
   *
   * @param {string} code 角色唯一标志符
   * @param {string} [description] 描述
   *
   * @example
   * RolesManagementClient().create('rolea', 'RoleA')
   *
   * @returns {Promise<DeepPartial<Role>>}
   * @memberof RolesManagementClient
   */
  async create(code: string, description?: string): Promise<DeepPartial<Role>> {
    const res = await addRole(this.graphqlClient, this.tokenProvider, {
      code,
      description
    });
    return res.createRole;
  }

  /**
   * @name update
   * @name_zh 修改角色
   * @description 修改角色
   *
   * @param {string} code 角色唯一标志符
   * @param {Object} input
   * @param {string} input.description 描述信息
   * @param {string} input.newCode 新的唯一标志符
   *
   * @example
   * RolesManagementClient().update('rolea', {newCode: 'newcode'})
   *
   *
   * @returns {Promise<DeepPartial<Role>>}
   * @memberof RolesManagementClient
   */
  async update(
    code: string,
    input: {
      description?: string;
      newCode?: string;
    }
  ): Promise<DeepPartial<Role>> {
    const { description, newCode } = input;
    const { updateRole: data } = await updateRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        description,
        newCode
      }
    );
    return data;
  }

  /**
   * @name delete
   * @name_zh 删除角色
   * @description 删除角色
   *
   * @param {string} code 角色唯一标志符
   *
   * @example
   * RolesManagementClient().delete('rolea')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async delete(code: string): Promise<CommonMessage> {
    const { deleteRole: data } = await deleteRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
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
   *
   * @example
   * RolesManagementClient().delete(['rolea'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async deleteMany(codeList: string[]): Promise<CommonMessage> {
    const { deleteRoles: data } = await deleteRoles(
      this.graphqlClient,
      this.tokenProvider,
      {
        codes: codeList
      }
    );
    return data;
  }

  /**
   * @name listUsers
   * @name_zh 获取角色用户列表
   * @description 获取角色用户列表
   * @param {string} code 角色唯一标志符
   * @example
   * RolesManagementClient().listUsers(code)
   *
   * @returns {Promise<DeepPartial<PaginatedUsers>>}
   * @memberof RolesManagementClient
   */
  async listUsers(code: string): Promise<DeepPartial<PaginatedUsers>> {
    const { role: data } = await roleWithUsers(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data.users;
  }

  /**
   * @name addUsers
   * @name_zh 添加用户
   * @description 添加用户
   *
   * @param {string} code 角色唯一标志符
   * @param {string[]} userIds 用户 ID 列表
   * @example
   * RolesManagementClient().addUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async addUsers(code: string, userIds: string[]): Promise<CommonMessage> {
    const res = await assignRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds
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
   * @example
   * RolesManagementClient().removeUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof RolesManagementClient
   */
  async removeUsers(code: string, userIds: string[]): Promise<CommonMessage> {
    const res = await revokeRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds
    });
    return res.revokeRole;
  }
}
