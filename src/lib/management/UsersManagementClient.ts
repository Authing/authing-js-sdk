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
  getUserRoles,
  assignRole,
  revokeRole,
  isUserExists
} from '../graphqlapi';
import {
  User,
  PaginatedUsers,
  CreateUserInput,
  RefreshToken,
  CommonMessage,
  UpdateUserInput
} from '../../types/graphql.v2';

/**
 * @name UsersManagementClient Authing 用户管理模块
 * @description Authing 用户管理模块。
 *
 * 此模块可以进行用户名了增删改查、搜索用户、刷新用户 token、管理用户分组、管理用户角色、管理用户策略授权等操作。
 *
 * 该模块发出的所有操作都将以管理员身份进行，所以不需要进行建议短信验证码等操作，如果你希望以普通用户的身份进行操作，请使用 AuthenticationClient 。
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: process.env.AUTHING_USERPOOL_ID,
 *    secret: process.env.AUTHING_USERPOOL_SECRET,
 *    host: process.env.AUTHING_HOST
 * })
 *
 * managementClient.users.list // 获取用户列表
 * managementClient.users.create // 创建用户
 * managementClient.users.listRoles // 获取用户角色列表
 * managementClient.users.search // 搜索用户
 * \`\`\`
 *
 * @class UsersManagementClient
 */
