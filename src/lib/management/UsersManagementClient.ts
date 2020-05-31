import { createUserWithoutAuthentication } from './../graphqlapi/management.users.createUserWithoutAuthentication';
import { passwordLessForceLogin } from './../graphqlapi/management.users.passwordLessForceLogin';
import { interConnections } from './../graphqlapi/management.users.interConnections';
import { removeUsers } from './../graphqlapi/management.users.delete';
import { user } from './../graphqlapi/management.users.get';
import { PagedUsers, ExtendUser, User } from './../../types/graphql';
import { users } from './../graphqlapi/management.users.list';
import { register } from './../graphqlapi/management.users.create';
import { GraphqlClient } from './../common/GraphqlClient';
import { encrypt } from './../utils/encryption';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/graphql';
import { createInterConnection } from '../graphqlapi/management.users.createInterConnection';

export class UsersManagementClient {
  options: ManagementClientOptions
  graphqlClient: GraphqlClient
  tokenProvider: ManagementTokenProvider

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider) {
    this.options = options
    this.graphqlClient = graphqlClient
    this.tokenProvider = tokenProvider
  }

  /**
   * 删除用户
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async delete(userId: string) {
    const res: any = await removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: [userId] })
    return res.removeUsers
  }


  /**
   * 批量删除用户
   *
   * @param {string[]} userIds
   * @returns
   * @memberof UsersManagementClient
   */
  async deleteMany(userIds: string[]) {
    const res: any = await removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: userIds })
    return res.removeUsers
  }

  /**
   * 获取用户详情
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async get(userId: string): Promise<ExtendUser> {
    const res: any = await user(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, id: userId })
    return res.user
  }

  /**
   * page: 页码数, 从 0 开始
   *
   * @param {{ page: number, count: number }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page?: number, count?: number): Promise<PagedUsers> {
    page = page || 0
    count = count || 10
    const res: any = await users(this.graphqlClient, this.tokenProvider, Object.assign({}, { page, count }, { registerInClient: this.options.userPoolId }))
    return res.users
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
  async create(options: {
    userInfo: UserRegisterInput,
    invitationCode?: string,
    keepPassword?: boolean
  }): Promise<ExtendUser> {

    let { userInfo } = options
    options.invitationCode = options.invitationCode || ""
    options.keepPassword = options.keepPassword || false

    if (!userInfo.phone && !userInfo.email && !userInfo.username && !userInfo.unionid) {
      this.options.onError(new Error("Please provide at least phone, email, username or unionid"))
    }

    if (options.userInfo.password) {
      options.userInfo.password = encrypt(options.userInfo.password, this.options.encrptionPublicKey)
    }
    userInfo.registerInClient = this.options.userPoolId
    const data: any = await register(this.graphqlClient, this.tokenProvider, options)
    return data.register
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
    sourceUserPoolId: string,
    sourceUserId: string,
    targetUserPoolId: string,
    targetUserId: string,
    maxAge: number
  }) {
    const res = await createInterConnection(this.graphqlClient, this.tokenProvider, options)
    return res.createInterConnection
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
    })
    return res.interConnections
  }

  /**
   * 管理员让用户强制登录，无需检测任何账号密码、验证码
   *
   * @memberof UsersManagementClient
   */
  async passwordLessForceLogin(userId: string) {
    const res = await passwordLessForceLogin(this.graphqlClient, this.tokenProvider, {
      userPoolId: this.options.userPoolId,
      userId
    })
    return res.passwordLessForceLogin
  }

  /**
   *
   *
   * @memberof UsersManagementClient
   */
  async createUserWithoutAuthentication(userInfo: UserRegisterInput, forceLogin?: boolean): Promise<User> {
    forceLogin = forceLogin || false
    const res = await createUserWithoutAuthentication(this.graphqlClient, this.tokenProvider, {
      userPoolId: this.options.userPoolId,
      userInfo,
      forceLogin
    })
    return res.createUserWithoutAuthentication
  }
}
