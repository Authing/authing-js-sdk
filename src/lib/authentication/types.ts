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
  accessToken?: string;
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
