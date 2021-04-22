import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';

import {
  bindEmail,
  bindPhone,
  checkLoginStatus,
  checkPasswordStrength,
  getUserRoles,
  listUserAuthorizedResources,
  loginByEmail,
  loginByPhoneCode,
  loginByPhonePassword,
  loginBySubAccount,
  loginByUsername,
  refreshToken,
  registerByEmail,
  registerByPhoneCode,
  registerByUsername,
  removeUdv,
  resetPassword,
  sendEmail,
  setUdv,
  setUdvBatch,
  udv,
  unbindEmail,
  unbindPhone,
  updateEmail,
  updatePassword,
  updatePhone,
  updateUser,
  user
} from '../graphqlapi';
import { GraphqlClient } from '../common/GraphqlClient';
import {
  AuthenticationClientOptions,
  ICasParams,
  ILogoutParams,
  IOauthParams,
  IOidcParams,
  PasswordSecurityLevel,
  ProviderType,
  SecurityLevel
} from './types';
import {
  CheckPasswordStrengthResult,
  CommonMessage,
  EmailScene,
  JwtTokenStatus,
  PaginatedAuthorizedResources,
  RefreshToken,
  RegisterProfile,
  ResourceType,
  UdfTargetType,
  UpdateUserInput,
  User,
  UserDefinedData
} from '../../types/graphql.v2';
import { QrCodeAuthenticationClient } from './QrCodeAuthenticationClient';
import { MfaAuthenticationClient } from './MfaAuthenticationClient';
import { HttpClient, NaiveHttpClient } from '../common/HttpClient';
import {
  convertObjectToKeyValueList,
  convertUdv,
  convertUdvToKeyValuePair,
  encrypt,
  formatAuthorizedResources,
  generateRandomString,
  uploadFile
} from '../utils';
import jwtDecode from 'jwt-decode';
import { DecodedAccessToken } from '../..';
import { SocialAuthenticationClient } from './SocialAuthenticationClient';
import { PublicKeyManager } from '../common/PublicKeyManager';
import { KeyValuePair } from '../../types';
import { EnterpriseAuthenticationClient } from './EnterpriseAuthenticationClient';
import { BaseAuthenticationClient } from './BaseAuthenticationClient';
import { ApplicationPublicDetail } from '../management/types';

const DEFAULT_OPTIONS: AuthenticationClientOptions = {
  appId: undefined,
  appHost: undefined,
  protocol: 'oidc', // 默认 oidc
  tokenEndPointAuthMethod: 'client_secret_post', // 默认 client_secret_post
  introspectionEndPointAuthMethod: 'client_secret_post', // 默认 client_secret_post
  revocationEndPointAuthMethod: 'client_secret_post',
  timeout: 10000,
  onError: (code: number, message: string, data: any) => {
    throw { code, message, data };
  },
  requestFrom: 'sdk',
  encryptFunction: encrypt,
  host: 'https://core.authing.cn'
};

/**
 * @class AuthenticationClient 认证核心模块
 * @description 此模块包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在需要验证用户身份的情况下使用。
 *
 * @example
 *
 * 使用方法：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * authenticationClient.registerByEmail // 使用邮箱注册
 * authenticationClient.loginByEmail // 使用邮箱登录
 * \`\`\`
 *
 *
 * @name AuthenticationClient
 */
export class AuthenticationClient {
  // 初始化参数
  options: AuthenticationClientOptions;

  baseClient: BaseAuthenticationClient;
  graphqlClient: GraphqlClient;
  httpClient: HttpClient;
  naiveHttpClient: NaiveHttpClient;
  tokenProvider: AuthenticationTokenProvider;
  wxqrcode: QrCodeAuthenticationClient;
  qrcode: QrCodeAuthenticationClient;
  mfa: MfaAuthenticationClient;
  social: SocialAuthenticationClient;
  enterprise: EnterpriseAuthenticationClient;
  private publicKeyManager: PublicKeyManager;

