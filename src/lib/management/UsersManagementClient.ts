import { GraphqlClient } from './../common/GraphqlClient';
import { encrypt } from './../utils';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/graphql.v1';
import {
  removeUsers,
  user,
  users,
  register,
  createInterConnection,
  interConnections,
  passwordLessForceLogin,
  createUserWithoutAuthentication
} from '../graphqlapi';

export class UsersManagementClient {
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
    this.graphqlClient = graphqlClient;
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
    const res = await removeUsers(this.graphqlClient, this.tokenProvider, {
      registerInClient: this.options.userPoolId,
      ids: [userId]
    });
    return res.removeUsers;
  }

  /**
   * 批量删除用户
   *
   * @param {string[]} userIds
   * @returns
   * @memberof UsersManagementClient
   */
  async deleteMany(userIds: string[]) {
    const res = await removeUsers(this.graphqlClient, this.tokenProvider, {
      registerInClient: this.options.userPoolId,
      ids: userIds
    });
    return res.removeUsers;
  }

  /**
   * 获取用户详情
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async get(userId: string) {
    const res = await user(this.graphqlClient, this.tokenProvider, {
      registerInClient: this.options.userPoolId,
      id: userId
    });
    return res.user;
  }

  /**
   * page: 页码数, 从 0 开始
   *
   * @param {{ page: number, count: number }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page?: number, count?: number) {
    const { users: data } = await users(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        page,
        count
      }
    );
    return data;
  }

  /**
   *
   * 以管理员身份创建用户
   * @param {{
   *     userInfo: UserRegisterInput,
   *     invitationCode?: string,
   *     keepPassword?: boolean
   *   }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async create(
    userInfo: UserRegisterInput,
    options?: {
      invitationCode?: string;
      keepPassword?: boolean;
    }
  ) {
    options = options || {};
    options.invitationCode = options.invitationCode || '';
    options.keepPassword = options.keepPassword || false;

    if (
      !userInfo.phone &&
      !userInfo.email &&
      !userInfo.username &&
      !userInfo.unionid
    ) {
      this.options.onError(
        new Error('Please provide at least phone, email, username or unionid')
      );
    }

    if (userInfo.password) {
      userInfo.password = encrypt(
        userInfo.password,
        this.options.encrptionPublicKey
      );
    }
    userInfo.registerInClient = this.options.userPoolId;
    const data = await register(this.graphqlClient, this.tokenProvider, {
      userInfo,
      ...options
    });
    return data.register;
  }

  /**
   * 建立跨用户池的用户关联
   *
   * maxAge 单位为 s
   *
   * @param {{
   *     sourceUserPoolId: string,
   *     sourceUserId: string,
   *     targetUserPoolId: string,
   *     targetUserId: string,
   *     maxAge: number
   *   }} options
   * @memberof UsersManagementClient
   */
  async createInterConnection(options: {
    sourceUserPoolId: string;
    sourceUserId: string;
    targetUserPoolId: string;
    targetUserId: string;
    maxAge: number;
  }) {
    const res = await createInterConnection(
      this.graphqlClient,
      this.tokenProvider,
      options
    );
    return res.createInterConnection;
  }

  /**
   * 查询用户池具备的跨用户池关联能力
   *
   * @returns
   * @memberof UsersManagementClient
   */
  async interConnections() {
    const res = await interConnections(this.graphqlClient, this.tokenProvider, {
      userPoolId: this.options.userPoolId
    });
    return res.interConnections;
  }

  /**
   * 管理员让用户强制登录，无需检测任何账号密码、验证码
   *
   * @memberof UsersManagementClient
   */
  async passwordLessForceLogin(userId: string) {
    const res = await passwordLessForceLogin(
      this.graphqlClient,
      this.tokenProvider,
      {
        userPoolId: this.options.userPoolId,
        userId
      }
    );
    return res.passwordLessForceLogin;
  }

  /**
   *
   *
   * @memberof UsersManagementClient
   */
  async createUserWithoutAuthentication(
    userInfo: UserRegisterInput,
    forceLogin?: boolean
  ) {
    forceLogin = forceLogin || false;
    const res = await createUserWithoutAuthentication(
      this.graphqlClient,
      this.tokenProvider,
      {
        userPoolId: this.options.userPoolId,
        userInfo,
        forceLogin
      }
    );
    return res.createUserWithoutAuthentication;
  }
}
