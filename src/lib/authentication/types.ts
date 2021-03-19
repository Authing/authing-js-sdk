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
  protocol?: 'oauth' | 'oidc' | 'saml' | 'cas';
  /** 获取 token 端点认证方式 */
  tokenEndPointAuthMethod?:
    | 'client_secret_post'
    | 'client_secret_basic'
    | 'none';
  /** 检查 token 端点认证方式 */
  introspectionEndPointAuthMethod?:
    | 'client_secret_post'
    | 'client_secret_basic'
    | 'none';
  /** 撤回 token 端点认证方式 */
  revocationEndPointAuthMethod?:
    | 'client_secret_post'
    | 'client_secret_basic'
    | 'none';
  /** 应用回调地址 */
  redirectUri?: string;
  /** 应用认证地址 */
  domain?: string;
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

export enum AppPasswordStrengthLimit {
  NoCheck,
  Low,
  Middle,
  High
}

export enum RegisterMethods {
  Email = 'email',
  Phone = 'phone'
}

export enum LoginMethods {
  LDAP = 'ldap',
  AppQr = 'app-qrcode',
  Password = 'password',
  PhoneCode = 'phone-code',
  WxMinQr = 'wechat-miniprogram-qrcode', // 对应社会化登录的 wechat:miniprogram:qrconnect(小程序扫码登录)
  AD = 'ad' // 对应企业身份源的 Windows AD 登录
}

export interface IOAuthConnectionConfig {
  authEndPoint: string;
  tokenEndPoint: string;
  scope: string;
  clientId: string;
  clientSecret: string;
  authUrlTemplate: string;
  codeToTokenScript: string;
  tokenToUserInfoScript: string;
  tokenToUserInfoScriptFuncId: string;
  codeToTokenScriptFuncId: string;
  authUrl?: string; // 根据模板拼接出来的授权 url
}
export interface ISamlConnectionConfig {
  signInEndPoint: string;
  samlRequest?: string;

  // saml assertion 验签公钥

  samlIdpCert: string;

  // saml request 验签公钥

  samlSpCert: string;

  // saml request 签名私钥

  samlSpKey: string;

  signOutEndPoint: string;

  signSamlRequest: boolean;

  signatureAlgorithm: string;

  digestAlgorithm: string;

  protocolBinding: string;
}

export interface ICasConnectionConfig {
  casConnectionLoginUrl: string;
}

export enum OIDCConnectionMode {
  FRONT_CHANNEL = 'FRONT_CHANNEL',
  BACK_CHANNEL = 'BACK_CHANNEL'
}

export interface IAzureAdConnectionConfig {
  microsoftAzureAdDomain: string;
  clientId: string;
  syncUserProfileOnLogin: string;
  emailVerifiedDefault: boolean;
  authorizationUrl: string;
  callbackUrl: string;
}

export interface OIDCConnectionConfig {
  issuerUrl: string;
  authorizationEdpoint: string;
  responseType: string;
  mode: OIDCConnectionMode;
  clientId: string;
  clientSecret: string;
  scopes: string;
  redirectUri: string;
}

export interface ApplicationConfig {
  id: string;
  cdnBase: string;
  userPoolId: string;
  rootUserPoolId: string;
  publicKey: string;
  passwordStrength: AppPasswordStrengthLimit;
  // 登录框自定义 css 代码
  css: string;
  name: string;
  logo: string;
  redirectUris: string[];
  registerDisabled: boolean;
  registerTabs: {
    list: RegisterMethods[];
    default: string;
    title: { [x: string]: string };
  };
  loginTabs: {
    list: LoginMethods[];
    default: string;
    title: { [x: string]: string };
  };
  socialConnections: {
    provider: string;
    name: string;
    authorizationUrl: string;
  }[];

  agreementEnabled: boolean;

  extendsFieldsEnabled: boolean;

  identityProviders: {
    identifier: string;
    protocol: Protocol;
    displayName: string;
    logo: string;
    config:
      | ISamlConnectionConfig
      | OIDCConnectionConfig
      | ICasConnectionConfig
      | IAzureAdConnectionConfig
      | IOAuthConnectionConfig;
  }[];

  ssoPageComponentDisplay: {
    autoRegisterThenLoginHintInfo: boolean;
    forgetPasswordBtn: boolean;
    idpBtns: boolean;
    loginBtn: boolean;
    loginByPhoneCodeTab: boolean;
    loginByUserPasswordTab: boolean;
    loginMethodNav: boolean;
    phoneCodeInput: boolean;
    registerBtn: boolean;
    registerByEmailTab: boolean;
    registerByPhoneTab: boolean;
    registerMethodNav: boolean;
    socialLoginBtns: boolean;
    userPasswordInput: boolean;
    wxMpScanTab: boolean;
  };

  protocol: Protocol;
  oidcConfig: OidcClientMetadata;
  enableSubAccount: boolean;
  // 用户池是否在白名单
  userPoolInWhitelist: boolean;

  userPortal: UserPortalConfig;

  /** websocket 域名*/
  websocket: string;
  verifyCodeLength: number;
}

export interface OidcClientMetadata {
  grant_types: string[];
  client_id: string;
  redirect_uris: string[];
  scope: string;
  response_types: ResponseType[];
}

export interface UserPortalConfig {
  cdnBase: string;
  assetsBase: string;
  assetsVersion: string;
  // 网站备案号
  icpRecord: string;
  // 公安备案号
  psbRecord: string;
}

export interface IOidcParams {
  appId?: string;
  redirectUri?: string;
  responseType?:
    | 'code'
    | 'code id_token token'
    | 'code id_token'
    | 'code token'
    | 'id_token token'
    | 'id_token'
    | 'none';
  responseMode?: 'query' | 'fragment' | 'form_post';
  state?: string;
  nonce?: string;
  scope?: string;
}

export interface IOauthParams {
  appId?: string;
  redirectUri?: string;
  responseType?:
    | 'code'
    | 'token'
  state?: string;
  scope?: string;
}
