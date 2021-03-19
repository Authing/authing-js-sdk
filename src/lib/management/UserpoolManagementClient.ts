import { ManagementClientOptions } from './types';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { updateUserpool } from '../graphqlapi';
import { UpdateUserpoolInput, UserPool } from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';

/**
 * @name UserPoolManagementClient
 * @description Authing 用户池配置管理模块。
 *
 * 此模块可以通过使用 API 管理用户池配置，以及管理环境变量（详细文档请见）。
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
 * managementClient.userpool.detail // 获取用户池配置
 * managementClient.userpool.update // 修改用户池配置
 * managementClient.userpool.env // 获取用户池配置的环境变量列表
 * \`\`\`
 *
 * @class UsersManagementClient 管理用户池配置
 */
export class UserPoolManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;
  httpClient: HttpClient;

  constructor(
    options: ManagementClientOptions,
    httpClient: HttpClient,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**@name detail
   * @name_zh 查询用户池配置
   * @description 查询用户池配置
   *
   * @example
   *
   * const userpool = await managementClient.userpool.detail()
   *
   * @returns {Promise<UserPool>}
   * @memberof UserPoolManagementClient
   */
  async detail(): Promise<UserPool> {
    const userPool = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/userpools/detail`
    });

    return userPool;
  }

  /**
   * @name update
   * @name_zh 更新用户池配置
   * @description 更新用户池配置
   *
   * @param {UpdateUserpoolInput} updates
   * @param {string} [updates.name] 用户池名称
   * @param {string} [updates.logo] 用户池 logo
   * @param {string} [updates.domain] 用户池企业应用面板二级域名
   * @param {string} [updates.description] 描述信息
   * @param {boolean} [updates.emailVerifiedDefault] 设置邮箱默认为已验证状态（用户的 emailVerified 字段为 true）
   * @param {boolean} [updates.appSsoEnabled] 开启用户池下的应用之间单点登录
   * @param {boolean} [updates.sendWelcomeEmail] 用户注册之后是否发送欢迎邮件
   * @param {boolean} [updates.registerDisabled] 是否关闭注册，当用户池关闭注册之后，普通用户将无法注册账号，只有管理员能够手动创建账号。
   * @param {string} [updates.allowedOrigins] 安全域配置，安全域（Allowed Origins） 是允许从 JavaScript 向 Authing API 发出请求的 URL（通常与 CORS 一起使用）。 默认情况下，系统会允许你使用所有网址。 如果需要，此字段允许你输入其他来源。 你可以通过逐行分隔多个有效 URL，并在子域级别使用通配符（例如：https://*.sample.com）。
   * 验证这些 URL 时不考虑查询字符串和哈希信息，如果带上了查询字符串和哈希信息系统会自动忽略整个域名。
   * 如果有多条请以换行符分隔。
   * @param {Object} [updates.whitelist] 用户池白名单配置
   * @param {boolean} [updates.whitelist.phoneEnabled] 是否开启手机号白名单
   * @param {boolean} [updates.whitelist.emailEnabled] 是否开启邮箱白名单
   * @param {boolean} [updates.whitelist.usernameEnabled] 是否开启用户名白名单
   * @param {number} [updates.tokenExpiresAfter] token 过期时间
   * @param {Object} [updates.loginFailCheck] 频繁登录失败限制，开启之后，在规定时间内超过次数后再次登录需要验证码。如果你的业务存在同一区域同一时间段并发登录的场景，请将此检测关闭。
   * @param {boolean} [updates.loginFailCheck.enabled] 是否开启
   * @param {number} [updates.loginFailCheck.timeInterval] 检测周期，单位为秒。
   * @param {number} [updates.loginFailCheck.limit] 同一 IP 登录失败次数达到多少次的时候会触发限制条件。
   * @param {Object} [updates.frequentRegisterCheck] 频率注册限制，开启之后同一 IP 频繁注册账号时会触发频率限制，需要等一段时间之后才能重新注册。如果你的业务存在同一区域同一时间段并发注册的场景，请将此检测关闭。
   * @param {boolean} [updates.frequentRegisterCheck.enabled] 是否开启
   * @param {Object} [updates.frequentRegisterCheck.timeInterval] 检测周期，单位为秒。
   * @param {Object} [updates.frequentRegisterCheck.limit] 同一个周期内同一 IP 注册次数达到此数目时会触发频率限制。
   *
   *
   * @example
   *
   * const userpool = await managementClient.userpool.update({
   *    registerDisabled: true // 关闭系统注册
   * })
   *
   * @returns {Promise<UserPool>}
   * @memberof UserPoolManagementClient
   */
  async update(updates: UpdateUserpoolInput): Promise<UserPool> {
    const res = await updateUserpool(this.graphqlClient, this.tokenProvider, {
      input: updates
    });
    return res.updateUserpool;
  }

  /**
   * @name listEnv
   * @name_zh 获取环境变量列表
   * @description 获取用户池环境变量列表。用户池配置的环境变量可以在 pipeline 场景下使用，详情请见：https://docs.authing.co/extensibility/pipeline/env.html
   *
   * @example
   *
   * const envList = await managementClient.userpool.listEnv()
   *
   * @returns {Promise<Env[]>}
   * @memberof UserPoolManagementClient
   */
  async listEnv(): Promise<{ key: string; value: any }[]> {
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/env`
    });
  }

  /**
   * @name addEnv
   * @name_zh 添加环境变量
   * @description 添加环境变量
   *
   * @param {string} key 环境变量键
   * @param {any} value 环境变量值
   *
   * @example
   *
   * const envList = await managementClient.userpool.addEnv('LARK_WEBHOOK', 'xxxxxxx') // 添加一个飞书群机器人 webhook 地址，之后可以在 pipeline 函数中使用（详细请见: https://docs.authing.co/extensibility/pipeline/usage.html）
   *
   * @returns {Promise<Env[]>} 返回最新的环境变量列表
   * @memberof UserPoolManagementClient
   */
  async addEnv(
    key: string,
    value: any
  ): Promise<{ key: string; value: any }[]> {
    return await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/env`,
      data: {
        key,
        value
      }
    });
  }

  /**
   * @name removeEnv
   * @name_zh 删除环境变量
   * @description 删除环境变量
   *
   * @param {string} key 环境变量键
   *
   * @example
   *
   * const envList = await managementClient.userpool.removeEnv('LARK_WEBHOOK')
   *
   * @returns {Promise<Env[]>} 返回最新的环境变量列表
   * @memberof UserPoolManagementClient
   */
  async removeEnv(key: string): Promise<{ key: string; value: any }[]> {
    return await this.httpClient.request({
      method: 'DELETE',
      url: `${this.options.host}/api/v2/env/${key}`
    });
  }
}
