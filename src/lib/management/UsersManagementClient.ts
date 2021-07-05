import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import {
  Application,
  BatchFetchUserTypes,
  ManagementClientOptions,
  UserActions
} from './types';
import {
  deleteUser,
  deleteUsers,
  users,
  getUserGroups,
  updateUser,
  searchUser,
  createUser,
  refreshToken,
  getUserRoles,
  assignRole,
  revokeRole,
  isUserExists,
  addUserToGroup,
  removeUserFromGroup,
  archivedUsers,
  findUser,
  getUserDepartments,
  listUserAuthorizedResources,
  udv,
  udfValueBatch,
  setUdvBatch,
  removeUdv,
  setUdfValueBatch,
  usersWithCustomData,
  findUserWithCustomData,
  searchUserWithCustomData,
  sendFirstLoginVerifyEmail
} from '../graphqlapi';
import {
  User,
  PaginatedUsers,
  CreateUserInput,
  RefreshToken,
  CommonMessage,
  UpdateUserInput,
  PaginatedGroups,
  PaginatedRoles,
  PaginatedAuthorizedResources,
  UdfTargetType,
  SetUdfValueBatchInput,
  ResourceType,
  QuerySearchUserArgs
} from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';
import { DeepPartial, KeyValuePair } from '../../types/index';
import { PublicKeyManager } from '../common/PublicKeyManager';
import { convertUdvToKeyValuePair, formatAuthorizedResources } from '../utils';

/**
 * @name UsersManagementClient
 * @description Authing 用户管理模块。
 *
 * 此模块可以进行用户目录增删改查、搜索用户、刷新用户 token、管理用户分组、管理用户角色、管理用户策略授权等操作。
 *
 * 该模块发出的所有操作都将以管理员身份进行，所以不需要进行建议短信验证码等操作，如果你希望以普通用户的身份进行操作，请使用 AuthenticationClient 。
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
 *
 * managementClient.users.list // 获取用户列表
 * managementClient.users.create // 创建用户
 * managementClient.users.listRoles // 获取用户角色列表
 * managementClient.users.search // 搜索用户
 * \`\`\`
 *
 * @class UsersManagementClient 管理用户
 */
