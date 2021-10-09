import { Org } from '../../types/graphql.v2';
import { GraphqlClient } from '../common/GraphqlClient';
import { HttpClient } from '../common/HttpClient';
import { Lang } from '../../types';

/**
 * 初始化 Authing SDK 的参数，secret 和 accessToken 必须传其中一个。
 */
export interface ManagementClientOptions {
  /** 用户池 ID **/
  userPoolId?: string;
  /** 应用 ID */
  appId?: string;
  /** 用户池/应用密钥 **/
  secret?: string;
  /** 用户池 accessToken，如果传入，请注意 token 过期状态，你需要自己维护此 Token 的状态，SDK 不会自动更新  **/
  accessToken?: string;
  /** 请求超时时间 **/
  timeout?: number;
  /** 错误回调函数, 默认为 (err: Error) => { throw err } 直接抛出报错 **/
  onError?: (code: number, message: string, data?: any) => void;
  /** Authing 服务器地址 */
  host?: string;
  /** 请求来源 */
  requestFrom?: string;
  /** 加密函数 */
  encryptFunction?: (plainText: string, publicKey: string) => Promise<string>;
  /** 密码传输加密公钥 */
  publicKey?: string;
  httpClient?: typeof HttpClient;
  graphqlClient?: typeof GraphqlClient;
  /**
   * 语言
   */
  lang?: Lang;

  /**
   * 请求头 key，适用于去 Authing 品牌化场景
   */
  headers?: {
    'userpool-id': string;
    'app-id': string;
    'sdk-version': string;
    'request-from': string;
    lang: string;
  };
}

/**
 * Decode 过后的用户池 accessToken
 */
