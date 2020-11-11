import { Org } from '../../types/graphql.v2';
import { GraphqlClient } from '../common/GraphqlClient';
import { HttpClient } from '../common/HttpClient';

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
  /** 密码加密的公钥 */
  encrptionPublicKey?: string;
  /** Authing 服务器地址 */
  host?: string;
  /** 请求来源 */
  requestFrom?: string;
  /** 加密函数 */
  encryptFunction?: (plainText: string, publicKey: string) => Promise<string>;
  httpClient?: typeof HttpClient;
  graphqlClient?: typeof GraphqlClient;
}

/**
 * Decode 过后的用户池 accessToken
 */
export interface DecodedAccessToken {
  /** 签发时间 **/
  iat: number;
  /** 过期时间 **/
  exp: number;
  data: {
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