export class UsersManagementClient {
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
   * @name_zh 创建用户
   * @description 此接口将以管理员身份创建用户，不需要进行手机号验证码检验等安全检测。
   *
   * @param {CreateUserInput} userInfo 用户资料
   * @param {string} userInfo.email 邮箱，用户池内唯一
   * @param {boolean} userInfo.emailVerified 邮箱是否已验证
   * @param {string} userInfo.phone 手机号
   * @param {boolean} userInfo.phoneVerified 手机号是否验证
   * @param {string} userInfo.unionid 以社会化登录的用户该字段为用户在第三方社会化登录服务商中的唯一 ID
   * @param {string} userInfo.openid  微信登录返回的 openid
   * @param {string} userInfo.password 密码
   * @param {string} userInfo.registerSource 注册来源，可以多选
   * @param {string} userInfo.username 用户名
   * @param {string} userInfo.nickname 昵称
   * @param {string} userInfo.photo 头像
   * @param {string} userInfo.company 公司
   * @param {string} userInfo.browser 浏览器
   * @param {number} userInfo.loginsCount 登录次数，当你从原有用户系统迁移到 Authing 时可以设置该字段。
   * @param {string} userInfo.lastLogin 上次登录时间, 符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
   * @param {string} userInfo.lastIP 用户最近一次登录（或其他活动）的 IP
   * @param {string} userInfo.signedUp 注册时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
   * @param {boolean} userInfo.blocked 账号是否被禁用
   * @param {boolean} userInfo.isDeleted 标记账号是否被删除
   * @param {string} userInfo.device 设备
   * @param {string} userInfo.lastIP 最近登录的 IP
   * @param {string} userInfo.name Name
   * @param {string} userInfo.givenName Given Name
   * @param {string} userInfo.familyName Family Name
   * @param {string} userInfo.middleName Middle Name
   * @param {string} userInfo.profile Profile Url
   * @param {string} userInfo.preferredUsername Preferred Name
   * @param {string} userInfo.website 个人网站
   * @param {string} userInfo.gender 性别, F 表示男性、W 表示女性、未知表示 U
   * @param {string} userInfo.birthdate 生日
   * @param {string} userInfo.zoneinfo 时区
   * @param {string} userInfo.locale 语言
   * @param {string} userInfo.address 地址
   * @param {string} userInfo.streetAddress 街道地址
   * @param {string} userInfo.locality
   * @param {string} userInfo.region 地域
   * @param {string} userInfo.postalCode 邮编
   * @param {string} userInfo.city 城市
   * @param {string} userInfo.province 省份
   * @param {string} userInfo.country 国家
   *
   * @example
   *
   * const user = await managementClient.users.create({
   *    username: 'bob',
   *    password: 'passw0rd'
   * })
   *
   * @example
   *
   * const user = await managementClient.users.create({
   *    nickname: 'Nick',
   *    phone: '176xxxx7041', // 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
   *    loginsCount: 2 // 原有用户系统记录的用户登录次数
   *    signedUp: '2020-10-15T17:55:37+08:00' // 原有用户系统记录的用户注册时间
   * })
   *
   * @returns {Promise<User>}
   * @memberof UsersManagementClient
   */
  async create(userInfo: CreateUserInput): Promise<User> {
    if (userInfo && userInfo.password) {
      userInfo.password = encrypt(
        userInfo.password,
        this.options.encrptionPublicKey
      );
    }
    const { createUser: user } = await createUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        userInfo
      }
    );
    return user;
  }

  /**
   * @name update
   * @name_zh 修改用户资料
   * @description 修改用户资料
   *
   * @param {string} id 用户 ID
   * @param {UpdateUserInput} updates 修改的用户资料
   * @param {string} updates.email 邮箱
   * @param {boolean} updates.emailVerified 邮箱是否已验证
   * @param {string} updates.phone 手机号
   * @param {boolean} updates.phoneVerified 手机号是否验证
   * @param {string} updates.unionid 以社会化登录的用户该字段为用户在第三方社会化登录服务商中的唯一 ID
   * @param {string} updates.openid  微信登录返回的 openid
   * @param {string} updates.password 密码
   * @param {string} updates.registerSource 注册来源，可以多选
   * @param {string} updates.tokenExpiredAt token 过期时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")。
   * 将该字段设置为小于当前时间可以让用户的 token 失效。
   * @param {string} updates.username 用户名
   * @param {string} updates.nickname 昵称
   * @param {string} updates.photo 头像
   * @param {string} updates.company 公司
   * @param {string} updates.browser 浏览器
   * @param {number} updates.loginsCount 登录次数，当你从原有用户系统迁移到 Authing 时可以设置该字段。
   * @param {string} updates.lastLogin 上次登录时间, 符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
   * @param {string} updates.lastIP 用户最近一次登录（或其他活动）的 IP
   * @param {string} updates.signedUp 注册时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
   * @param {boolean} updates.blocked 账号是否被禁用
   * @param {string} updates.device 设备
   * @param {string} updates.lastIP 最近登录的 IP
   * @param {string} updates.name Name
   * @param {string} updates.givenName Given Name
   * @param {string} updates.familyName Family Name
   * @param {string} updates.middleName Middle Name
   * @param {string} updates.profile Profile Url
   * @param {string} updates.preferredUsername Preferred Name
   * @param {string} updates.website 个人网站
   * @param {string} updates.gender 性别, F 表示男性、W 表示女性、未知表示 U
   * @param {string} updates.birthdate 生日
   * @param {string} updates.zoneinfo 时区
   * @param {string} updates.locale 语言
   * @param {string} updates.address 地址
   * @param {string} updates.streetAddress 街道地址
   * @param {string} updates.locality
   * @param {string} updates.region 地域
   * @param {string} updates.postalCode 邮编
   * @param {string} updates.city 城市
   * @param {string} updates.province 省份
   * @param {string} updates.country 国家
   *
   * @example
   *
   * const user = await managementClient.users.update("USERID", {
   *    nickname: "Nick"
   * })
   *
   * @example
   *
   * const user = await managementClient.users.update({
   *    nickname: 'Nick',
   *    phone: '176xxxx7041', // 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
   *    tokenExpiredAt: '2020-10-15T17:55:37+08:00'
   * })
   *
   * @returns {Promise<User>}
   * @memberof UsersManagementClient   *
   */
  async update(id: string, updates: UpdateUserInput): Promise<User> {
    if (updates && updates.password) {
      updates.password = encrypt(
        updates.password,
        this.options.encrptionPublicKey
      );
    }
    const { updateUser: user } = await updateUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id,
        input: updates
      }
    );
    return user;
  }

  /**
   * @name detail
   * @name_zh 获取用户详情
   * @description 通过用户 ID 获取用户详情，如果你想通过 token 获取用户详情，请使用 AuthenticationClient SDK 。
   *
   * @param {string} userId 用户 ID
   *
   * @example
   *
   * const user = await management.users.detail('USERID');
   *
   * @returns {Promise<User>}
   * @memberof UsersManagementClient
   */
  async detail(userId: string): Promise<User> {
    const { user: data } = await user(this.graphqlClient, this.tokenProvider, {
      id: userId
    });
    return data;
  }

  /**
   * @name delete
   * @name_zh 删除用户
   * @description 删除用户
   *
   * @param {string} userId 用户 ID
   *
   * @example
   *
   * const user = await management.users.delete('USERID');
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async delete(userId: string): Promise<CommonMessage> {
    const { deleteUser: data } = await deleteUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId
      }
    );
    return data;
  }

  /**
   * @name deleteMany
   * @name_zh 批量删除用户
   * @description 批量删除用户
   *
   * @param {string[]} userIds 用户 ID 列表
   *
   * @example
   *
   * const user = await management.users.deleteMany(['USERID']);
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async deleteMany(userIds: string[]): Promise<CommonMessage> {
    const { deleteUsers: data } = await deleteUsers(
      this.graphqlClient,
      this.tokenProvider,
      {
        ids: userIds
      }
    );
    return data;
  }

  /**
   * @name batch
   * @name_zh 批量获取用户
   * @description 通过 ID 批量获取用户详情
   *
   * @param {string[]} userIds 用户 ID 列表
   *
   * @example
   *
   * const users = await management.users.batch(['USERID']);
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async batch(ids: string[]): Promise<User[]> {
    const { userBatch: data } = await userBatch(
      this.graphqlClient,
      this.tokenProvider,
      {
        ids
      }
    );
    return data;
  }

  /**
   * @name list
   * @name_zh 获取用户列表
   * @description 获取用户池用户列表
   *
   * @param {number} [page=1] 页码数, 从 1 开始
   * @param {number} [limit=1] 每页包含的用户数
   *
   * @example
   *
   * const user = await management.users.list();
   *
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page: number = 1, limit: number = 1) {
    const { users: data } = await users(
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
   * @name exists
   * @name_zh 检查用户是否存在
   * @description 检查用户是否存在
   *
   * @param {Object} options
   * @param {string} [options.username] 用户名
   * @param {string} [options.email] 邮箱
   * @param {string} [options.phone] 手机号
   *
   * @example
   *
   * const exists = await management.users.exists({
   *    username: "bob"
   * });
   *
   * @returns {Promise<boolean>}
   * @memberof UsersManagementClient
   */
  async exists(options: {
    username?: string;
    email?: string;
    phone?: string;
  }): Promise<boolean> {
    const { username, email, phone } = options;
    const { isUserExists: data } = await isUserExists(
      this.graphqlClient,
      this.tokenProvider,
      {
        username,
        email,
        phone
      }
    );
    return data;
  }

  /**
   * @name search
   * @name_zh 搜索用户
   * @description 根据关键字搜索用户
   *
   * @param query 搜索内容
   * @param options 选项
   */
  async search(
    query: string,
    options?: { fields?: string[]; page?: number; limit?: number }
  ): Promise<PaginatedUsers> {
    const { searchUser: users } = await searchUser(
      this.graphqlClient,
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
      this.graphqlClient,
      this.tokenProvider,
      {
        id
      }
    );
    return data;
  }

  /**
   * @description 获取用户的分组列表
   *
   */
  async listGroups(userId: string, page: number = 1, limit: number = 10) {
    const { groups } = await getGroupsOfUser(
      this.graphqlClient,
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
  async listRoles(userId: string) {
    const {
      user: { roles }
    } = await getUserRoles(this.graphqlClient, this.tokenProvider, {
      id: userId
    });
    return roles;
  }

  /**
   * @description 添加角色
   *
   */
  async addRoles(userId: string, roles: string[]) {
    const { assignRole: data } = await assignRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId]
      }
    );
    return data;
  }

  /**
   * @description 移除角色
   *
   */
  async removeRoles(userId: string, roles: string[]) {
    const { revokeRole: data } = await revokeRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId]
      }
    );
    return data;
  }
}
