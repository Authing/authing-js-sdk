import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  AuthenticationClientOptions,
  IMfaAssociation,
  IMfaAuthenticators,
  IMfaConfirmAssociation,
  IMfaDeleteAssociation,
  TotpSource
} from './types';
import { HttpClient } from '../common/HttpClient';
import { User } from '../..';
import { BaseAuthenticationClient } from './BaseAuthenticationClient';
import { AxiosRequestConfig } from 'axios';
import { uploadFile, xhrUpload } from '../utils';

/**
 * @class MfaAuthenticationClient 多因素认证模块
 * @description 此模块用于进行绑定 TOTP MFA 认证器、解绑 TOTP MFA 认证器、绑定用户人脸、解绑人脸、用户二次认证。
 *
 * 请求绑定 TOTP MFA 认证器：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * await authenticationClient.mfa.assosicateMfaAuthenticator({authenticatorType: 'totp'})
 * \`\`\`
 *
 * 验证 MFA 二次口令：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * await authenticationClient.mfa.verifyTotpMfa({totp: '112233', mfaToken: 'xxx'})
 * \`\`\`
 *
 * @name MfaAuthenticationClient
 */
export class MfaAuthenticationClient {
  options: AuthenticationClientOptions;
  tokenProvider: AuthenticationTokenProvider;
  httpClient: HttpClient;
  baseClient: BaseAuthenticationClient;

  constructor(
    options: AuthenticationClientOptions,
    tokenProvider: AuthenticationTokenProvider,
    httpClient: HttpClient
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
    this.baseClient = new BaseAuthenticationClient(options);
  }

