import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SortByEnum } from '../../types/graphql.v1';
import { ResourcePolicy, Role } from '../../types/graphql.v2';
import {
  createRBACGroup,
  addGroupMetadata,
  addUserToRBACGroup,
  isUserInGroup,
  groupUserList,
  userGroupList,
  assignRole,
  addRole,
  addResource,
  allow,
  isAllowed,
  isDenied,
  roles,
  role,
  roleWithUsers,
  updateRole
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

  async assignRole(roleCode: string, userIds: string[]) {
    const {} = await assignRole(this.graphqlClientV2, this.tokenProvider, {
      code: roleCode,
      userIds
    });
  }

  /**
   * @description 添加角色
   *
   */
  async addRole(
    code: string,
    parent: string,
    options?: {
      name?: string;
      description?: string;
    }
  ): Promise<Role>;
  async addRole(
    code: string,
    options?: {
      name?: string;
      description?: string;
    }
  ): Promise<Role>;
  async addRole(arg1: any, arg2: any, arg3?: any) {
    if (typeof arg2 === 'string') {
      const code = arg1;
      const parent = arg2;
      const { name, description } = arg3 || {};
      const res = await addRole(this.graphqlClientV2, this.tokenProvider, {
        code,
        parent,
        name,
        description
      });
      return res.createRole;
    } else {
      const code = arg1;
      const { name, description } = arg2 || {};
      const res = await addRole(this.graphqlClientV2, this.tokenProvider, {
        code,
        name,
        description
      });
      return res.createRole;
    }
  }

  /**
   * @description 修改角色
   *
   */
  async updateRole(
    code: string,
    updates: { name: string; description: string }
  ) {
    const { name, description } = updates;
    const { updateRole: data } = await updateRole(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        code,
        name,
        description
      }
    );
    return data;
  }

  /**
   * @description 添加资源
   *
   */
  async addResource(code: string, name?: string, description?: string) {
    const { createResource } = await addResource(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        code,
        name,
        description
      }
    );
    return createResource;
  }

  /**
   * @description 允许某个用户/角色/组织机构节点操作某个资源
   *
   * @param roleCode: 角色代码
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async allow(
    orgId: string,
    nodeCode: string,
    action: string,
    resouceCode: string
  ): Promise<ResourcePolicy>;
  async allow(
    roleCode: string,
    action: string,
    resouceCode: string
  ): Promise<ResourcePolicy>;
  async allow(
    arg1: any,
    arg2: any,
    arg3: any,
    arg4?: any
  ): Promise<ResourcePolicy> {
    // 角色
    if (!arg4) {
      const roleCode = arg1;
      const action = arg2;
      const resouceCode = arg3;
      const { createResourcePolicy } = await allow(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          resouceCode,
          action,
          allow: true,
          roleCode
        }
      );
      // @ts-ignore
      return createResourcePolicy;
    }
    // 组织机构
    else {
      const orgId = arg1;
      const nodeCode = arg2;
      const action = arg3;
      const resouceCode = arg4;
      const { createResourcePolicy } = await allow(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          resouceCode,
          action,
          allow: true,
          orgId,
          nodeCode
        }
      );
      // @ts-ignore
      return createResourcePolicy;
    }
  }

  /**
   * @description 允许某个用户/角色操作某个资源
   *
   * @param roleCode: 角色代码
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async deny(roleCode: string, action: string, resouceCode: string) {
    const { createResourcePolicy } = await allow(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        resouceCode,
        action,
        allow: false,
        roleCode
      }
    );
    return createResourcePolicy;
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
}
