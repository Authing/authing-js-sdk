import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  AuthenticationClientOptions,
  IMfaAssociation,
  IMfaAuthenticators,
  IMfaConfirmAssociation
} from './types';
import { HttpClient } from '../common/HttpClient';
import { User } from '../..';

export class MfaAuthenticationClient {
  options: AuthenticationClientOptions;
  tokenProvider: AuthenticationTokenProvider;
  httpClient: HttpClient;

  constructor(
    options: AuthenticationClientOptions,
    tokenProvider: AuthenticationTokenProvider,
    httpClient: HttpClient
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
  }

  /**
   * @name getMfaAuthenticators
   * @name_zh 获取 MFA 认证器
   * @description 获取 MFA 认证器
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    userPoolId: process.env.AUTHING_USERPOOL_ID,
   * })
   * const authenticators = await authenticationClient.mfa.getMfaAuthenticators({ type: 'totp' })
   *
   * @returns {Promise<IMfaAuthenticators>}
   * @memberof MfaAuthenticationClient
   */
  async getMfaAuthenticators(
    options: {
      type: string;
    } = { type: 'totp' }
  ): Promise<IMfaAuthenticators> {
    const api = `${this.options.host}/api/v2/mfa/authenticator`;
    const data: IMfaAuthenticators = await this.httpClient.request({
      method: 'GET',
      url: api,
      params: {
        type: options.type
      }
    });
    console.log(data)
    return data;
  }

  /**
   * @name assosicateMfaAuthenticator
   * @name_zh 请求 MFA 二维码和密钥信息
   * @description 请求 MFA 二维码和密钥信息
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    userPoolId: process.env.AUTHING_USERPOOL_ID,
   * })
   * const authenticators = await authenticationClient.mfa.assosicateMfaAuthenticator({ authenticatorType: 'totp' })
   *
   * @returns {Promise<IMfaAssociation>}
   * @memberof MfaAuthenticationClient
   */
  async assosicateMfaAuthenticator(
    options: {
      authenticatorType: string;
    } = { authenticatorType: 'totp' }
  ): Promise<IMfaAssociation> {
    const api = `${this.options.host}/api/v2/mfa/totp/associate`;
    const data: IMfaAssociation = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        authenticator_type: options.authenticatorType
      }
    });
    return data;
  }

  /**
   * @name confirmAssosicateMfaAuthenticator
   * @name_zh 确认绑定 MFA
   * @description 确认绑定 MFA
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    userPoolId: process.env.AUTHING_USERPOOL_ID,
   * })
   * const authenticators = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator({ authenticatorType: 'totp', totp: '112233' })
   *
   * @returns {Promise<IMfaConfirmAssociation>}
   * @memberof MfaAuthenticationClient
   */
  async confirmAssosicateMfaAuthenticator(
    options: {
      authenticatorType: string;
      totp?: string;
    } = { authenticatorType: 'totp' }
  ): Promise<IMfaConfirmAssociation> {
    const api = `${this.options.host}/api/v2/mfa/totp/associate/confirm`;
    await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        authenticator_type: options.authenticatorType,
        totp: options.totp
      }
    });
    return { code: 200, message: 'TOTP MFA 绑定成功' };
  }

  /**
   * @name verifyTotpMfa
   * @name_zh 检验二次验证 MFA 口令
   * @description 检验二次验证 MFA 口令
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    userPoolId: process.env.AUTHING_USERPOOL_ID,
   * })
   * const authenticators = await authenticationClient.mfa.verifyTotpMfa({ authenticatorType: 'totp', totp: '112233' })
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async verifyTotpMfa(options: {
    totp: string;
    mfaToken: string;
  }): Promise<User> {
    const api = `${this.options.host}/api/v2/mfa/totp/verify`;
    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        totp: options.totp
      },
      headers: {
        authorization: 'Bearer ' + options.mfaToken
      }
    });
    return data;
  }

  /**
   * @name verifyTotpRecoveryCode
   * @name_zh 检验二次验证 MFA 恢复代码
   * @description 检验二次验证 MFA 恢复代码
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    userPoolId: process.env.AUTHING_USERPOOL_ID,
   * })
   * const authenticators = await authenticationClient.mfa.verifyTotpRecoveryCode({ authenticatorType: 'totp', totp: '112233' })
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async verifyTotpRecoveryCode(options: {
    recoveryCode: string;
    mfaToken: string;
  }): Promise<User> {
    const api = `${this.options.host}/api/v2/mfa/totp/recovery`;
    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        recoveryCode: options.recoveryCode
      },
      headers: {
        authorization: 'Bearer ' + options.mfaToken
      }
    });
    return data;
  }
}
