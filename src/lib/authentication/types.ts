import { GraphqlClient } from '../common/GraphqlClient';
import { HttpClient } from '../common/HttpClient';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';

/**
 * 初始化 AuthenticationClientOptions 的参数
 */
export interface AuthenticationClientOptions {
  /** 用户池 ID **/
  userPoolId?: string;
  appId?: string;
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
  /** token */
  accessToken?: string;
  /** 加密函数 */
  encryptFunction?: (plainText: string, publicKey: string) => Promise<string>;
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
