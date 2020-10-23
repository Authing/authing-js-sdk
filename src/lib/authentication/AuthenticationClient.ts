import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  checkLoginStatus,
  checkPasswordStrength,
  loginByEmail,
  loginByPhoneCode,
  loginByPhonePassword,
  loginByUsername,
  refreshToken,
  registerByEmail,
  registerByUsername,
  sendEmail,
  registerByPhoneCode,
  updatePassword,
  updatePhone,
  updateEmail,
  bindPhone,
  unbindPhone,
  user,
  setUdv,
  removeUdv,
  udv,
  unbindEmail
} from '../graphqlapi';
import { GraphqlClient } from '../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
import {
  CheckPasswordStrengthResult,
  CommonMessage,
  EmailScene,
  JwtTokenStatus,
  RefreshToken,
  RegisterProfile,
  UdfDataType,
  UdfTargetType,
  UpdateUserInput,
  User,
  UserDefinedData
} from '../../types/graphql.v2';
import { encrypt } from '../utils';
import { QrCodeAuthenticationClient } from './QrCodeAuthenticationClient';
import { MfaAuthenticationClient } from './MfaAuthenticationClient';
import { resetPassword, updateUser } from '../graphqlapi';
import { HttpClient } from '../common/HttpClient';

const DEFAULT_OPTIONS: AuthenticationClientOptions = {
  timeout: 10000,
  encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
  onError: (code: number, message: string, data: any) => {
    throw { code, message, data };
  },
  host: 'https://core.authing.cn',
  requestFrom: 'sdk'
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
 *    userPoolId: process.env.AUTHING_USERPOOL_ID,
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

  graphqlClient: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: AuthenticationTokenProvider;
  wxqrcode: QrCodeAuthenticationClient;
  qrcode: QrCodeAuthenticationClient;
  mfa: MfaAuthenticationClient;

  constructor(options: AuthenticationClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    const graphqlApiEndpoint = `${this.options.host}/graphql`;
    const graphqlApiEndpointV2 = `${this.options.host}/graphql/v2`;
    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(graphqlApiEndpoint, this.options);
    this.graphqlClient = new GraphqlClient(graphqlApiEndpointV2, this.options);
    this.tokenProvider = new AuthenticationTokenProvider(this.options);
    this.httpClient = new HttpClient(this.options, this.tokenProvider);
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
    if (this.options.accessToken) {
      this.setToken(this.options.accessToken);
    }
  }

  private checkLoggedIn() {
    const user = this.tokenProvider.getUser();
    if (!user) {
      throw new Error('请先登录！');
    }
    return user;
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
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const { forceLogin = false, generateToken = false, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
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
          clientIp
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
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const { forceLogin = false, generateToken = false, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
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
          clientIp
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
    }
  ): Promise<User> {
    options = options || {};
    profile = profile || {};
    const { forceLogin = false, generateToken = false, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
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
          clientIp
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
    const api = `${this.options.host}/api/v2/sms/send`;
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
    }
  ): Promise<User> {
    options = options || {};
    const { autoRegister = false, captchaCode, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByEmail: user } = await loginByEmail(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: { email, password, autoRegister, captchaCode, clientIp }
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
    }
  ): Promise<User> {
    options = options || {};
    const { autoRegister = false, captchaCode, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByUsername: user } = await loginByUsername(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: { username, password, autoRegister, captchaCode, clientIp }
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
    }
  ): Promise<User> {
    options = options || {};
    const { clientIp } = options;
    const { loginByPhoneCode: user } = await loginByPhoneCode(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: { phone, code, clientIp }
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
    }
  ): Promise<User> {
    options = options || {};
    const { captchaCode, autoRegister = false, clientIp } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByPhonePassword: user } = await loginByPhonePassword(
      this.graphqlClient,
      this.tokenProvider,
      {
        input: { phone, password, captchaCode, autoRegister, clientIp }
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
  async checkLoginStatus(token: string): Promise<JwtTokenStatus> {
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
    newPassword = encrypt(newPassword, this.options.encrptionPublicKey);
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
    newPassword = encrypt(newPassword, this.options.encrptionPublicKey);
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
    const user = this.checkLoggedIn();
    if (updates && updates.password) {
      delete updates.password;
    }
    const { updateUser: updated } = await updateUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: user.id,
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
      newPassword && encrypt(newPassword, this.options.encrptionPublicKey);
    oldPassword =
      oldPassword && encrypt(oldPassword, this.options.encrptionPublicKey);

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
  async logout() {
    const user = this.checkLoggedIn();
    await updateUser(this.graphqlClient, this.tokenProvider, {
      id: user.id,
      input: {
        tokenExpiredAt: '0'
      }
    });
    this.tokenProvider.clearUser();
  }

  private convertUdv(
    data: Array<{ key: string; dataType: UdfDataType; value: any }>
  ) {
    for (const item of data) {
      const { dataType, value } = item;
      if (dataType === UdfDataType.Number) {
        item.value = JSON.parse(value);
      } else if (dataType === UdfDataType.Boolean) {
        item.value = JSON.parse(value);
      } else if (dataType === UdfDataType.Datetime) {
        item.value = new Date(parseInt(value));
      } else if (dataType === UdfDataType.Object) {
        item.value = JSON.parse(value);
      }
    }
    return data;
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
    const user = this.checkLoggedIn();
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType: UdfTargetType.User,
      targetId: user.id
    });
    return this.convertUdv(list);
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
    const user = this.checkLoggedIn();
    value = JSON.stringify(value);
    const { setUdv: list } = await setUdv(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.User,
        targetId: user.id,
        key,
        value
      }
    );
    return this.convertUdv(list);
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
    const user = this.checkLoggedIn();
    const { removeUdv: list } = await removeUdv(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType: UdfTargetType.User,
        targetId: user.id,
        key
      }
    );
    return this.convertUdv(list);
  }
}