export class UsersManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;
  publickKeyManager: PublicKeyManager;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider,
    publickKeyManager: PublicKeyManager
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
    this.publickKeyManager = publickKeyManager;
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
  async create(
    userInfo: CreateUserInput,
    options?: {
      keepPassword?: boolean;
      resetPasswordOnFirstLogin?: boolean;
      identity?: {
        provider: string;
        userIdInIdp: string;
        openid?: string;
        isSocial?: boolean;
        connectionId?: string;
        accessToken?: string;
        refreshToken?: string;
      }
    },
  ): Promise<User> {
    const { keepPassword = false, resetPasswordOnFirstLogin = false, identity } =
      options || {};
    if (userInfo?.password) {
      userInfo.password = await this.options.encryptFunction(
        userInfo.password,
        await this.publickKeyManager.getPublicKey()
      );
    }
    const { createUser: user } = await createUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        userInfo,
        keepPassword,
        resetPasswordOnFirstLogin,
        identity
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
   * const user = await managementClient.users.update("USERID" ,{
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
      updates.password = await this.options.encryptFunction(
        updates.password,
        await this.publickKeyManager.getPublicKey()
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
   * const user = await managementClient.users.detail('USERID');
   *
   * @returns {Promise<User>}
   * @memberof UsersManagementClient
   */
  async detail(
    userId: string,
    options?: {
      withCustomData?: boolean;
    }
  ): Promise<User> {
    const { withCustomData = false } = options || {};
    const data = await this.httpClient.request({
      url: `${this.options.host}/api/v2/users/${userId}`,
      params: { with_custom_data: withCustomData },
      method: 'GET',
    });
    if (withCustomData) {
      // @ts-ignore
      data.customData = convertUdvToKeyValuePair(data.customData);
      return data;
    }
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
   * const user = await managementClient.users.delete('USERID');
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
   * const user = await managementClient.users.deleteMany(['USERID']);
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
   * @description 通过 ID、username、email、phone、email、externalId 批量获取用户详情
   *
   * @param {string[]} identifiers 需要查询的数据列表，如 用户 ID 列表
   * @param {string} [type] 列表类型，可选值为 'id' ,'username' ,'phone' ,'email', 'externalId'，默认为 'id'
   *
   * @example
   *
   * const users = await managementClient.users.batch(['USERID'], options);
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async batch(
    ids: string[],
    options?: {
      queryField: BatchFetchUserTypes;
      withCustomData?: boolean;
    }
  ): Promise<User[]> {
    const { queryField = 'id', withCustomData = false } = options || {};
    const users: User []  = await this.httpClient.request({
      url: `${this.options.host}/api/v2/users/batch`,
      method: 'POST',
      data: {
        ids,
        type: queryField,
        withCustomData
      }
    });
    if (withCustomData) {
      users.map(user => {
        // @ts-ignore
        user.customData = convertUdvToKeyValuePair(user.customData);
        return user;
      });
      return users;
    }
    return users;
  }

  /**
   * @name list
   * @name_zh 获取用户列表
   * @description 获取用户池用户列表
   *
   * @param {number} [page=1] 页码数, 从 1 开始
   * @param {number} [limit=10] 每页包含的用户数
   *
   * @example
   *
   * const user = await managementClient.users.list();
   *
   * @returns
   * @memberof UsersManagementClient
   */
  async list(
    page: number = 1,
    limit: number = 10,
    options?: {
      withCustomData?: boolean;
      excludeUsersInOrg?: boolean;
    }
  ) {
    const { withCustomData = false, excludeUsersInOrg = false } = options || {};
    if (withCustomData) {
      const { users: data } = await usersWithCustomData(
        this.graphqlClient,
        this.tokenProvider,
        {
          page,
          limit,
          excludeUsersInOrg
        }
      );
      let { totalCount, list } = data;
      list = list.map(user => {
        // @ts-ignore
        user.customData = convertUdvToKeyValuePair(user.customData);
        return user;
      });
      return {
        totalCount,
        list
      };
    } else {
      const { users: data } = await users(
        this.graphqlClient,
        this.tokenProvider,
        {
          page,
          limit,
          excludeUsersInOrg
        }
      );
      return data;
    }
  }

  /**
   * @name listArchivedUsers
   * @name_zh 获取已归档用户列表
   * @description 获取已归档用户列表
   *
   * @param {number} [page=1] 页码数, 从 1 开始
   * @param {number} [limit=10] 每页包含的用户数
   *
   * @example
   *
   * const user = await managementClient.users.listArchivedUsers();
   *
   * @returns
   * @memberof UsersManagementClient
   */
  async listArchivedUsers(page: number = 1, limit: number = 10) {
    const { archivedUsers: data } = await archivedUsers(
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
   * @description 检查用户是否存在，目前可检测的字段有用户名、邮箱、手机号。
   *
   *
   * @param {Object} options
   * @param {string} [options.username] 用户名，区分大小写。
   * @param {string} [options.email] 邮箱，邮箱不区分大小写。
   * @param {string} [options.phone] 手机号
   *
   * @example
   *
   * const exists = await managementClient.users.exists({
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
    externalId?: string;
  }): Promise<boolean> {
    const { username, email, phone, externalId } = options;
    const { isUserExists: data } = await isUserExists(
      this.graphqlClient,
      this.tokenProvider,
      {
        username,
        email,
        phone,
        externalId
      }
    );
    return data;
  }

  /**
   * @name find
   * @name_zh 查找用户
   * @description 通过用户名、邮箱、手机号查找用户
   *
   * @param {Object} options
   * @param {string} [options.username] 用户名，区分大小写。
   * @param {string} [options.email] 邮箱，邮箱不区分大小写。
   * @param {string} [options.phone] 手机号
   * @param {string} [options.externalId] externalId
   *
   * @memberof UsersManagementClient
   */
  async find(options: {
    username?: string;
    email?: string;
    phone?: string;
    externalId?: string;
    withCustomData?: boolean;
    identity?: {
      userIdInIdp: string;
      provider: string;
    }
  }) {
    const {
      username,
      email,
      phone,
      externalId,
      withCustomData = false,
      identity
    } = options;

    if (withCustomData) {
      const { findUser: user } = await findUserWithCustomData(
        this.graphqlClient,
        this.tokenProvider,
        {
          username,
          email,
          phone,
          externalId
        }
      );
      // @ts-ignore
      user.customData = convertUdvToKeyValuePair(user.customData);
      return user;
    } else {
      const { findUser: user } = await findUser(
        this.graphqlClient,
        this.tokenProvider,
        {
          username,
          email,
          phone,
          externalId,
          identity
        }
      );
      return user;
    }
  }

  /**
   * @name search
   * @name_zh 搜索用户
   * @description 根据关键字搜索用户
   *
   * @param query 搜索内容
   * @param options 选项
   * @param {string[]} [options.fields] 搜索用户字段，如果不指定，默认会从 username、nickname、email、phone、company、name、givenName、familyName、middleName、profile、preferredUsername 这些字段进行模糊搜索。
   * 如果你需要精确查找，请使用 find 方法。
   * @param {number} [options.page=1]
   * @param {number} [options.limit=10]
   * @param {Object} [options.departmentOpts] 限制条件，用户所在的部门
   * @param {string} [options.departmentOpts.departmentId] 部门 ID
   * @param {string} [options.departmentOpts.includeChildrenDepartments] 是否包含此部门的子部门
   *
   * @example
   *
   * const { totalCount, list } = await managementClient.users.search("Bob");
   *
   * @returns {Promise<PaginatedUsers>}
   * @memberof UsersManagementClient
   */
  async search(
    query: string,
    options?: {
      fields?: string[];
      page?: number;
      limit?: number;
      // 所在的部门 ID 列表
      departmentOpts?: QuerySearchUserArgs['departmentOpts'];
      groupOpts?: QuerySearchUserArgs['groupOpts'];
      roleOpts?: QuerySearchUserArgs['roleOpts'];
      withCustomData?: boolean;
    }
  ): Promise<PaginatedUsers> {
    options = options || {};
    const {
      fields,
      page = 1,
      limit = 10,
      departmentOpts,
      groupOpts,
      roleOpts,
      withCustomData = false
    } = options;

    if (!withCustomData) {
      const { searchUser: data } = await searchUser(
        this.graphqlClient,
        this.tokenProvider,
        {
          query,
          fields,
          page,
          limit,
          departmentOpts,
          groupOpts,
          roleOpts
        }
      );
      return data;
    } else {
      const { searchUser: data } = await searchUserWithCustomData(
        this.graphqlClient,
        this.tokenProvider,
        {
          query,
          fields,
          page,
          limit,
          departmentOpts,
          groupOpts,
          roleOpts
        }
      );
      let { totalCount, list } = data;
      list = list.map(user => {
        // @ts-ignore
        user.customData = convertUdvToKeyValuePair(user.customData);
        return user;
      });
      return {
        totalCount,
        list
      };
    }
  }

  /**
   * @name refreshToken
   * @name_zh 刷新用户 token
   * @description 刷新用户 token
   *
   * @param {string} id 用户 ID
   *
   * @example
   *
   * const { token } = await managementClient.users.refreshToken("USERID");
   *
   * // 检测 token 的最新状态，能够获取到该用户对应的 token
   *
   * const data = await managementClient.checkLoginStatus(token, {
   *   fetchUserDetail: true
   * });
   *
   * @returns {Promise<RefreshToken>}
   * @memberof UsersManagementClient
   */
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
   * @name listGroups
   * @name_zh 获取用户分组列表
   * @description 获取用户的分组列表
   *
   * @param {string} userId 用户 ID
   *
   * @example
   *
   * const { list, totalCount} = await managementClient.users.listGroups("USERID");
   *
   * @returns {Promise<DeepPartial<PaginatedGroups>>}
   * @memberof UsersManagementClient
   */
  async listGroups(userId: string): Promise<DeepPartial<PaginatedGroups>> {
    const { user } = await getUserGroups(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId
      }
    );
    return user.groups;
  }

  /**
   * @name addGroup
   * @name_zh 加入分组
   * @description 将用户加入分组
   *
   * @param {string} userId 用户 ID
   * @param {string} group 分组 code
   *
   * @example
   *
   * const { code, message } = await managementClient.users.addGroup("USERID", "GROUP_CODE");
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async addGroup(userId: string, group: string): Promise<CommonMessage> {
    const res = await addUserToGroup(this.graphqlClient, this.tokenProvider, {
      userIds: [userId],
      code: group
    });
    return res.addUserToGroup;
  }

  /**
   * @name removeGroup
   * @name_zh 退出分组
   * @description 退出分组
   *
   * @param {string} userId 用户 ID
   * @param {string} group 分组 code
   *
   * @example
   *
   * const { code, message } = await managementClient.users.removeGroup("USERID", "GROUP_CODE");
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async removeGroup(userId: string, group: string): Promise<CommonMessage> {
    const res = await removeUserFromGroup(
      this.graphqlClient,
      this.tokenProvider,
      {
        code: group,
        userIds: [userId]
      }
    );
    return res.removeUserFromGroup;
  }

  /**
   * @name listRoles
   * @name_zh 获取用户角色列表
   * @description 获取用户的角色列表
   *
   * @param {string} userId 用户 ID
   * @param {string} namespace 权限组命名空间
   *
   * @example
   *
   * const { list, totalCount} = await managementClient.users.listRoles("USERID");
   *
   * @returns {Promise<DeepPartial<PaginatedRoles>>}
   * @memberof UsersManagementClient
   */
  async listRoles(
    userId: string,
    namespace?: string
  ): Promise<DeepPartial<PaginatedRoles>> {
    const { user } = await getUserRoles(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId,
        namespace
      }
    );
    if (!user) {
      throw new Error('用户不存在！');
    }
    return user.roles;
  }

  /**
   * @name addRoles
   * @name_zh 添加角色
   * @description 将用户加入角色
   *
   * @param {string} userId 用户 ID
   * @param {string} roles 角色 code 列表
   * @param {string} namespace 权限组命名空间
   *
   * @example
   *
   * const { code, message } = await managementClient.users.addRoles("USERID", ["ROLEA"]);
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async addRoles(
    userId: string,
    roles: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const { assignRole: data } = await assignRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId],
        namespace
      }
    );
    return data;
  }

  /**
   * @name removeRoles
   * @name_zh 移除角色
   * @description 将用户从角色中移除
   *
   * @param {string} userId 用户 ID
   * @param {string} roles 角色 code 列表
   * @param {string} namespace 权限分组 code
   *
   * @example
   *
   * const { code, message } = await managementClient.users.removeRoles("USERID", ["ROLEA"]);
   *
   * @returns {Promise<CommonMessage>}
   * @memberof UsersManagementClient
   */
  async removeRoles(
    userId: string,
    roles: string[],
    namespace?: string
  ): Promise<CommonMessage> {
    const { revokeRole: data } = await revokeRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId],
        namespace
      }
    );
    return data;
  }

  /**
   * @name listOrg
   * @name_zh 获取用户所在组织机构
   * @description 获取用户所在组织机构，以及他在该组织机构内的的节点路径。
   *
   * @param {string} userId 用户 ID
   *
   * @example
   *
   * const data = await managementClient.users.listOrgs("USERID");
   *
   * @returns {Promise<UserOrgList>}
   *
   * @memberof UsersManagementClient
   */
  async listOrgs(userId: string) {
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/users/${userId}/orgs`
    });
  }

  /**
   * @name listDepartment
   * @name_zh 获取用户所在部门
   * @description 获取用户所在部门列表
   *
   * @param {string} userId 用户 ID
   *
   * @example
   *
   * const data = await managementClient.users.listDepartment("USERID");
   *
   * @returns {Promise<UserDepartmentList>}
   *
   * @memberof UsersManagementClient
   */
  async listDepartment(userId: string) {
    const {
      user: { departments }
    } = await getUserDepartments(this.graphqlClient, this.tokenProvider, {
      id: userId
    });
    return departments;
  }

  /**
   * @description 获取用户被授权的所有资源
   *
   * @param userId
   * @param namespace
   */
  public async listAuthorizedResources(
    userId: string,
    namespace: string,
    options?: {
      resourceType?: ResourceType;
    }
  ): Promise<PaginatedAuthorizedResources> {
    const { resourceType } = options || {};
    const { user } = await listUserAuthorizedResources(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId,
        namespace,
        resourceType
      }
    );
    if (!user) {
      throw new Error('用户不存在');
    }
    let {
      authorizedResources: { list, totalCount }
    } = user;
    list = formatAuthorizedResources(list);
    return {
      list,
      totalCount
    };
  }

  /**
   * @description 获取某个用户的所有自定义数据
   * @param userId: 用户 ID
   *
   */
  public async getUdfValue(userId: string) {
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId
    });
    return convertUdvToKeyValuePair(list);
  }

  /**
   * @description 批量获取多个用户的自定义数据
   *
   * @param userIds: 用户 ID 列表
   */
  public async getUdfValueBatch(
    userIds: string[]
  ): Promise<{ [x: string]: KeyValuePair }> {
    if (userIds.length === 0) {
      throw new Error('empty user id list');
    }
    const { udfValueBatch: result } = await udfValueBatch(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.User,
        targetIds: userIds
      }
    );
    let ret: { [x: string]: KeyValuePair } = {};
    for (const { targetId, data } of result) {
      ret[targetId] = convertUdvToKeyValuePair(data);
    }
    return ret;
  }

  /**
   * @description 设置某个用户的自定义数据
   *
   * @param userId
   * @param data
   */
  public async setUdfValue(userId: string, data: KeyValuePair) {
    if (Object.keys(data).length === 0) {
      throw new Error('empty udf value list');
    }
    await setUdvBatch(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId,
      udvList: Object.keys(data).map(key => ({
        key,
        value: JSON.stringify(data[key])
      }))
    });
  }

  /**
   * @description 批量设置自定义数据
   *
   */
  public async setUdfValueBatch(
    input: { userId: string; data: KeyValuePair }[]
  ) {
    if (input.length === 0) {
      throw new Error('empty input list');
    }
    const params: SetUdfValueBatchInput[] = [];
    input.forEach(({ userId, data }) => {
      for (const key of Object.keys(data)) {
        params.push({
          targetId: userId,
          key,
          value: JSON.stringify(data[key])
        });
      }
    });
    await setUdfValueBatch(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      input: params
    });
  }

  /**
   * @description 清除用户的自定义数据
   *
   */
  public async removeUdfValue(userId: string, key: string) {
    await removeUdv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId,
      key
    });
  }

  /**
   * 判断用户是否有某个角色
   * @param userId 用户 ID
   * @param roleCode 角色 Code
   * @param namespace 权限分组 ID
   */
  public async hasRole(
    userId: string,
    roleCode: string,
    namespace?: string
  ): Promise<boolean> {
    const roleList = await this.listRoles(userId, namespace);

    if (roleList.totalCount < 1) {
      return false;
    }

    let hasRole: boolean = false;

    roleList.list.forEach(item => {
      if (item.code === roleCode) {
        hasRole = true;
      }
    });

    return hasRole;
  }
  /**
   * @description 强制一批用户下线
   */
  async kick(userIds: string[]) {
    await this.httpClient.request({
      url: `${this.options.host}/api/v2/users/kick`,
      method: 'POST',
      data: {
        userIds
      }
    });
    return { code: 200, message: '强制下线成功' };
  }

  async logout(options: { appId?: string; userId: string }) {
    if (!options || !options.userId) {
      throw new Error('请传入 options.userId，内容为要下线的用户 ID');
    }
    await this.httpClient.request({
      url: `${this.options.host}/logout`,
      method: 'GET',
      params: {
        appId: options.appId,
        userId: options.userId
      }
    });
    return { code: 200, message: '强制下线成功' };
  }

  /**
   * @description 查询用户的登录状态
   */
  async checkLoginStatus(
    userId: string,
    appId?: string,
    deviceId?: string
  ): Promise<{
    isLogin: boolean;
    user?: User;
    application?: Array<Application>;
  }> {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/users/login-status`,
      params: {
        userId,
        appId,
        deviceId
      }
    });
    return result;
  }
  /**
   * 审计日志列表
   * @param options.page 当前页数
   * @param options.limit 每页显示条数
   * @param options.clientIp 客户端 IP 地址
   * @param options.operationName 操作类型
   * @param options.operatoArn 用户 Arn 通过 searchUser 方法获得
   * @returns Promise<UserActions>
   */
  public async listUserActions(
    options: {
      clientIp?: string;
      operationNames?: string[];
      userIds?: string[];
      page?: number;
      limit?: number;
      excludeNonAppRecords?: boolean;
      appIds?: string[];
      start?: number;
      end?: number;
    } = {
        page: 1,
        limit: 10
      }
  ): Promise<UserActions> {
    let requestParam: any = {};
    if (options?.clientIp) {
      requestParam.clientip = options.clientIp;
    }
    if (options?.operationNames) {
      requestParam.operation_name = options.operationNames;
    }
    if (options?.userIds?.length) {
      requestParam.operator_arn = options.userIds.map(userId => {
        return `arn:cn:authing:${this.options.userPoolId}:user:${userId}`;
      });
    }
    if (options?.page) {
      requestParam.page = options.page;
    }
    if (options?.limit) {
      requestParam.limit = options.limit;
    }
    if (options?.excludeNonAppRecords) {
      requestParam.exclude_non_app_records = '1';
    }
    if (options?.appIds) {
      requestParam.app_id = options?.appIds;
    }
    if (options?.start !== undefined) {
      requestParam.start = options?.start;
    }
    if (options?.end !== undefined) {
      requestParam.end = options?.end;
    }
    const result: any = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/analysis/user-action`,
      params: { ...requestParam }
    });
    const { list, totalCount } = result;
    return {
      list: list.map((log: any) => {
        return {
          userpoolId: log.userpool_id,
          userId: log.user?.id,
          username: log.user?.displayName,
          cityName: log.geoip?.city_name,
          regionName: log.geoip?.region_name,
          clientIp: log.geoip?.ip,
          operationDesc: log.operation_desc,
          operationName: log.operation_name,
          timestamp: log.timestamp,
          appId: log.app_id,
          appName: log.app?.name
        };
      }),
      totalCount
    };
  }

  /**
   * @description 发送首次登录验证邮件
   *
   */
  public async sendFirstLoginVerifyEmail(options: {
    appId: string;
    userId: string;
  }) {
    await sendFirstLoginVerifyEmail(
      this.graphqlClient,
      this.tokenProvider,
      options
    );
    return true;
  }
}