  constructor(options: AuthenticationClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.baseClient = new BaseAuthenticationClient(this.options);
    const graphqlEndpoint = `${this.baseClient.appHost}/graphql/v2`;
    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new (this.options.graphqlClient || GraphqlClient)(
      graphqlEndpoint,
      this.options
    );
    this.tokenProvider = new (this.options.tokenProvider ||
      AuthenticationTokenProvider)(this.options);
    this.httpClient = new (this.options.httpClient || HttpClient)(
      this.options,
      this.tokenProvider
    );
    this.naiveHttpClient = new NaiveHttpClient(
      this.options,
      this.tokenProvider
    );
    this.publicKeyManager = new PublicKeyManager(this.options, this.httpClient);
    this.wxqrcode = new QrCodeAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient,
      'WXAPP_AUTH'
    );
    this.qrcode = new QrCodeAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient,
      'APP_AUTH'
    );
    this.mfa = new MfaAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient
    );
    this.social = new SocialAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient
    );
    this.enterprise = new EnterpriseAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient
    );
    if (this.options.token) {
      this.setToken(this.options.token);
    }
  }

  checkLoggedIn() {
    const user = this.tokenProvider.getUser();

    if (user) {
      return user.id;
    }

    const token = this.tokenProvider.getToken();
    if (!token) {
      throw new Error('请先登录！');
    }
    const decoded: DecodedAccessToken = jwtDecode(token);
    const userId = decoded.sub || decoded.data?.id;
    if (!userId) {
      throw new Error('不合法的 accessToken');
    }
    return userId;
  }

  setCurrentUser(user: User) {
    this.tokenProvider.setUser(user);
  }

  setToken(token: string) {
    this.tokenProvider.setToken(token);
  }

  /**
   * @name registerByEmail
   * @name_zh 使用邮箱注册
   * @description 使用邮箱注册，此接口不要求用户对邮箱进行验证，用户注册之后 emailVerified 字段会为 false 。如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。
   *
   * @param {string} email 邮箱
   * @param {string} password 密码
   * @param {RegisterProfile} [profile] 用户资料
   * @param {Object} [options]
   * @param {boolean} [options.forceLogin] 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
   * @param {boolean} [options.generateToken] 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   * @example
   *
   * authenticationClient.registerByEmail(
   *  'test@example.com',
   *  'passw0rd',
   *  {
   *    nickname: 'Nick'
   *  },
   *  {
   *    generateToken: true
   *  }
   * )
   *
   * @example
   * authenticationClient.registerByEmail('test@example.com', 'passw0rd')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async registerByEmail(
    email: string,
    password: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
      generateToken?: boolean;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const {
      forceLogin = false,
      generateToken = false,
      clientIp,
      params,
      context,
      customData
    } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { registerByEmail: user } = await registerByEmail(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          email,
          password,
          profile,
          forceLogin,
          generateToken,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name registerByUsername
   * @name_zh 使用用户名注册
   * @description 使用用户名注册
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   * @param {RegisterProfile} [profile] 用户资料
   * @param {Object} [options]
   * @param {boolean} [options.forceLogin] 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
   * @param {boolean} [options.generateToken] 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   *
   * @example
   *
   * authenticationClient.registerByUsername(
   *  'bob',
   *  'passw0rd',
   *  {
   *    nickname: 'Nick'
   *  },
   *  {
   *    generateToken: true
   *  }
   * )
   *
   * @example
   * authenticationClient.registerByUsername('bob', 'passw0rd')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async registerByUsername(
    username: string,
    password: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
      generateToken?: boolean;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const {
      forceLogin = false,
      generateToken = false,
      clientIp,
      params,
      context,
      customData
    } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { registerByUsername: user } = await registerByUsername(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          username,
          password,
          profile,
          forceLogin,
          generateToken,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name registerByPhoneCode
   * @name_zh 使用手机号注册
   * @description 使用手机号注册，你可以同时设置该账号的初始密码。发送短信的接口请见 sendSmsCode
   *
   * @param {string} phone 手机号
   * @param {string} code 短信验证码
   * @param {string} password 初始密码
   * @param {RegisterProfile} [profile] 用户资料
   * @param {Object} [options]
   * @param {boolean} [options.forceLogin] 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
   * @param {boolean} [options.generateToken] 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   * @example
   *
   * authenticationClient.registerByPhoneCode(
   *  '176xxxx7041',
   *  '1234',
   *  'passw0rd',
   *  {
   *    nickname: 'Nick'
   *  },
   *  {
   *    generateToken: true
   *  }
   * )
   *
   * @example
   * authenticationClient.registerByPhoneCode('176xxxx7041', '1234')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async registerByPhoneCode(
    phone: string,
    code: string,
    password?: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
      generateToken?: boolean;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const {
      forceLogin = false,
      generateToken = false,
      clientIp,
      params,
      context,
      customData
    } = options;
    if (password) {
      password = await this.options.encryptFunction(
        password,
        await this.publicKeyManager.getPublicKey()
      );
    }
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { registerByPhoneCode: user } = await registerByPhoneCode(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          phone,
          code,
          password,
          profile,
          forceLogin,
          generateToken,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name checkPasswordStrength
   * @name_zh 检查密码强度
   * @description 检查密码强度，详情请见: https://docs.authing.co/security/config-user-pool-password-level.html
   *
   * @param {string} password
   * @example
   * authenticationClient.checkPasswordStrength('weak')
   *
   * @example
   * authenticationClient.checkPasswordStrength('strongPassw0rd!')
   *
   * @returns {Promise<CheckPasswordStrengthResult>}
   * @memberof AuthenticationClient
   */
  async checkPasswordStrength(
    password: string
  ): Promise<CheckPasswordStrengthResult> {
    const { checkPasswordStrength: result } = await checkPasswordStrength(
      this.graphqlClient,
      this.tokenProvider,
      { password }
    );
    return result;
  }

  /**
   * @name sendSmsCode
   * @name_zh 发送短信验证码
   * @description 发送短信验证码, 短信验证码的有效时间为 60 s。
   *
   * @param {string} phone
   * @example
   * authenticationClient.sendSmsCode('176xxxx6754')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AuthenticationClient
   */
  async sendSmsCode(phone: string): Promise<CommonMessage> {
    // TODO: 这种链接从服务器动态拉取
    const api = `${this.baseClient.appHost}/api/v2/sms/send`;
    const data = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: { phone }
    });

    return data;
  }

  /**
   * @name loginByEmail
   * @name_zh 使用邮箱登录
   * @description 使用邮箱登录，该接口默认不会限制未验证的邮箱进行登录，如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。
   *
   * 如果你的用户池配置了登录失败检测，当同一  IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。
   *
   * @param {string} email 邮箱
   * @param {string} password 密码
   * @param {Object} [options]
   * @param {boolean} [options.autoRegister] 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
   * @param {string} [options.captchaCode] 图形验证码
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   * @example
   *
   * authenticationClient.loginByEmail(
   *  'test@example.com',
   *  'passw0rd',
   *  {
   *    autoRegister: true，
   *    captchaCode: 'xj72'
   *  }
   * )
   *
   * @example
   * authenticationClient.loginByEmail('test@example.com', 'passw0rd')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByEmail(
    email: string,
    password: string,
    options?: {
      autoRegister?: boolean;
      captchaCode?: string;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    const {
      autoRegister = false,
      captchaCode,
      clientIp,
      params,
      context,
      customData
    } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { loginByEmail: user } = await loginByEmail(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          email,
          password,
          autoRegister,
          captchaCode,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name loginByUsername
   * @name_zh 使用用户名登录
   * @description 使用用户名登录。
   *
   * 如果你的用户池配置了登录失败检测，当同一  IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   * @param {Object} [options]
   * @param {boolean} [options.autoRegister] 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
   * @param {string} [options.captchaCode] 图形验证码
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   *
   * @example
   *
   * authenticationClient.loginByEmail(
   *  'test@example.com',
   *  'passw0rd',
   *  {
   *    autoRegister: true，
   *    captchaCode: 'xj72'
   *  }
   * )
   *
   * @example
   * authenticationClient.loginByEmail('test@example.com', 'passw0rd')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByUsername(
    username: string,
    password: string,
    options?: {
      autoRegister?: boolean;
      captchaCode?: string;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    const {
      autoRegister = false,
      captchaCode,
      clientIp,
      params,
      context,
      customData
    } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { loginByUsername: user } = await loginByUsername(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          username,
          password,
          autoRegister,
          captchaCode,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name loginByPhoneCode
   * @name_zh 使用手机号验证码登录
   * @description 使用手机号验证码登录。
   *
   *
   * @param {string} phone 手机号
   * @param {string} code 短信验证码
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   * @example
   *
   * authenticationClient.loginByPhoneCode(
   *  '176xxxx7041',
   *  '1234',
   * )
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByPhoneCode(
    phone: string,
    code: string,
    options?: {
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    const { clientIp, params, context, customData } = options;
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { loginByPhoneCode: user } = await loginByPhoneCode(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          phone,
          code,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name loginByPhonePassword
   * @name_zh 使用手机号密码登录
   * @description 使用手机号密码登录。
   *
   *
   * @param {string} phone 手机号
   * @param {string} password 密码
   * @param {Object} [options]
   * @param {string} [options.captchaCode] 图形验证码
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   * @example
   *
   * authenticationClient.loginByPhonePassword(
   *  '176xxxx7041',
   *  'passw0rd',
   *  {
   *    captchaCode: 'xj72'
   *  }
   * )
   *
   * @example
   * authenticationClient.loginByPhonePassword('176xxxx7041', 'passw0rd')
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByPhonePassword(
    phone: string,
    password: string,
    options?: {
      captchaCode?: string;
      autoRegister?: boolean;
      clientIp?: string;
      /**
       * @deprecated use customData instead
       */
      params?: Array<{ key: string; value: any }>;
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };
      /**
       * @description 请求上下文，将会传递到 Pipeline 中
       */
      context?: { [x: string]: any };
    }
  ): Promise<User> {
    options = options || {};
    const {
      captchaCode,
      autoRegister = false,
      clientIp,
      params,
      context,
      customData
    } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    let extraParams = null;
    if (customData) {
      extraParams = JSON.stringify(convertObjectToKeyValueList(customData));
    } else if (params) {
      extraParams = JSON.stringify(params);
    }
    let extraContext = null;
    if (context) {
      extraContext = JSON.stringify(context);
    }
    const { loginByPhonePassword: user } = await loginByPhonePassword(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: {
          phone,
          password,
          captchaCode,
          autoRegister,
          clientIp,
          params: extraParams,
          context: extraContext
        }
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  async loginBySubAccount(
    account: string,
    password: string,
    options?: {
      captchaCode?: string;
      clientIp?: string;
    }
  ): Promise<User> {
    options = options || {};
    const { captchaCode, clientIp } = options;
    password = await this.options.encryptFunction(
      password,
      await this.publicKeyManager.getPublicKey()
    );
    const { loginBySubAccount: user } = await loginBySubAccount(
      this.graphqlClient,
      this.tokenProvider,
      {
        account,
        password,
        captchaCode,
        clientIp
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name checkLoginStatus
   * @name_zh 检测 Token 登录状态
   * @description 检测 Token 登录状态
   *
   * @param {string} token 用户的登录凭证 token
   *
   * @example
   *
   * authenticationClient.checkLoginStatus('TOKEN')
   *
   * @returns {Promise<JwtTokenStatus>}
   * @memberof AuthenticationClient
   */
  async checkLoginStatus(token?: string): Promise<JwtTokenStatus> {
    const res = await checkLoginStatus(this.graphqlClient, this.tokenProvider, {
      token
    });
    return res.checkLoginStatus;
  }

  /**
   * @name sendEmail
   * @name_zh 发送邮件
   * @description 发送邮件
   *
   * @param {string} email 邮箱
   * @param {EmailScene} scene 发送场景，可选值为 RESET_PASSWORD（发送重置密码邮件，邮件中包含验证码）、VerifyEmail（发送验证邮箱的邮件）、ChangeEmail（发送修改邮箱邮件，邮件中包含验证码）
   *
   * @example
   *
   * import { EmailScene } from "authing-js-sdk"
   * authenticationClient.sendEmail('test@example.com', EmailScene.RESET_PASSWORD)
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AuthenticationClient
   */
  async sendEmail(email: string, scene: EmailScene): Promise<CommonMessage> {
    const { sendEmail: data } = await sendEmail(
      this.graphqlClient,
      this.tokenProvider,
      { email, scene }
    );
    return data;
  }

  /**
   * @name resetPasswordByPhoneCode
   * @name_zh 通过短信验证码重置密码
   * @description 通过短信验证码重置密码，你需要先调用 sendSmsCode 接口发送重置密码邮件。
   *
   * @param {string} phone 手机号
   * @param {string} code 验证码
   * @param {string} newPassword 新的密码
   *
   * @example
   *
   * authenticationClient.resetPasswordByPhoneCode('176xxxx7041', '1234', 'passw0rd')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AuthenticationClient
   */
  async resetPasswordByPhoneCode(
    phone: string,
    code: string,
    newPassword: string
  ): Promise<CommonMessage> {
    newPassword = await this.options.encryptFunction(
      newPassword,
      await this.publicKeyManager.getPublicKey()
    );
    const { resetPassword: data } = await resetPassword(
      this.graphqlClient,
      this.tokenProvider,
      {
        phone,
        code,
        newPassword
      }
    );
    return data;
  }

  /**
   * @name resetPasswordByEmailCode
   * @name_zh 通过邮件验证码重置密码
   * @description 通过邮件验证码重置密码，你需要先调用 sendEmail 接口发送重置密码邮件。
   *
   * @param {string} phone 手机号
   * @param {string} code 验证码
   * @param {string} newPassword 新的密码
   *
   * @example
   *
   * authenticationClient.resetPasswordByEmailCode('test@example.com', '1234', 'passw0rd')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AuthenticationClient
   */
  async resetPasswordByEmailCode(
    email: string,
    code: string,
    newPassword: string
  ): Promise<CommonMessage> {
    newPassword = await this.options.encryptFunction(
      newPassword,
      await this.publicKeyManager.getPublicKey()
    );
    const { resetPassword: data } = await resetPassword(
      this.graphqlClient,
      this.tokenProvider,
      {
        email,
        code,
        newPassword
      }
    );
    return data;
  }

  /**
   * @name updateProfile
   * @name_zh 修改用户资料
   * @description 修改用户资料，此接口不能用于修改手机号、邮箱、密码，如果需要请调用 updatePhone、updateEmail、updatePassword 接口。
   *
   * @param {UpdateUserInput} updates 修改的用户资料
   * @param {string} updates.username 用户名
   * @param {string} updates.nickname 昵称
   * @param {string} updates.photo 头像
   * @param {string} updates.company 公司
   * @param {string} updates.browser 浏览器
   * @param {string} updates.device 设备
   * @param {string} updates.lastIP 最近登录的 IP
   * @param {string} updates.name Name
   * @param {string} updates.givenName Given Name
   * @param {string} updates.familyName Family Name
   * @param {string} updates.middleName Middle Name
   * @param {string} updates.profile Profile Url
   * @param {string} updates.preferredUsername Preferred Name
   * @param {string} updates.website 个人网站
   * @param {string} updates.gender 性别, F 表示男性、W 表示女性、未知表示 U
   * @param {string} updates.birthdate 生日
   * @param {string} updates.zoneinfo 时区
   * @param {string} updates.locale 语言
   * @param {string} updates.address 地址
   * @param {string} updates.streetAddress 街道地址
   * @param {string} updates.locality
   * @param {string} updates.region 地域
   * @param {string} updates.postalCode 邮编
   * @param {string} updates.city 城市
   * @param {string} updates.province 省份
   * @param {string} updates.country 国家
   *
   * @example
   *
   * authenticationClient.updateProfile({
   *  nickname: "Nick",
   *  lastIp: "111.111.111.111"
   * })
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async updateProfile(updates: UpdateUserInput): Promise<User> {
    const userId = this.checkLoggedIn();
    if (updates && updates.password) {
      delete updates.password;
    }
    const { updateUser: updated } = await updateUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId,
        input: updates
      }
    );
    this.setCurrentUser(updated);
    return updated;
  }

  /**
   * @name updatePassword
   * @name_zh 更新用户密码
   * @description 更新用户密码
   *
   * @param {string} newPassword 新密码
   * @param {string} [oldPassword] 旧密码，如果用户没有设置密码，可以不填。
   *
   * @example
   *
   * authenticationClient.updatePassword('passw0rd') // 由手机号、社会化登录等其他方式注册的，首次没有设置密码，oldPassword 留空。
   *
   * @example
   *
   * authenticationClient.updatePassword('passw0rd', 'oldPassw0rd') // 用户之前设置了密码
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async updatePassword(
    newPassword: string,
    oldPassword?: string
  ): Promise<User> {
    newPassword =
      newPassword &&
      (await this.options.encryptFunction(
        newPassword,
        await this.publicKeyManager.getPublicKey()
      ));
    oldPassword =
      oldPassword &&
      (await this.options.encryptFunction(
        oldPassword,
        await this.publicKeyManager.getPublicKey()
      ));

    const { updatePassword: user } = await updatePassword(
      this.graphqlClient,
      this.tokenProvider,
      {
        newPassword,
        oldPassword
      }
    );
    return user;
  }

  /**
   * @name updatePhone
   * @name_zh 更新用户手机号
   * @description 更新用户手机号。和修改邮箱一样，默认情况下，如果用户当前已经绑定了手机号，需要同时验证原有手机号（目前账号绑定的手机号）和当前邮箱（将要绑定的手机号）。
   * 也就是说，用户 A 当前绑定的手机号为 15888888888，想修改为 15899999999，那么就需要同时验证这两个手机号。
   * 开发者也可以选择不开启 “验证原有手机号“ ，可以在 Authing 控制台 的 设置目录下的安全信息模块进行关闭。
   * 用户首次绑定手机号请使用 bindPhone 接口。
   *
   * @param {string} phone 新手机号
   * @param {string} phoneCode 新手机号的验证码
   * @param {string} [oldPhone] 旧手机号
   * @param {string} [oldPhoneCode] 旧手机号的验证码
   *
   * @example
   *
   * authenticationClient.updatePhone('176xxxx7041', '1234') // 关闭了“验证原有手机号“选项
   *
   * @example
   *
   * authenticationClient.updatePhone('176xxxx7041', '1234', '156xxxx9876', '1234') // 开启了“验证原有手机号“选项
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async updatePhone(
    phone: string,
    phoneCode: string,
    oldPhone?: string,
    oldPhoneCode?: string
  ): Promise<User> {
    const { updatePhone: user } = await updatePhone(
      this.graphqlClient,
      this.tokenProvider,
      {
        phone,
        phoneCode,
        oldPhone,
        oldPhoneCode
      }
    );
    return user;
  }

  /**
   * @name updateEmail
   * @name_zh 更新用户邮箱
   * @description 如果用户已经绑定了邮箱，默认情况下，需要同时验证原有邮箱（目前账号绑定的邮箱）和当前邮箱（将要绑定的邮箱）。也就是说，用户 A 当前绑定的邮箱为 123456@qq.com，想修改为 1234567@qq.com，那么就需要同时验证这两个邮箱。
   * 开发者也可以选择不开启 “验证原有邮箱“ ，可以在 Authing 控制台 的 设置目录下的安全信息模块进行关闭。
   * 用户首次绑定手机号请使用 bindEmail 接口。
   *
   * @param {string} email 新邮箱
   * @param {string} emailCode 新邮箱的验证码
   * @param {string} [oldEmail] 旧邮箱
   * @param {string} [oldEmailCode] 旧邮箱的验证码
   *
   * @example
   *
   * authenticationClient.updateEmail('test@example.com', '1234') // 关闭了“验证原有邮箱“选项
   *
   * @example
   *
   * authenticationClient.updateEmail('test@example.com', '1234', 'test2@example.com', '1234') // 开启了“验证原有邮箱“选项
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async updateEmail(
    email: string,
    emailCode: string,
    oldEmail?: string,
    oldEmailCode?: string
  ): Promise<User> {
    const { updateEmail: user } = await updateEmail(
      this.graphqlClient,
      this.tokenProvider,
      {
        email,
        emailCode,
        oldEmail,
        oldEmailCode
      }
    );
    return user;
  }

  /**
   * @name refreshToken
   * @name_zh 刷新当前用户的 token
   * @description 刷新当前用户的 token，调用此接口要求先登录。
   *
   * @example
   *
   * authenticationClient.updateEmail()
   *
   * @returns {Promise<RefreshToken>}
   * @memberof AuthenticationClient
   */
  async refreshToken(): Promise<RefreshToken> {
    const { refreshToken: data } = await refreshToken(
      this.graphqlClient,
      this.tokenProvider,
      {}
    );
    this.setToken(data.token);
    return data;
  }

  /**
   * @name linkAccount
   * @name_zh 关联账号
   * @description 将社交账号绑定到主账号（手机号、邮箱账号）。
   *
   * @param {Object} options
   * @param {string} options.primaryUserToken 主账号 Token
   * @param {string} options.secondaryUserToken 社交账号 Token
   *
   * @example
   *
   * authenticationClient.linkAccount({ primaryUserToken: '', secondaryUserToken: '' })
   *
   * @returns {{code: 200, message: "绑定成功"}}
   * @memberof AuthenticationClient
   */
  async linkAccount(options: {
    primaryUserToken: string;
    secondaryUserToken: string;
  }): Promise<{ code: number; message: string }> {
    await this.httpClient.request({
      method: 'POST',
      url: `${this.baseClient.appHost}/api/v2/users/link`,
      data: {
        primaryUserToken: options.primaryUserToken,
        secondaryUserToken: options.secondaryUserToken
      }
    });
    return { code: 200, message: '绑定成功' };
  }

  /**
   * @name unLinkAccount
   * @name_zh 解除账号绑定
   * @description 将社交账号从主账号（手机号、邮箱账号）解绑。
   *
   * @param {Object} options
   * @param {string} options.primaryUserToken 主账号 Token
   * @param {string} options.provider 社交账号的提供商名称
   *
   * @example
   *
   * authenticationClient.unLinkAccount({ primaryUserToken: '', provider: 'wechat:pc' })
   *
   * @returns {{code: 200, message: "解绑成功"}}
   * @memberof AuthenticationClient
   */
  async unLinkAccount(options: {
    primaryUserToken: string;
    provider: ProviderType;
  }) {
    await this.httpClient.request({
      method: 'POST',
      url: `${this.baseClient.appHost}/api/v2/users/unlink`,
      data: {
        primaryUserToken: options.primaryUserToken,
        provider: options.provider
      }
    });
    return { code: 200, message: '解绑成功' };
  }

  /**
   * @name bindPhone
   * @name_zh 绑定手机号
   * @description 用户初次绑定手机号，如果需要修改手机号请使用 updatePhone 接口。
   *
   * @param {string} phone
   * @param {string} phoneCode
   *
   * @example
   *
   * authenticationClient.bindPhone('176xxxx7041', '1234')
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async bindPhone(phone: string, phoneCode: string): Promise<User> {
    const { bindPhone: user } = await bindPhone(
      this.graphqlClient,
      this.tokenProvider,
      {
        phone,
        phoneCode
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name unbindPhone
   * @name_zh 解绑手机号
   * @description 用户解绑手机号
   *
   * @example
   *
   * authenticationClient.unbindPhone()
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async unbindPhone(): Promise<User> {
    const { unbindPhone: user } = await unbindPhone(
      this.graphqlClient,
      this.tokenProvider,
      {}
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name bindEmail
   * @name_zh 绑定邮箱号
   * @description 用户邮箱号
   *
   * @param {string} email
   * @param {string} emailCode
   *
   * @example
   *
   * authenticationClient.bindEmail('test@example.com', '1234')
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async bindEmail(email: string, emailCode: string): Promise<User> {
    const { bindEmail: user } = await bindEmail(
      this.graphqlClient,
      this.tokenProvider,
      {
        email,
        emailCode
      }
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name unbindEmail
   * @name_zh 解绑邮箱号
   * @description 用户解绑邮箱号
   *
   * @example
   *
   * authenticationClient.unbindPhone()
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async unbindEmail(): Promise<User> {
    const { unbindEmail: user } = await unbindEmail(
      this.graphqlClient,
      this.tokenProvider,
      {}
    );
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name getCurrentUser
   * @name_zh 获取当前登录的用户信息
   * @description 获取当前登录的用户信息
   *
   * @example
   *
   * authenticationClient.getCurrentUser()
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const { user: data } = await user(
        this.graphqlClient,
        this.tokenProvider,
        {}
      );
      this.setCurrentUser(data);
      return data;
    } catch {
      return null;
    }
  }

  /**
   * @name logout
   * @name_zh 退出登录
   * @description 退出登录，清空 localStorage 里的 user 和 token
   *
   * @example
   *
   * authenticationClient.logout()
   *
   * @returns {null}
   * @memberof AuthenticationClient
   */
  public async logout() {
    await this.httpClient.request({
      method: 'GET',
      url: `${this.baseClient.appHost}/api/v2/logout?app_id=${this.options.appId}`,
      withCredentials: true
    });
    this.tokenProvider.clearUser();
  }

  /**
   * @name listUdv
   * @name_zh 获取当前用户的自定义数据列表
   * @description 获取当前用户的自定义数据列表
   *
   * @example
   *
   * authenticationClient.listUdv()
   *
   * @returns {Promise<Array<UserDefinedData>>}
   * @memberof AuthenticationClient
   */
  async listUdv(): Promise<Array<UserDefinedData>> {
    const userId = this.checkLoggedIn();
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId
    });
    return convertUdv(list);
  }

  /**
   * @name setUdv
   * @name_zh 添加自定义数据
   * @description 添加自定义数据
   *
   * @param {string} key 自定义字段的 key
   * @param {any} value 自定义数据的值，值的类型必须要和用户池定义的自定义字段类型一致。
   *
   * @example
   *
   * authenticationClient.setUdv('school', '清华大学') // 要求用户必须定义了 school 这个字段。
   *
   * @returns {Promise<Array<UserDefinedData>>}
   * @memberof AuthenticationClient
   */
  async setUdv(key: string, value: any): Promise<Array<UserDefinedData>> {
    const userId = this.checkLoggedIn();
    value = JSON.stringify(value);
    const { setUdv: list } = await setUdv(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.User,
        targetId: userId,
        key,
        value
      }
    );
    return convertUdv(list);
  }

  /**
   * @name removeUdv
   * @name_zh 删除自定义数据
   * @description 删除自定义数据
   *
   * @param key 自定义字段的 key
   *
   * @example
   *
   * authenticationClient.removeUdv('school')
   *
   *
   * @returns {Promise<Array<UserDefinedData>>}
   * @memberof AuthenticationClient
   */
  async removeUdv(key: string): Promise<Array<UserDefinedData>> {
    const userId = this.checkLoggedIn();
    const { removeUdv: list } = await removeUdv(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.User,
        targetId: userId,
        key
      }
    );
    return convertUdv(list);
  }

  /**
   * @name listOrg
   * @name_zh 获取用户所在组织机构
   * @description 获取用户所在的组织机构立碑，以及他所属的节点在此组织机构内的完整路径。
   *
   * @example
   *
   * const data = await authenticationClient.listOrgs();
   *
   * @returns {Promise<UserOrgList>}
   *
   * @memberof AuthenticationClient
   */
  async listOrgs() {
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.baseClient.appHost}/api/v2/users/me/orgs`
    });
  }

  /**
   * @name loginByLdap
   * @name_zh 使用 LDAP 用户名登录
   * @description 使用 LDAP 用户名登录。
   *
   * 如果你的用户池配置了登录失败检测，当同一  IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   * @param {Object} [options]
   * @param {boolean} [options.autoRegister] 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
   * @param {string} [options.captchaCode] 图形验证码
   * @param {string} [options.clientIp] 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。
   *
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *   appId: '应用 ID'
   * })
   *
   * authenticationClient.loginByLdap(
   *  'admin',
   *  'admin',
   * )
   *
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByLdap(
    username: string,
    password: string,
    options?: {
      autoRegister?: boolean;
      captchaCode?: string;
      clientIp?: string;
    }
  ): Promise<User> {
    options = options || {};
    const api = `${this.baseClient.appHost}/api/v2/ldap/verify-user`;

    const user = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        username,
        password
      }
    });
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @name loginByAd
   * @name_zh 使用 AD 用户名登录
   * @description 使用 AD 用户名登录。
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   *
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *   appId: '应用 ID'
   * })
   *
   * authenticationClient.loginByAd(
   *  'admin',
   *  'admin',
   * )
   *
   * @returns {Promise<User>}
   * @memberof AuthenticationClient
   */
  async loginByAd(username: string, password: string): Promise<User> {
    const firstLevelDomain = new URL(this.baseClient.appHost).hostname
      .split('.')
      .slice(1)
      .join('.');
    const websocketHost =
      this.options.websocketHost || `https://ws.${firstLevelDomain}`;
    const api = `${websocketHost}/api/v2/ad/verify-user`;

    const user = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        username,
        password
      }
    });
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @description 上传图片
   */
  private uploadPhoto(accept: string, cb: (src: string) => void) {
    accept = accept || 'image/*';
    const authing = this;
    uploadFile({
      accept,
      url: `${this.baseClient.appHost}/api/v2/upload?folder=avatar`
    })
      .then(({ url }) => cb(url))
      .catch(({ code, message }) => authing.options.onError(code, message));
  }

  /**
   * @deprecated use uploadAvatar instead
   * @description 更新用户头像
   */
  public async updateAvatar(options?: { accept?: string }) {
    return await this.uploadAvatar(options);
  }

  /**
   * @description 一键上传图片并更新用户头像
   *
   * @param {Object} options
   * @param {string} options.accept 支持的图片格式，默认为 'image/*'
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *   appId: 'APP_ID',
   *   appHost: 'https://xxx.authing.cn'
   * })
   *
   * // 会自动打开浏览器文件上传框，并自动完成图片文件上传 CDN、修改用户头像操作。
   * authenticationClient.uploadAvatar()
   *
   * // 只支持 png 格式图片
   * authenticationClient.uploadAvatar({
   *   accept: '.png'
   * })
   *
   * @returns
   */
  public async uploadAvatar(options?: { accept?: string }) {
    const { accept } = options || {};
    this.checkLoggedIn();

    // TODO: 设置超时时间
    const task = new Promise(resolve => {
      this.uploadPhoto(accept, src => {
        resolve(src);
      });
    });

    // @ts-ignore
    const src: string = await task;
    const user = await this.updateProfile({ photo: src });
    this.setCurrentUser(user);
    return user;
  }

  /**
   * @description 获取当前用户的所有自定义数据
   *
   */
  public async getUdfValue() {
    const userId = this.checkLoggedIn();
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId
    });
    return convertUdvToKeyValuePair(list);
  }

  /**
   * @description 设置自定义字段值
   *
   */
  public async setUdfValue(data: KeyValuePair) {
    if (Object.keys(data).length === 0) {
      throw new Error('empty udf value list');
    }
    const userId = this.checkLoggedIn();
    await setUdvBatch(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId,
      udvList: Object.keys(data).map(key => ({
        key,
        value: JSON.stringify(data[key])
      }))
    });
  }

  /**
   * @description 删除用户自定义数据
   */
  public async removeUdfValue(key: string) {
    const userId = this.checkLoggedIn();
    await removeUdv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: userId,
      key
    });
  }

  /**
   * @name getSecurityLevel
   * @name_zh 用户安全等级
   * @description 获取用户的安全等级评分
   *
   * @example
   *
   * const data = await authenticationClient.getSecurityLevel();
   *
   * @returns {Promise<SecurityLevel>}
   *
   * @memberof AuthenticationClient
   */
  async getSecurityLevel(): Promise<SecurityLevel> {
    return await this.httpClient.request({
      method: 'GET',
      url: `${this.baseClient.appHost}/api/v2/users/me/security-level`
    });
  }

  /**
   * @description 获取用户被授权的所有资源
   *
   * @param userId
   * @param namespace
   */
  public async listAuthorizedResources(
    namespace: string,
    options?: {
      resourceType?: ResourceType;
    }
  ): Promise<PaginatedAuthorizedResources> {
    const userId = this.checkLoggedIn();
    const { resourceType } = options || {};
    const { user } = await listUserAuthorizedResources(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId,
        namespace,
        resourceType
      }
    );
    if (!user) {
      throw new Error('用户不存在');
    }
    let {
      authorizedResources: { list, totalCount }
    } = user;
    list = formatAuthorizedResources(list);
    return {
      list,
      totalCount
    };
  }

  /**
   * @name computedPasswordSecurityLevel
   * @name_zh 计算密码安全等级
   * @description 计算密码安全等级
   *
   * @example
   *
   * const data = authenticationClient.computedPasswordSecurityLevel('xxxxxxxx');
   *
   * @returns {PasswordSecurityLevel}
   *
   * @memberof AuthenticationClient
   */
  public computedPasswordSecurityLevel(
    password: string
  ): PasswordSecurityLevel {
    if (typeof password !== 'string') {
      throw 'password must be a `string`';
    }

    const highLevel = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{12,}$/g);
    const middleLevel = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)[^]{8,}$/g);
    if (password.match(highLevel) !== null) {
      return PasswordSecurityLevel.HIGH;
    }
    if (password.match(middleLevel) !== null) {
      return PasswordSecurityLevel.MIDDLE;
    }
    return PasswordSecurityLevel.LOW;
  }
  _generateTokenRequest(params: { [x: string]: string }) {
    let p = new URLSearchParams(params);
    return p.toString();
  }
  _generateBasicAuthToken(appId?: string, secret?: string) {
    let id = appId || this.options.appId;
    let s = secret || this.options.secret;
    let token = 'Basic ' + Buffer.from(id + ':' + s).toString('base64');
    return token;
  }
  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  async _getAccessTokenByCodeWithClientSecretPost(
    code: string,
    codeVerifier?: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.secret,
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier
    });
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return tokenSet;
  }
  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  async _getAccessTokenByCodeWithClientSecretBasic(
    code: string,
    codeVerifier?: string
  ) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier
    });
    let tokenSet = await this.naiveHttpClient.request({
      data: qstr,
      method: 'POST',
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken()
      }
    });
    return tokenSet;
  }
  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  async _getAccessTokenByCodeWithNone(code: string, codeVerifier?: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier
    });
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr
    });
    return tokenSet;
  }
  async getAccessTokenByCode(
    code: string,
    options?: { codeVerifier?: string }
  ) {
    if (!['oauth', 'oidc'].includes(this.options.protocol)) {
      throw new Error(
        '初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数'
      );
    }
    if (
      !this.options.secret &&
      this.options.tokenEndPointAuthMethod !== 'none'
    ) {
      throw new Error(
        '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数'
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'client_secret_post') {
      return await this._getAccessTokenByCodeWithClientSecretPost(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'client_secret_basic') {
      return await this._getAccessTokenByCodeWithClientSecretBasic(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'none') {
      return await this._getAccessTokenByCodeWithNone(
        code,
        options?.codeVerifier
      );
    }
  }
  generateCodeChallenge() {
    return generateRandomString(43);
  }
  getCodeChallengeDigest(options: {
    codeChallenge: string;
    method: 'S256' | 'plain';
  }) {
    if (!options) {
      throw new Error(
        '请提供 options 参数，options.codeChallenge 为一个长度大于等于 43 的字符串，options.method 可选值为 S256、plain'
      );
    }
    if (!options.codeChallenge) {
      throw new Error(
        '请提供 options.codeChallenge，值为一个长度大于等于 43 的字符串'
      );
    }
    const { method = 'S256' } = options;
    if (method === 'S256') {
      // url safe base64
      return sha256(options.codeChallenge).toString(CryptoJS.enc.Base64).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    if (method === 'plain') {
      return options.codeChallenge;
    }
    throw new Error('不支持的 options.method，可选值为 S256、plain');
  }
  async getAccessTokenByClientCredentials(
    scope: string,
    options?: {
      accessKey: string;
      accessSecret: string;
    }
  ) {
    if (!scope) {
      throw new Error(
        '请传入 scope 参数，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html'
      );
    }
    if (!options) {
      throw new Error(
        '请在调用本方法时传入 { accessKey: string, accessSecret: string }，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html'
        // '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数或者在调用本方法时传入 { accessKey: string, accessSecret: string }，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html'
      );
    }
    let i = options?.accessKey || this.options.appId;
    let s = options?.accessSecret || this.options.secret;
    const qstr = this._generateTokenRequest({
      client_id: i,
      client_secret: s,
      grant_type: 'client_credentials',
      scope: scope
    });
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return tokenSet;
  }
  async getUserInfoByAccessToken(accessToken: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/me`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/me`;
    }
    let userInfo = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    return userInfo;
  }
  buildAuthorizeUrl(options?: IOidcParams | IOauthParams | ICasParams) {
    if (!this.baseClient.appHost) {
      throw new Error(
        '请在初始化 AuthenticationClient 时传入应用域名 appHost 参数，形如：https://app1.authing.cn'
      );
    }
    if (this.options.protocol === 'oidc') {
      return this._buildOidcAuthorizeUrl(options as IOidcParams);
    }
    if (this.options.protocol === 'oauth') {
      return this._buildOauthAuthorizeUrl(options as IOauthParams);
    }
    if (this.options.protocol === 'saml') {
      return this._buildSamlAuthorizeUrl();
    }
    if (this.options.protocol === 'cas') {
      return this._buildCasAuthorizeUrl(options as ICasParams);
    }
    throw new Error(
      '不支持的协议类型，请在初始化 AuthenticationClient 时传入 protocol 参数，可选值为 oidc、oauth、saml、cas'
    );
  }
  _buildOidcAuthorizeUrl(options: IOidcParams) {
    let map: any = {
      appId: 'client_id',
      scope: 'scope',
      state: 'state',
      nonce: 'nonce',
      responseMode: 'response_mode',
      responseType: 'response_type',
      redirectUri: 'redirect_uri',
      codeChallenge: 'code_challenge',
      codeChallengeMethod: 'code_challenge_method'
    };
    let res: any = {
      nonce: Math.random()
        .toString()
        .slice(2),
      state: Math.random()
        .toString()
        .slice(2),
      scope: 'openid profile email phone address',
      client_id: this.options.appId,
      redirect_uri: this.options.redirectUri,
      response_type: 'code'
    };
    Object.keys(map).forEach(k => {
      if (options && (options as any)[k]) {
        if (k === 'scope' && options.scope.includes('offline_access')) {
          res.prompt = 'consent';
        }
        res[map[k]] = (options as any)[k];
      }
    });
    let params = new URLSearchParams(res);
    let authorizeUrl =
      this.baseClient.appHost + '/oidc/auth?' + params.toString();
    return authorizeUrl;
  }
  _buildOauthAuthorizeUrl(options: IOauthParams) {
    let map: any = {
      appId: 'client_id',
      scope: 'scope',
      state: 'state',
      responseType: 'response_type',
      redirectUri: 'redirect_uri'
    };
    let res: any = {
      state: Math.random()
        .toString()
        .slice(2),
      scope: 'user',
      client_id: this.options.appId,
      redirect_uri: this.options.redirectUri,
      response_type: 'code'
    };
    Object.keys(map).forEach(k => {
      if (options && (options as any)[k]) {
        res[map[k]] = (options as any)[k];
      }
    });
    let params = new URLSearchParams(res);

    let authorizeUrl =
      this.baseClient.appHost + '/oauth/auth?' + params.toString();
    return authorizeUrl;
  }

  _buildSamlAuthorizeUrl() {
    return this.baseClient.appHost + '/api/v2/saml-idp/' + this.options.appId;
  }
  _buildCasAuthorizeUrl(options: ICasParams) {
    if (options?.service) {
      return `${this.baseClient.appHost}/cas-idp/${this.options.appId}?service=${options?.service}`;
    }
    return `${this.baseClient.appHost}/cas-idp/${this.options.appId}`;
  }
  _buildCasLogoutUrl(options: ILogoutParams) {
    if (options?.redirectUri) {
      return (
        this.baseClient.appHost + '/cas-idp/logout?url=' + options.redirectUri
      );
    }
    return `${this.baseClient.appHost}/cas-idp/logout`;
  }
  _buildOidcLogoutUrl(options: ILogoutParams) {
    if (options && !(options.idToken && options.redirectUri)) {
      throw new Error(
        '必须同时传入 idToken 和 redirectUri 参数，或者同时都不传入'
      );
    }
    if (options?.redirectUri) {
      return `${this.baseClient.appHost}/oidc/session/end?id_token_hint=${options.idToken}&post_logout_redirect_uri=${options.redirectUri}`;
    }
    return `${this.baseClient.appHost}/oidc/session/end`;
  }
  _buildEasyLogoutUrl(options?: ILogoutParams) {
    if (options?.redirectUri) {
      return `${this.baseClient.appHost}/login/profile/logout?redirect_uri=${options.redirectUri}`;
    }
    return `${this.baseClient.appHost}/login/profile/logout`;
  }
  buildLogoutUrl(options?: ILogoutParams) {
    if (this.options.protocol === 'cas') {
      return this._buildCasLogoutUrl(options);
    }
    if (this.options.protocol === 'oidc' && options?.expert) {
      return this._buildOidcLogoutUrl(options);
    }
    return this._buildEasyLogoutUrl(options);
  }
  async _getNewAccessTokenByRefreshTokenWithClientSecretPost(
    refreshToken: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.secret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    });
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return tokenSet;
  }
  async _getNewAccessTokenByRefreshTokenWithClientSecretBasic(
    refreshToken: string
  ) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    });
    let tokenSet = await this.naiveHttpClient.request({
      data: qstr,
      method: 'POST',
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken()
      }
    });
    return tokenSet;
  }
  async _getNewAccessTokenByRefreshTokenWithNone(refreshToken: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    });
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr
    });
    return tokenSet;
  }
  async getNewAccessTokenByRefreshToken(refreshToken: string) {
    if (!['oauth', 'oidc'].includes(this.options.protocol)) {
      throw new Error(
        '初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数'
      );
    }
    if (
      !this.options.secret &&
      this.options.tokenEndPointAuthMethod !== 'none'
    ) {
      throw new Error(
        '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数'
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'client_secret_post') {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretPost(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'client_secret_basic') {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretBasic(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === 'none') {
      return await this._getNewAccessTokenByRefreshTokenWithNone(refreshToken);
    }
  }

  async _revokeTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.secret,
      token
    });
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/revocation`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token/revocation`;
    }
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return tokenSet;
  }
  async _revokeTokenWithClientSecretBasic(token: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/revocation`;
    } else if (this.options.protocol === 'oauth') {
      throw new Error(
        'OAuth 2.0 暂不支持用 client_secret_basic 模式身份验证撤回 Token'
      );
      api = `${this.baseClient.appHost}/oauth/token/revocation`;
    }
    const qstr = this._generateTokenRequest({
      token: token
    });
    let result = await this.naiveHttpClient.request({
      data: qstr,
      method: 'POST',
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken()
      }
    });
    return result;
  }
  async _revokeTokenWithNone(token: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/revocation`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token/revocation`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token
    });
    let result = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr
    });
    return result;
  }
  async revokeToken(token: string) {
    if (!['oauth', 'oidc'].includes(this.options.protocol)) {
      throw new Error(
        '初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数'
      );
    }
    if (
      !this.options.secret &&
      this.options.revocationEndPointAuthMethod !== 'none'
    ) {
      throw new Error(
        '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数'
      );
    }
    if (this.options.revocationEndPointAuthMethod === 'client_secret_post') {
      await this._revokeTokenWithClientSecretPost(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === 'client_secret_basic') {
      await this._revokeTokenWithClientSecretBasic(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === 'none') {
      await this._revokeTokenWithNone(token);
      return true;
    }
    throw new Error(
      '初始化 AuthenticationClient 时传入的 revocationEndPointAuthMethod 参数可选值为 client_secret_base、client_secret_post、none，请检查参数'
    );
  }

  async _introspectTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.secret,
      token
    });
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/introspection`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token/introspection`;
    }
    let tokenSet = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return tokenSet;
  }
  async _introspectTokenWithClientSecretBasic(token: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/introspection`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      token: token
    });
    let result = await this.naiveHttpClient.request({
      data: qstr,
      method: 'POST',
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken()
      }
    });
    return result;
  }
  async _introspectTokenWithNone(token: string) {
    let api = '';
    if (this.options.protocol === 'oidc') {
      api = `${this.baseClient.appHost}/oidc/token/introspection`;
    } else if (this.options.protocol === 'oauth') {
      api = `${this.baseClient.appHost}/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token
    });
    let result = await this.naiveHttpClient.request({
      method: 'POST',
      url: api,
      data: qstr
    });
    return result;
  }
  async introspectToken(token: string) {
    if (!['oauth', 'oidc'].includes(this.options.protocol)) {
      throw new Error(
        '初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数'
      );
    }
    if (
      !this.options.secret &&
      this.options.introspectionEndPointAuthMethod !== 'none'
    ) {
      throw new Error(
        '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数'
      );
    }
    if (this.options.introspectionEndPointAuthMethod === 'client_secret_post') {
      return await this._introspectTokenWithClientSecretPost(token);
    }
    if (
      this.options.introspectionEndPointAuthMethod === 'client_secret_basic'
    ) {
      return await this._introspectTokenWithClientSecretBasic(token);
    }
    if (this.options.introspectionEndPointAuthMethod === 'none') {
      return await this._introspectTokenWithNone(token);
    }
    throw new Error(
      '初始化 AuthenticationClient 时传入的 introspectionEndPointAuthMethod 参数可选值为 client_secret_base、client_secret_post、none，请检查参数'
    );
  }
  async validateTicketV1(ticket: string, service: string) {
    const api = `${this.baseClient.appHost}/cas-idp/${this.options.appId}/validate`;
    let result = await this.naiveHttpClient.request({
      method: 'GET',
      url: api,
      params: {
        service,
        ticket
      }
    });
    const [valid, username] = result.split('\n');
    return {
      valid: valid === 'yes',
      ...(username && { username }),
      ...(valid !== 'yes' && { message: 'ticket 不合法' })
    };
  }

  /**
   * 判断 "我" 是否有某个角色
   * @param roleCode 角色 Code
   * @param namespace 权限分组 ID
   */
  public async hasRole(roleCode: string, namespace?: string): Promise<boolean> {
    const { user } = await getUserRoles(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: this.checkLoggedIn(),
        namespace
      }
    );
    if (!user) {
      return false;
    }

    const roleList = user.roles;

    if (roleList.totalCount < 1) {
      return false;
    }

    let hasRole: boolean = false;

    roleList.list.forEach(item => {
      if (item.code === roleCode) {
        hasRole = true;
      }
    });

    return hasRole;
  }

  /**
   * @description 获取当前用户能够访问的应用
   */
  public async listApplications(params?: {
    page: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    list: ApplicationPublicDetail[];
  }> {
    const { page = 1, limit = 10 } = params || {};
    const data = await this.httpClient.request({
      url: `${this.baseClient.appHost}/api/v2/users/me/applications/allowed?page=${page}&limit=${limit}`,
      method: 'GET'
    });
    return data;
  }

  /**
   * @description 检验 idToken 或 accessToken
   */
  async validateToken(options: { accessToken?: string; idToken?: string }) {
    if (!options) {
      throw new Error('请在传入的参数对象中包含 accessToken 或 idToken 字段');
    }
    if (options.accessToken && options.idToken) {
      throw new Error('accessToken 和 idToken 只能传入一个，不能同时传入');
    }
    if (options.idToken) {
      const data = await this.naiveHttpClient.request({
        url: `${this.baseClient.appHost}/api/v2/oidc/validate_token`,
        method: 'GET',
        params: {
          id_token: options.idToken
        }
      });
      return data;
    } else if (options.accessToken) {
      const data = await this.naiveHttpClient.request({
        url: `${this.baseClient.appHost}/api/v2/oidc/validate_token`,
        method: 'GET',
        params: {
          access_token: options.accessToken
        }
      });
      return data;
    }
  }
}