export interface DecodedAccessToken {
  /** 用户 ID */
  sub: string;
  /** 签发时间 **/
  iat: number;
  /** 过期时间 **/
  exp: number;
  data?: {
    /** 用户池管理员邮箱 **/
    email: string;
    /** 用户池管理员用户 ID **/
    id: string;
  };
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

export interface OIDCProviderCustomStylesInput {
  forceLogin?: boolean;
  hideQRCode?: boolean;
  hideUP?: boolean;
  hideUsername?: boolean;
  hideRegister?: boolean;
  hidePhone?: boolean;
  hideSocial?: boolean;
  hideClose?: boolean;
  placeholder?: OIDCProviderCustomStylesPlaceholderInput;
  qrcodeScanning?: OIDCProviderCustomStylesQrcodeScanningInput;
}

export interface OIDCProviderCustomStylesPlaceholderInput {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  verfiyCode?: string;
  newPassword?: string;
  phone?: string;
  phoneCode?: string;
}

export interface OIDCProviderCustomStylesQrcodeScanningInput {
  redirect?: boolean;
  interval?: number;
  tips?: string;
}

export interface CreateOIDCProviderInput {
  name: string;
  domain: string;
  redirect_uris: [string];
  grant_types?: [string];
  response_types?: [string];
  clientId?: string;
  token_endpoint_auth_method?: string;
  image?: string;
  isDefault: boolean;
  id_token_signed_response_alg?: string;
  id_token_encrypted_response_alg?: string;
  id_token_encrypted_response_enc?: string;
  userinfo_signed_response_alg?: string;
  userinfo_encrypted_response_alg?: string;
  userinfo_encrypted_response_enc?: string;
  request_object_signing_alg?: string;
  request_object_encryption_alg?: string;
  request_object_encryption_enc?: string;
  jwks_uri?: string;
  _jwks_uri?: string;
  jwks?: string;
  _jwks?: string;
  custom_jwks?: string;
  description?: string;
  homepageURL?: string;
  authorization_code_expire?: string;
  id_token_expire?: string;
  access_token_expire?: string;
  cas_expire?: string;
  customStyles?: OIDCProviderCustomStylesInput;
}

export interface ExtendedOrg extends Org {
  tree: any;
}

/**
 * 用户支持的操作日志类型枚举
 */
export enum SupportedUserActionEnum {
  /**
   * 登录
   */
  LOGIN = 'login',
  /**
   * 注册
   */
  REGISTER = 'register',
  /**
   * 删除账户
   */
  DELETE_ACCOUNT = 'deleteAccount',
  /**
   * 修改账号信息
   */
  UPDATE_USER_INFO = 'updateUserinfo',
  /**
   * 刷新 token
   */
  REFRESH_TOKEN = 'refreshToken',
  /**
   * 修改邮箱
   */
  UPDATE_EMAIL = 'updateEmail',
  /**
   * 修改手机号
   */
  UPDATE_PHONE = 'updatePhone',
  /**
   * 修改密码
   */
  UPDATE_PASSWORD = 'updatePassword',
  /**
   * 验证 MFA
   */
  VERIFY_MFA = 'verifyMfa'
}

/**
 * 管理员支持的操作日志类型枚举
 */
export enum SupportedAdminActionEnum {
  /**
   * 删除用户
   */
  DELETE_USER = 'deleteUser',
  /**
   * 批量删除用户
   */
  DELETE_USERS = 'deleteUsers',
  /**
   * 创建用户
   */
  CREATE_USER = 'createUser',
  /**
   * 刷新 Token
   */
  REFRESH_TOKEN = 'refreshToken',
  /**
   * 导入用户
   */
  IMPORT_USER = 'importUser',
  /**
   * 导出用户
   */
  EXPORT_USER = 'exportUser',
  /**
   * 刷新密码
   */
  REFRESH_SECRET = 'refreshSecret',
  /**
   * 删除用户池
   */
  DELETE_USERPOOL = 'deleteUserpool',
  /**
   * 创建用户池
   */
  CREATE_USERPOOL = 'createUserpool',
  /**
   * 修改用户池配置
   */
  USERPOOL_UPDATE_CONFIG = 'userpool:UpdateConfig',
  /**
   * 刷新用户池密钥
   */
  REFRESH_USERPOOL_SECRET = 'refreshUserpoolSecret'
}

/**
 * 用户日志信息
 */
export interface UserLogsInfo {
  /**
   * 用户池 ID
   */
  userpoolId: string;
  /**
   *用户 ID
   */
  userId: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 城市名
   */
  cityName: string;
  /**
   * 区域名
   */
  regionName: string;
  /**
   * 客户端 IP
   */
  clientIp: string;
  /**
   * 操作类型描述
   */
  operationDesc: string;
  /**
   * 操作类型
   */
  operationName: string;
  /**
   * 时间戳
   */
  timestamp: string;
  /**
   * 应用 ID
   */
  appId: string;
  /**
   * 应用名
   */
  appName: string;
}

/**
 * 管理员操作日志信息
 */
export interface AdminLogsInfo {
  /**
   * 用户池 ID
   */
  userpoolId: string;
  /**
   * 操作者类型
   */
  operatorType: string;
  /**
   * 操作者 ID
   */
  operatorId: string;
  /**
   * 操作者名称
   */
  operatorName: string;
  /**
   * 操作类型
   */
  operationName: string;
  /**
   * 城市名
   */
  cityName: string;
  /**
   * 区域名
   */
  regionName: string;
  /**
   * 客户端 IP
   */
  clientIp: string;
  /**
   * 资源类型
   */
  resourceType: string;
  /**
   * 资源类型名称
   */
  resourceDesc: string;
  resource_arn: string;
  /**
   * 时间戳
   */
  timestamp: string;
}

export type UserMfaType = 'OTP' | 'FACE';
export interface Application {
  qrcodeScanning: {
    redirect: boolean;
    interval: number;
  };
  id: string;
  userPoolId: string;
  protocol: string;
  name: string;
  secret: string;
  identifier: string;
  jwks: {
    keys: { [key: string]: string }[];
  };
  redirectUris: string[];
  css: string;
  oidcConfig: {
    id: string;
    client_secret: string;
    redirect_uris: string[];
    grants: string[];
    access_token_lifetime: number;
    refresh_token_lifetime: number;
    introspection_endpoint_auth_method: string;
    revocation_endpoint_auth_method: string;
  };
  oauthConfig: {
    grant_types: string[];
    response_types: string[];
    id_token_signed_response_alg: string;
    jwks_uri?: any;
    token_endpoint_auth_method: string;
    request_object_encryption_enc?: any;
    request_object_encryption_alg?: any;
    request_object_signing_alg?: any;
    userinfo_encrypted_response_enc?: any;
    userinfo_encrypted_response_alg?: any;
    userinfo_signed_response_alg?: any;
    id_token_encrypted_response_enc?: any;
    id_token_encrypted_response_alg?: any;
    jwks?: any;
    authorization_code_expire: number;
    id_token_expire: number;
    access_token_expire: number;
    refresh_token_expire: number;
    cas_expire: number;
    skip_consent: boolean;
  };
  createdAt: string;
  updatedAt: string;
  description?: any;
  ssoPageCustomizationSettings?: any;
  logo: string;
  logoutRedirectUris?: any;
  loginTabs?: any;
  defaultLoginTab: string;
  registerTabs?: any;
  defaultRegisterTab: string;
  ldapConnections?: any;
  adConnections?: any;
  disabledSocialConnections?: any;
  disabledOidcConnections?: any;
  disabledSamlConnections?: any;
  disabledOauth2Connections?: any;
  disabledCasConnections?: any;
  disabledAzureAdConnections?: any;
  extendsFields?: any;
  ext?: any;
  samlConfig?: any;
  casConfig?: any;
  skipMfa: boolean;
  permissionStrategy: {
    allowPolicyId?: string;
    denyPolicyId?: string;
    enabled: boolean;
    defaultStrategy: string;
  };
  isOfficial: boolean;
  isDeleted: boolean;
  isDefault: boolean;
  oidcProviderEnabled: boolean;
  oauthProviderEnabled: boolean;
  samlProviderEnabled: boolean;
  casProviderEnabled: boolean;
  registerDisabled: boolean;
  extendsFieldsEnabled: boolean;
  showAuthorizationPage: boolean;
  enableSubAccount: boolean;
  loginRequireEmailVerified: boolean;
  agreementEnabled: boolean;
}

export interface ApplicationList {
  totalCount: number;
  list: Application[];
}

export interface ProgrammaticAccessAccount {
  id: string;
  createdAt: string;
  updatedAt: string;
  appId: string;
  secret: string;
  remarks: string;
  tokenLifetime: number;
  enabled: boolean;
  userId: string;
}

export interface ProgrammaticAccessAccountList {
  totalCount: number;
  list: ProgrammaticAccessAccount[];
}

export interface AccessControl {
  assignedAt: string;
  inheritByChildren?: any;
  enabled: boolean;
  policyId: string;
  code: string;
  policy: {
    id: string;
    createdAt: string;
    updatedAt: string;
    userPoolId: string;
    isDefault: boolean;
    isAuto: boolean;
    hidden: boolean;
    code: string;
    description: string;
    statements: {
      resource: string;
      actions: string[];
      effect: string;
      condition: any[];
      resourceType?: any;
    }[];
    namespaceId: number;
  };
  targetType: string;
  targetIdentifier: string;
  target: {
    id: string;
    createdAt: string;
    updatedAt: string;
    userPoolId: string;
    orgId: string;
    name: string;
    nameI18n?: any;
    description?: any;
    descriptionI18n?: any;
    order?: any;
    code?: any;
    __id?: any;
    __parentid?: any;
    __groupid?: any;
  };
  namespace: string;
}

export interface AccessControlList {
  totalCount: number;
  list: AccessControl[];
}

export interface ActiveUser {
  thirdPartyIdentity: {
    provider: string;
    refreshToken: string;
    accessToken: string;
    scope: string;
    expiresIn: string;
    updatedAt: string;
  }[];
  id: string;
  createdAt: string;
  updatedAt: string;
  userPoolId: string;
  isRoot: boolean;
  status: string;
  oauth?: string;
  email?: string;
  phone?: string;
  username: string;
  unionid?: string;
  openid?: string;
  nickname?: string;
  company?: string;
  photo: string;
  browser?: string;
  device?: string;
  password: string;
  salt?: string;
  token: string;
  tokenExpiredAt: string;
  loginsCount: number;
  lastIp: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  profile?: string;
  preferredUsername?: string;
  website?: string;
  gender: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  address?: string;
  formatted?: boolean;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  city?: string;
  province?: string;
  country?: string;
  registerSource: string[];
  secretInfo?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  lastLogin: string;
  blocked: boolean;
  isDeleted: boolean;
  sendSmsCount: number;
  sendSmsLimitCount: number;
  signedUp: string;
  externalId?: string;
  mainDepartmentId?: string;
  mainDepartmentCode?: string;
  lastMfaTime?: string;
  passwordSecurityLevel: number;
}

export interface ActiveUsers {
  totalCount: number;
  list: ActiveUser[];
}

export interface UserAction {
  operator_arn: string;
  '@timestamp': string;
  user_agent: string;
  geoip: {
    continent_code: string;
    country_code2: string;
    region_name: string;
    city_name: string;
    ip: string;
    latitude: number;
    region_code: string;
    timezone: string;
    country_code3: string;
    longitude: number;
    country_name: string;
    location: {
      lon: number;
      lat: number;
    };
  };
  message: string;
  ua: {
    build: string;
    os: string;
    device: string;
    patch: string;
    os_minor: string;
    os_major: string;
    os_name: string;
    minor: string;
    name: string;
    major: string;
  };
  userpool_id: string;
  host: string;
  timestamp: string;
  '@version': string;
  app_id: string;
  operation_name: string;
  clientip: string;
  extra_data: string;
  request_id: string;
  path: string;
  user: {
    userPoolId: string;
    displayName: string;
    id: string;
    photo: string;
  };
  app: {
    qrcodeScanning: { [key: string]: any };
    id: string;
    name: string;
    description?: any;
    identifier: string;
    logo: string;
    loginTabs: string[];
    registerTabs: string[];
    adConnections: any[];
    disabledOidcConnections: any[];
    disabledSamlConnections: any[];
    extendsFields: any[];
    disabledAzureAdConnections: any[];
    disabledOauth2Connections: any[];
    disabledCasConnections: any[];
  };
  operation_desc: string;
}

export interface UserActions {
  totalCount: number;
  list: UserAction[];
}

export interface Resource {
  id: string;
  createdAt: string;
  updatedAt: string;
  userPoolId: string;
  code: string;
  actions: {
    name: string;
    description: string;
  }[];
  type: string;
  description: string;
  namespaceId: number;
  apiIdentifier?: string;
  namespace: string;
}

export interface Resources {
  totalCount: number;
  list: Resource[];
}

export interface Namespace {
  id: number;
  name: string;
  code: string;
  description: string;
  status: number;
  appId: string;
  appName: string;
}

export interface Namespaces {
  total: number;
  list: Namespace[];
}

export type BatchFetchUserTypes =
  | 'id'
  | 'username'
  | 'phone'
  | 'email'
  | 'externalId';

export interface IResourceQueryFilter {
  page?: number;
  limit?: number;
  type?: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
  /**
   * @deprecated 请使用 namespace
   */
  namespaceCode?: string;
  namespace?: string;
}

export interface IResourceDto {
  code: string;
  type: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
  description?: string;
  actions: Array<{
    name: string;
    description: string;
  }>;
  namespace: string;
  apiIdentifier?: string
}

export interface IResourceUpdateDto {
  type?: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
  description?: string;
  actions?: Array<{
    name: string;
    description: string;
  }>;
  namespace: string;
  apiIdentifier?: string
}

export interface IResourceResponse {
  userPoolId: string;
  code: string;
  actions: Array<{
    name: string;
    description: string;
  }>;
  type: string;
  description: string;
  namespaceId: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  apiIdentifier?: string;
}

export interface IAppAccessPolicyQueryFilter {
  page?: number;
  limit?: number;
  appId: string;
}

export interface IAppAccessPolicy {
  appId: string;
  targetType: 'USER' | 'ROLE' | 'GROUP' | 'ORG';
  targetIdentifiers: string[];
  namespace?: string;
  inheritByChildren?: boolean;
}

export interface Statement {
  resource: string;
  actions: string[];
  effect: string;
  condition: any[];
  resourceType?: 'DATA' | 'API' | 'MENU' | 'UI' | 'BUTTON';
}

export interface IPolicy {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userPoolId: string;
  isDefault: boolean;
  isAuto: boolean;
  hidden: boolean;
  code: string;
  description: string;
  statements: Statement[];
  namespaceId: number;
}

export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userPoolId: string;
  isRoot: boolean;
  status: string;
  oauth?: any;
  email?: any;
  phone?: any;
  username: string;
  unionid?: any;
  openid?: any;
  nickname?: any;
  company?: any;
  photo: string;
  browser?: any;
  device?: any;
  password: string;
  salt: string;
  token?: any;
  tokenExpiredAt?: any;
  loginsCount: number;
  lastIp?: any;
  name?: any;
  givenName?: any;
  familyName?: any;
  middleName?: any;
  profile?: any;
  preferredUsername?: any;
  website?: any;
  gender: string;
  birthdate?: any;
  zoneinfo?: any;
  locale?: any;
  address?: any;
  formatted?: any;
  streetAddress?: any;
  locality?: any;
  region?: any;
  postalCode?: any;
  city?: any;
  province?: any;
  country?: any;
  registerSource: string[];
  secretInfo?: any;
  emailVerified: boolean;
  phoneVerified: boolean;
  lastLogin?: any;
  blocked: boolean;
  isDeleted: boolean;
  sendSmsCount: number;
  sendSmsLimitCount: number;
  dataVersion?: any;
  encryptedPassword: string;
  signedUp: Date;
  externalId?: any;
  mainDepartmentId?: any;
  mainDepartmentCode?: any;
  lastMfaTime?: any;
  passwordSecurityLevel: number;
  source?: any;
  identities: any[];
}

