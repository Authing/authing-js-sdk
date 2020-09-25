import { GraphqlClient } from './../common/GraphqlClient';
import { encrypt } from './../utils';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  deleteUser,
  deleteUsers,
  user,
  users,
  getGroupsOfUser,
  updateUser,
  searchUser,
  createUser,
  refreshToken,
  userBatch,
  getUserRoles
} from '../graphqlapi';
import {
  User,
  PaginatedUsers,
  CreateUserInput,
  RefreshToken
} from '../../types/graphql.v2';

export class UsersManagementClient {
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
   * 删除用户
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async delete(userId: string) {
    const { deleteUser: data } = await deleteUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id: userId
      }
    );
    return data;
  }

  /**
   * 批量删除用户
   *
   * @param {string[]} userIds
   * @returns
   * @memberof UsersManagementClient
   */
  async deleteMany(userIds: string[]) {
    const { deleteUsers: data } = await deleteUsers(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        ids: userIds
      }
    );
    return data;
  }

  /**
   * 获取用户详情
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async get(userId: string): Promise<User> {
    const { user: data } = await user(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id: userId
      }
    );
    return data;
  }

  /**
   * @description 通过 ID 批量查询用户
   *
   */
  async batch(ids: string[]) {
    const { userBatch: data } = await userBatch(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        ids
      }
    );
    return data;
  }

  /**
   * @description 获取用户池用户列表
   * @param page: 页码数, 从 1 开始
   * @param limit: 每页包含的用户数
   *
   * @param {{ page: number, count: number }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page?: number, limit?: number) {
    const { users: data } = await users(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  /**
   * 以管理员身份创建用户
   * @param userInfo
   * @param keepPassword
   */
  async create(userInfo: CreateUserInput, keepPassword?: boolean) {
    if (userInfo && userInfo.password) {
      userInfo.password = encrypt(
        userInfo.password,
        this.options.encrptionPublicKey
      );
    }
    const { createUser: user } = await createUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        userInfo,
        keepPassword
      }
    );
    return user;
  }

  /**
   * @description 修改用户资料
   *
   */
  async update(id: string, updates: Partial<User>) {
    if (updates && updates.password) {
      updates.password = encrypt(
        updates.password,
        this.options.encrptionPublicKey
      );
    }
    const { updateUser: user } = await updateUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id,
        input: updates
      }
    );
    return user;
  }

  /**
   * @description 获取用户的分组列表
   *
   */
  async getGroups(userId: string, page: number = 1, limit: number = 10) {
    const { groups } = await getGroupsOfUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        userId,
        page,
        limit
      }
    );
    return groups;
  }

  /**
   * @description 获取用户的角色列表
   *
   */
  async getRoles(userId: string) {
    const {
      user: { roles }
    } = await getUserRoles(this.graphqlClientV2, this.tokenProvider, {
      id: userId
    });
    return roles;
  }

  /**
   * 根据关键字搜索用户
   * @param query 搜索内容
   * @param options 选项
   */
  async search(
    query: string,
    options?: { fields?: string[]; page?: number; limit?: number }
  ): Promise<PaginatedUsers> {
    const { searchUser: users } = await searchUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        query,
        ...options
      }
    );
    // @ts-ignore
    return users;
  }

  async refreshToken(id: string): Promise<RefreshToken> {
    const { refreshToken: data } = await refreshToken(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id
      }
    );
    return data;
  }
}
