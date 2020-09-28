import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { PaginatedGroups, Role } from '../../types/graphql.v2';
import {
  assignRole,
  addRole,
  isAllowed,
  isDenied,
  roles,
  role,
  roleWithUsers,
  updateRole,
  getGroups,
  revokeRole,
  addUserToGroup,
  allow
} from '../graphqlapi';

export class AccessControlManagementClient {
  options: ManagementClientOptions;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClientV2: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClientV2 = graphqlClientV2;
    this.tokenProvider = tokenProvider;
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
  async createRole(code: string, description?: string, parent?: string) {
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
  async updateRole(
    code: string,
    input: {
      description?: string;
      newCode?: string;
    }
  ) {
    const { description, newCode } = input;
    const { updateRole: data } = await updateRole(
      this.graphqlClientV2,
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
   * @description 判断某个用户是否对某个资源有某个操作权限
   *
   * @param userId: 用户ID
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async isAllowed(userId: string, action: string, resource: string) {
    const { isActionAllowed } = await isAllowed(
      this.graphqlClientV2,
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
   * @description 判断某个用户是否对某个资源没有某个操作权限
   *
   * @param userId: 用户ID
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async isDenied(userId: string, action: string, resource: string) {
    const { isActionDenied } = await isDenied(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        resource,
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

  async groups(userId: string): Promise<PaginatedGroups>;
  async groups(page: number, limit: number): Promise<PaginatedGroups>;
  async groups(arg1: any, arg2?: any): Promise<PaginatedGroups> {
    if (arg2) {
      const page = 1;
      const limit = 2;
      const { groups: data } = await getGroups(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          page,
          limit
        }
      );
      // @ts-ignore
      return data;
    } else {
      const userId = arg1;
      const { groups: data } = await getGroups(
        this.graphqlClientV2,
        this.tokenProvider,
        {
          userId,
          page: 1,
          limit: -1
        }
      );
      // @ts-ignore
      return data;
    }
  }

  async addUserToGroup(userId: string, groupId: string) {
    const { addUserToGroup: data } = await addUserToGroup(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        groupId,
        userId
      }
    );
    return data;
  }

  async allow(
    /** 用户 ID */
    userId: string,
    /** 资源 */
    resource: string,
    /** 操作 */
    action: string
  ) {
    await allow(this.graphqlClientV2, this.tokenProvider, {
      resource,
      action,
      userId
    });
  }
}