export interface IList {
  assignedAt: Date;
  inheritByChildren?: boolean;
  enabled: boolean;
  policyId: string;
  code: string;
  policy: IPolicy;
  targetType: string;
  targetIdentifier: string;
  target: IUser;
  namespace: string;
}

export interface IApplicationAccessPolicies {
  list: IList[];
  totalCount: number;
}
/**
 * 应用公开的配置
 */
export interface ApplicationPublicDetail {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  logo: string;
  domain: string;
  description: string;
  protocol: string;
}

export interface ApplicationDetail {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  logo: string;
  domain: string;
  description: string;
  protocol: string;
  secret: string;
  jwks: any;
  ssoPageCustomizationSettings: any;
  redirectUris: string[];
  logoutRedirectUris: string[];
  oidcProviderEnabled: boolean;
  oauthProviderEnabled: boolean;
  samlProviderEnabled: boolean;
  casProviderEnabled: boolean;
  registerDisabled: boolean;
  oidcConfig: { [x: string]: any };
  samlConfig: { [x: string]: any };
  oauthConfig: { [x: string]: any };
  casConfig: { [x: string]: any };
  showAuthorizationPage: boolean;
  enableSubAccount: boolean;
  loginRequireEmailVerified: boolean;
  agreementEnabled: boolean;
}

