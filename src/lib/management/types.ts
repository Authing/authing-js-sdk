/**
 * 初始化 Authing SDK 的参数，secret 和 accessToken 必须传其中一个。
 */
export interface ManagementClientOptions {
  /** 用户池 ID **/
  userPoolId: string,
  /** 用户池密钥 **/
  secret?: string,
  /** 用户池 accessToken，如果传入，请注意 token 过期状态，你需要自己维护此 Token 的状态，SDK 不会自动更新  **/
  accessToken?: string,
  /** 请求超时时间 **/
  timeout?: number,
  /** 错误回调函数, 默认为 (err: Error) => { throw err } 直接抛出报错 **/
  onError?: (err: Error) => void,
  encrptionPublicKey?: string,
  host?: {
    graphqlApiEndpoint: string,
    restApiBaseHost: string
  }
}

/**
 * Decode 过后的用户池 accessToken
 */
export interface DecodedAccessToken {
  /** 签发时间 **/
  iat: number
  /** 过期时间 **/
  exp: number
  data: {
    /** 用户池管理员邮箱 **/
    email: string,
    /** 用户池管理员用户 ID **/
    id: string
  }
}

/**
 *
 * Authing 分组
 * @export
 * @interface AuthingGroup
 */
export interface AuthingGroup {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}