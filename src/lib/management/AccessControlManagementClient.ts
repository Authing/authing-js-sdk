import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SortByEnum } from '../../types/graphql.v1';
import { Role } from '../../types/graphql.v2';
import {
  createRBACGroup,
  addGroupMetadata,
  addUserToRBACGroup,
  isUserInGroup,
  groupUserList,
  userGroupList,
  assignRole,
  addRole,
  isAllowed,
  isDenied,
  roles,
  role,
  roleWithUsers,
  updateRole,
  getGroups,
  revokeRole
} from '../graphqlapi';

export class AccessControlManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    graphqlClientV2: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClientV2 = graphqlClientV2;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 创建 Group
   *
   * @param {string} name
   * @param {string} description
   * @returns {Promise<AuthingGroup>}
   * @memberof AccessControlManagementClient
   */
  async createGroup(name: string, description: string) {
    const res = await createRBACGroup(this.graphqlClient, this.tokenProvider, {
      input: {
        userPoolId: this.options.userPoolId,
        name,
        description
      }
    });
    return res.createRBACGroup;
  }

  /**
   * 为 Group 添加自定义数据
   *
   * @param {string} groupId
   * @param {string} key
   * @param {*} value
   * @returns {Promise<{ key: string, value: string }>}
   * @memberof AccessControlManagementClient
   */
  async addGroupMetadata(groupId: string, key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    const res = await addGroupMetadata(this.graphqlClient, this.tokenProvider, {
      groupId,
      key,
      value
    });
    return res.addGroupMetadata[0];
  }

  /**
   *  添加用户到分组中
   *
   * @param {{
   *     userId: string,
   *     groupId: string
   *   }} options
   * @returns
   * @memberof AccessControlManagementClient
   */
  async addUserToGroup(options: { userId: string; groupId: string }) {
    const res = await addUserToRBACGroup(
      this.graphqlClient,
      this.tokenProvider,
      { input: options }
    );
    return res.addUserToRBACGroup;
  }

  /**
   * 判断用户是否在 Group 中
   *
   * @memberof AccessControlManagementClient
   */
  async isUserInGroup(options: { userId: string; groupId: string }) {
    const res = await isUserInGroup(
      this.graphqlClient,
      this.tokenProvider,
      options
    );
    return res.isUserInGroup;
  }

  /**
   * 查询 Group 用户列表
   *
   * @param {string} groupId
   * @param {{
   *     sortBy: string, 默认为 CREATEDAT_DESC
   *     page: number, 默认为 0
   *     count: number 默认为 10
   *   }} options
   * @returns
   * @memberof AccessControlManagementClient
   */
  async groupUserList(
    groupId: string,
    options: {
      sortBy?: SortByEnum;
      page?: number;
      count?: number;
    } = {
      sortBy: SortByEnum.CreatedatDesc,
      page: 0,
      count: 1
    }
  ) {
    const res = await groupUserList(this.graphqlClient, this.tokenProvider, {
      _id: groupId,
      ...options
    });
    return res.rbacGroup.users;
  }

  /**
   * 查询用户所在的分组列表
   *
   */
  async userGroupList(userId: string) {
    const res = await userGroupList(this.graphqlClient, this.tokenProvider, {
      _id: userId
    });
    return res.userGroupList;
  }

  /**
   * @description 获取用户池角色列表
   *
   * @param code 角色唯一标志
   * @param options
   *
   */
  async role(
    code: string,
    options: {
      /** 是否获取用户列表 */
      getUsers?: boolean;
    } = {}
  ): Promise<DeepPartial<Role>> {
    const { getUsers = false } = options;
    if (!getUsers) {
      const { role: data } = await role(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          code
        }
      );
      return data;
    } else {
      const { role: data } = await roleWithUsers(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          code
        }
      );
      return data;
    }
  }

  /**
   * @description 获取用户池角色列表
   *
   */
  async roles(page: number = 1, limit: number = 10) {
    const { roles: data } = await roles(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  async assignRole(
    roleCode: string,
    targets: {
      userIds?: string[];
      groupCodes?: string[];
    }
  ) {
    const { userIds = [], groupCodes = [] } = targets;
    const res = await assignRole(this.graphqlClientV2, this.tokenProvider, {
      code: roleCode,
      userIds,
      groupCodes
    });
    return res.assignRole;
  }

  async revokeRole(
    roleCode: string,
    targets: {
      userIds?: string[];
      groupCodes?: string[];
    }
  ) {
    const { userIds = [], groupCodes = [] } = targets;
    const res = await revokeRole(this.graphqlClientV2, this.tokenProvider, {
      code: roleCode,
      userIds,
      groupCodes
    });
    return res.revokeRole;
  }

  /**
   * @description 添加角色
   *
   */
  async addRole(code: string, description?: string, parent?: string) {
    const res = await addRole(this.graphqlClientV2, this.tokenProvider, {
      code,
      parent,
      description
    });
    return res.createRole;
  }

  /**
   * @description 修改角色
   *
   */
  async updateRole(code: string, description: string) {
    const { updateRole: data } = await updateRole(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        code,
        description
      }
    );
    return data;
  }

  /**
   * @description 判断某个用户是否对某个资源有某个操作权限
   *
   * @param userId: 用户ID
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async isAllowed(userId: string, action: string, resouceCode: string) {
    const { isActionAllowed } = await isAllowed(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        resouceCode,
        action,
        userId
      }
    );
    return isActionAllowed;
  }

  /**
   * @description 判断某个用户是否对某个资源没有某个操作权限
   *
   * @param userId: 用户ID
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async isDenied(userId: string, action: string, resouceCode: string) {
    const { isActionDenied } = await isDenied(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        resouceCode,
        action,
        userId
      }
    );
    return isActionDenied;
  }

  /**
   * @description 获取分组列表
   *
   */
  async groups(page: number = 1, limit: number = 10) {
    const { groups: data } = await getGroups(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }
}
