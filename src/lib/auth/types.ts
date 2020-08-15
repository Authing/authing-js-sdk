/**
 * 初始化 AuthenticationClientOptions 的参数
 */
export interface AuthenticationClientOptions {
  /** 用户池 ID **/
  userPoolId: string;
  /** 请求超时时间 **/
  timeout?: number;
  /** 错误回调函数, 默认为 (err: Error) => { throw err } 直接抛出报错 **/
  onError?: (err: Error) => void;
  encrptionPublicKey?: string;
  host?: string;
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
