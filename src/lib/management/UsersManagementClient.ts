import { users } from './../graphqlapi/management.users.list';
import { register } from './../graphqlapi/management.users.create';
import { GraphqlClient } from './../common/GraphqlClient';
import { encrypt } from './../utils/encryption';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/graphql';

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
   * page: 页码数, 从 0 开始
   *
   * @param {{ page: number, count: number }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page?: number, count?: number) {
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
  }) {

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
}
