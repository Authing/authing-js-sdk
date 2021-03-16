import { GraphqlClient } from '../common/GraphqlClient';
import { HttpClient } from '../common/HttpClient';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';

/**
 * 初始化 AuthenticationClientOptions 的参数
 */
export interface AuthenticationClientOptions {
  /** 用户池 ID **/
  userPoolId?: string;
  /** 应用 ID */
  appId?: string;
  /** 应用密钥 */
  secret?: string;
  /** 应用身份协议 */
  protocol?: 'oauth' | 'oidc' | 'cas';
  /** 获取 token 端点认证方式 */
  tokenEndPointAuthMethod?: 'client_secret_post' | 'client_secret_basic' | 'none';
  /** 检查 token 端点认证方式 */
  introspectionEndPointAuthMethod?: 'client_secret_post' | 'client_secret_basic' | 'none';
  /** 撤回 token 端点认证方式 */
  revocationEndPointAuthMethod?: 'client_secret_post' | 'client_secret_basic' | 'none';
  /** 应用回调地址 */
  redirectUri?: string;
  /** 请求超时时间 **/
  timeout?: number;
  /** 错误回调函数, 默认为 (err: Error) => { throw err } 直接抛出报错 **/
  onError?: (code: number, message: string, data?: any) => void;
  /** Authing 服务器地址 */
  host?: string;
  /** Websocket 服务器域名 */
  websocketHost?: string;
  /** 请求来源 */
  requestFrom?: string;
  /** token */
  token?: string;
  /** 加密函数 */
  encryptFunction?: (plainText: string, publicKey: string) => Promise<string>;
  /** 密码传输加密公钥 */
  publicKey?: string;
  httpClient?: typeof HttpClient;
  graphqlClient?: typeof GraphqlClient;
  tokenProvider?: typeof AuthenticationTokenProvider;
}

export interface CheckLoginStatusRes {
  status: boolean;
  code: number;
  message: string;
  token: {
    data: {
      email?: string;
      id: string;
      clientId?: string;
      unionid?: string;
    };
    iat: number;
    exp: number;
  };
}

export interface QRCodeUserInfo {
  nickname: string;
  photo: string;
  id?: string;
  email?: string;
  emailVerified?: boolean;
  unionid?: string;
  openid?: string;
  oauth?: string;
  registerMethod?: string;
  username?: string;
  company?: string;
  token?: string;
  phone?: string;
  tokenExpiredAt?: string;
  loginsCount?: number;
  lastIP?: string;
  signedUp?: string;
  blocked?: boolean;
  isDeleted?: boolean;
}

export interface QRCodeStatus {
  random: string;
  /** 二维码状态: 0 - 未使用, 1 - 已扫码, 2 - 已授权, 3 - 取消授权, -1 - 已过期 */
  status: number;
  ticket?: string;
  userInfo?: QRCodeUserInfo;
}

export interface QRCodeGenarateResult {
  random: string;
  url: string;
}

export type IMfaAuthenticators = Array<{
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  enable: boolean;
  secret: string;
  authenticatorType: string;
  recoveryCode: string;
}>;

export type IMfaAssociation = {
  authenticator_type: string;
  secret: string; // MFA Secret 可用于手动添加 MFA
  qrcode_uri: string;
  // MFA 二维码 Data Url，用于放在 <img> src 中展示二维码
  qrcode_data_url: string;
  // 恢复代码
  recovery_code: string;
};

export type IMfaConfirmAssociation = {
  code: number;
  message: string;
};

export type IMfaDeleteAssociation = {
  code: number;
  message: string;
};

/**
 * 密码安全等级
 */
export enum PasswordSecurityLevel {
  LOW = 1,
  MIDDLE = 2,
  HIGH = 3
}
export interface SecurityLevel {
  // 是否绑定了邮箱
  email: boolean;
  // 是否绑定了个人 MFA
  mfa: boolean;
  // 是否设置了密码
  password: boolean;
  // 是否绑定了手机号
  phone: boolean;
  // 密码安全等级，null 表示密码还未做过安全等级检测检测
  passwordSecurityLevel: PasswordSecurityLevel | null;
  // 账户的总体安全等级评分
  score: number;
}

export enum SocialConnectionProvider {
  ALIPAY = 'alipay',
  GOOGLE = 'google',
  WECHATPC = 'wechat:pc', // 微信扫码登录
  WECHATMP = 'wechat:webpage-authorization', // 微信公众号网页授权
  WECHAT_MINIPROGRAM = 'wechat:miniprogram:default', // 微信小程序登录
  WECHAT_MINIPROGRAM_QRCODE = 'wechat:miniprogram:qrconnect', // 微信小程序登录
  WECHAT_MINIPROGRAM_APPLAUNCH = 'wechat:miniprogram:app-launch', // 微信小程序登录
  WECHATMOBILE = 'wechat:mobile', // 微信移动应用
  GITHUB = 'github',
  QQ = 'qq',
  WECHATWORK_ADDRESS_BOOK = 'wechatwork:addressbook', // 企业微信通讯录
  WECHATWORK_CORP_QRCONNECT = 'wechatwork:corp:qrconnect',
  WECHATWORK_SERVICEPROVIDER_QRCONNECT = 'wechatwork:service-provider:qrconnect',
  DINGTALK = 'dingtalk',
  WEIBO = 'weibo',
  APPLE = 'apple',
  APPLE_WEB = 'apple:web',
  OAUTH = 'oauth'
}

export enum Protocol {
  OIDC = 'oidc',
  OAUTH = 'oauth',
  SAML = 'saml',
  CAS = 'cas',
  AZURE_AD = 'azure-ad'
}