export interface QrcodeScanning {
  redirect: boolean;
  interval: number;
}

export interface Key {
  e: string;
  n: string;
  d: string;
  p: string;
  q: string;
  dp: string;
  dq: string;
  qi: string;
  kty: string;
  kid: string;
  alg: string;
  use: string;
}

export interface Jwks {
  keys: Key[];
}

export interface OidcConfig {
  grant_types: string[];
  response_types: string[];
  id_token_signed_response_alg: string;
  token_endpoint_auth_method: string;
  authorization_code_expire: number;
  id_token_expire: number;
  access_token_expire: number;
  refresh_token_expire: number;
  cas_expire: number;
  skip_consent: boolean;
  redirect_uris: string[];
  post_logout_redirect_uris: any[];
  client_id: string;
  introspection_endpoint_auth_method: string;
  revocation_endpoint_auth_method: string;
}

export interface OauthConfig {
  id: string;
  redirect_uris: string[];
  grants: string[];
  access_token_lifetime: number;
  refresh_token_lifetime: number;
  introspection_endpoint_auth_method: string;
  revocation_endpoint_auth_method: string;
}

export interface PermissionStrategy {
  enabled: boolean;
  defaultStrategy: string;
  allowPolicyId: string;
  denyPolicyId: string;
}

export interface IApplication {
  qrcodeScanning: QrcodeScanning;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userPoolId: string;
  protocol: string;
  isOfficial: boolean;
  isDeleted: boolean;
  isDefault: boolean;
  name: string;
  description?: any;
  identifier: string;
  jwks: Jwks;
  ssoPageCustomizationSettings?: any;
  logo: string;
  redirectUris: string[];
  logoutRedirectUris: any[];
  oidcProviderEnabled: boolean;
  oauthProviderEnabled: boolean;
  samlProviderEnabled: boolean;
  casProviderEnabled: boolean;
  registerDisabled: boolean;
  loginTabs: string[];
  defaultLoginTab: string;
  registerTabs: string[];
  defaultRegisterTab: string;
  ldapConnections?: any;
  adConnections: any[];
  disabledSocialConnections?: any;
  disabledOidcConnections: any[];
  disabledSamlConnections: any[];
  disabledOauth2Connections: any[];
  disabledCasConnections: any[];
  disabledAzureAdConnections: any[];
  extendsFieldsEnabled: boolean;
  extendsFields: any[];
  ext?: any;
  css: string;
  oidcConfig: OidcConfig;
  samlConfig?: any;
  oauthConfig: OauthConfig;
  casConfig?: any;
  showAuthorizationPage: boolean;
  enableSubAccount: boolean;
  loginRequireEmailVerified: boolean;
  agreementEnabled: boolean;
  skipMfa: boolean;
  permissionStrategy: PermissionStrategy;
}

export interface AgreementInput {
  title: string;
  required?: boolean;
  lang?: Lang;
}

export interface AgreementDetail extends Required<AgreementInput> {
  appId: string;
  order: number;
  userPoolId: string;
  id: number;
}

export interface AgreementList {
  list: AgreementDetail[];
  totalCount: number;
}

export interface ISetTotpResp {
  userId: string;
  enable: boolean;
  secret: string;
  authenticatorType: string;
  recoveryCode: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