  /**
   * @name getMfaAuthenticators
   * @name_zh 获取 MFA 认证器
   * @description 获取 MFA 认证器
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.mfa.getMfaAuthenticators({ type: 'totp' })
   *
   * @returns {Promise<IMfaAuthenticators>}
   * @memberof MfaAuthenticationClient
   */
  async getMfaAuthenticators(
    options: {
      type: string;
      mfaToken?: string;
      source?: TotpSource;
    } = { type: 'totp', source: 'SELF' }
  ): Promise<IMfaAuthenticators> {
    const { type, mfaToken, source } = options;

    const api = `${this.baseClient.appHost}/api/v2/mfa/authenticator`;
    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }
    const data: IMfaAuthenticators = await this.httpClient.request({
      method: 'GET',
      url: api,
      params: {
        type,
        source
      },
      headers
    });
    return data;
  }

  /**
   * @name assosicateMfaAuthenticator
   * @name_zh 请求 MFA 二维码和密钥信息
   * @description 请求 MFA 二维码和密钥信息
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.mfa.assosicateMfaAuthenticator({ authenticatorType: 'totp' })
   *
   * @returns {Promise<IMfaAssociation>}
   * @memberof MfaAuthenticationClient
   */
  async assosicateMfaAuthenticator(
    options: {
      authenticatorType: string;
      mfaToken?: string;
      source?: TotpSource;
    } = { authenticatorType: 'totp', source: 'SELF' }
  ): Promise<IMfaAssociation> {
    const { authenticatorType, mfaToken, source } = options;

    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }

    const api = `${this.baseClient.appHost}/api/v2/mfa/totp/associate`;
    const data: IMfaAssociation = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        authenticator_type: authenticatorType,
        source
      },
      headers
    });
    return data;
  }

  /**
   * @name deleteMfaAuthenticator
   * @name_zh 解绑 MFA
   * @description 解绑 MFA
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.mfa.deleteMfaAuthenticator()
   *
   * @returns {Promise<IMfaDeleteAssociation>}
   * @memberof MfaAuthenticationClient
   */
  async deleteMfaAuthenticator(): Promise<IMfaDeleteAssociation> {
    const api = `${this.baseClient.appHost}/api/v2/mfa/totp/associate`;
    await this.httpClient.request({
      method: 'DELETE',
      url: api
    });
    return {
      code: 200,
      message: 'TOTP MFA 解绑成功'
    };
  }

  /**
   * @name confirmAssosicateMfaAuthenticator
   * @name_zh 确认绑定 MFA
   * @description 确认绑定 MFA
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
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
      source?: TotpSource;
      mfaToken?: string;
    } = { authenticatorType: 'totp', source: 'SELF' }
  ): Promise<IMfaConfirmAssociation> {
    const api = `${this.baseClient.appHost}/api/v2/mfa/totp/associate/confirm`;
    const { authenticatorType, totp, source, mfaToken } = options;

    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }

    await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        authenticator_type: authenticatorType,
        totp,
        source
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
   *    appId: "YOUR_APP_ID",
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
    const api = `${this.baseClient.appHost}/api/v2/mfa/totp/verify`;
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
   * @name verifyAppSmsMfa
   * @name_zh 检验二次验证 MFA 短信验证码
   * @description 检验二次验证 MFA 短信验证码
   *
   * @param {object} options
   * @param {string} options.phone 用户手机号
   * @param {string} options.code 手机验证码
   * @param {string} options.token 登录接口返回的 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.mfa.verifySmsMfa({ mfaToken: 'xxxxxx', phone: '173xxxxxxxx' })
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async verifyAppSmsMfa(options: {
    phone: string;
    code: string;
    mfaToken: string;
  }): Promise<User> {
    const api = `${this.baseClient.appHost}/api/v2/applications/mfa/sms/verify`;
    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        phone: options.phone,
        code: options.code
      },
      headers: {
        authorization: 'Bearer ' + options.mfaToken
      }
    });
    return data;
  }

  /**
   * @name verifyAppEmailMfa
   * @name_zh 检验二次验证 MFA 邮箱验证码
   * @description 检验二次验证 MFA 邮箱验证码
   *
   * @param {object} options
   * @param {string} options.email 用户邮箱
   * @param {string} options.code 邮箱验证码
   * @param {string} options.token 登录接口返回的 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const authenticators = await authenticationClient.mfa.verifyAppEmailMfa({ mfaToken: 'xxxx', email: 'example@authing.com' })
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async verifyAppEmailMfa(options: {
    email: string;
    mfaToken: string;
    code: string;
  }): Promise<User> {
    const api = `${this.baseClient.appHost}/api/v2/applications/mfa/email/verify`;
    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        email: options.email,
        code: options.code
      },
      headers: {
        authorization: 'Bearer ' + options.mfaToken
      }
    });
    return data;
  }

  /**
   * @name phoneOrEmailBindable
   * @name_zh 检测手机号或邮箱是否已被绑定
   * @description 当需要手机或邮箱 MFA 登录，而用户未绑定手机或邮箱时，可先让用户输入手机号或邮箱，用此接口先检测手机或邮箱是否可绑定，再进行 MFA 验证
   *
   * @param {object} options
   * @param {string} [options.mfaToken] 后端返回的 mfaToken
   * @param {string} [options.phone] 需要检测的手机号
   * @param {string} [options.email] 需要检测的邮箱
   *
   * @example
   *
   * authenticationClient.phoneOrEmailBindable({
   *  phone: '173xxxxxxxx',
   *  mfaToken: 'xxxxx'
   * })
   *
   * @returns {Promise<boolean>}
   * @memberof MfaAuthenticationClient
   */
  async phoneOrEmailBindable({
    phone,
    email,
    mfaToken
  }: {
    phone?: string;
    email?: string;
    mfaToken: string;
  }): Promise<boolean> {
    const api = `${this.baseClient.appHost}/api/v2/applications/mfa/check`;
    return await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        email,
        phone
      },
      headers: {
        authorization: 'Bearer ' + mfaToken
      }
    });
  }

  /**
   * @name verifyTotpRecoveryCode
   * @name_zh 检验二次验证 MFA 恢复代码
   * @description 检验二次验证 MFA 恢复代码
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
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
    const api = `${this.baseClient.appHost}/api/v2/mfa/totp/recovery`;
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

  /**
   * @name associateFaceByUrl
   * @name_zh 通过图片 URL 方式绑定人脸
   * @description 通过图片 URL 方式绑定人脸
   *
   * @param {object} options
   * @param {string} options.baseFace 基础人脸照片
   * @param {string} options.compareFace 用于对比的人脸照片地址
   * @param {string} [options.mfaToken] 若是在二次认证时绑定人脸，需要传入 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const user = await authenticationClient.mfa.associateFace({ photoA: 'http://example.com/photo/imgA.jpg', photoB: 'http://example.com/photo/imgB.jpg', mfaToken: 'xxxxxxxxxxxx' })
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async associateFaceByUrl(options: {
    baseFace: string;
    compareFace: string;
    mfaToken?: string;
  }): Promise<User> {
    const { baseFace, compareFace, mfaToken } = options;

    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }

    const api = `${this.baseClient.appHost}/api/v2/mfa/face/associate`;
    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        photoA: baseFace,
        photoB: compareFace,
        isExternal: true
      },
      headers
    });
    return data;
  }

  /**
   * @name associateFaceByLocalFile
   * @name_zh 通过上传本地文件的方式绑定人脸
   * @description 通过上传本地文件的方式绑定人脸
   *
   * @param {string} [mfaToken] 若是在二次认证时绑定人脸，需要传入 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const user = await authenticationClient.mfa.associateFaceByLocalFile('xxxxxxxxxxx')
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async associateFaceByLocalFile(mfaToken?: string): Promise<User> {
    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }

    let uploadedKey;
    try {
      const { key } = await uploadFile({
        // 阿里云支持这些
        accept: '.jpeg,.jpg,.png,.bmp',
        url: `${this.baseClient.appHost}/api/v2/upload?folder=face-photo&private=true`
      });
      uploadedKey = key;
    } catch (e) {
      this.options.onError(e.code, e.message);
    }

    const data: User = await this.httpClient.request({
      method: 'POST',
      url: `${this.baseClient.appHost}/api/v2/mfa/face/associate`,
      data: {
        photoA: uploadedKey,
        photoB: uploadedKey
      },
      headers
    });
    return data;
  }

  /**
   * @name associateFaceByBlob
   * @name_zh 通过传入 Blob 对象绑定人脸
   * @description 通过传入 Blob 对象绑定人脸
   *
   * @param {object} options
   * @param {string} options.baseFace 基础人脸数据 Blob 对象
   * @param {string} options.compareFace 用于对比的人脸数据 Blob 对象
   * @param {string} [options.mfaToken] 若是在二次认证时绑定人脸，需要传入 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const user = await authenticationClient.mfa.associateFaceByBlob({blobA: Blob, blobB: Blob, mfaToken: 'xxx'})
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async associateFaceByBlob(opts: {
    mfaToken?: string;
    baseFace: Blob;
    compareFace: Blob;
  }): Promise<User> {
    const { baseFace, compareFace, mfaToken } = opts;

    const headers: AxiosRequestConfig['headers'] = {};
    if (mfaToken) {
      headers.authorization = `Bearer ${mfaToken}`;
    }

    let photoA;
    let photoB;
    const uploadUrl = `${this.baseClient.appHost}/api/v2/upload?folder=face-photo&private=true`;
    try {
      const { key: keyA } = await xhrUpload(baseFace, uploadUrl);
      photoA = keyA;

      if (compareFace) {
        const { key: keyB } = await xhrUpload(compareFace, uploadUrl);
        photoB = keyB;
      } else {
        photoB = keyA;
      }
    } catch (e) {
      this.options.onError(e.code, e.message);
    }

    const data: User = await this.httpClient.request({
      method: 'POST',
      url: `${this.baseClient.appHost}/api/v2/mfa/face/associate`,
      data: {
        photoA,
        photoB
      },
      headers
    });
    return data;
  }

  /**
   * @name verifyFaceMfa
   * @name_zh 检测二次登录人脸验证
   * @description 检测二次登录人脸验证
   *
   * @param {string} photo 人脸照片地址
   * @param {string} mfaToken 二次校验时 Authing 返回的 mfaToken
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const user = await authenticationClient.mfa.verifyFaceMfa('http://example.com/photo/photo.jpg')
   *
   * @returns {Promise<User>}
   * @memberof MfaAuthenticationClient
   */
  async verifyFaceMfa(photo: string, mfaToken: string): Promise<User> {
    const api = `${this.baseClient.appHost}/api/v2/mfa/face/verify`;

    const data: User = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        photo
      },
      headers: {
        authorization: `Bearer ${mfaToken}`
      }
    });
    return data;
  }
}
