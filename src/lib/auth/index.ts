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
  user
} from './../graphqlapi';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
import {
  CommonMessage,
  EmailScene,
  RefreshToken,
  RegisterProfile,
  UpdateUserInput,
  User
} from '../../types/graphql.v2';
import { encrypt } from '../utils';
import { QrCodeAuthenticationClient } from './QrCodeAuthenticationClient';
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
  onError: (_: number, message: string) => {
    throw new Error(message);
  },
  enableAccessTokenCache: true,
  host: 'https://core.authing.cn',
  requestFrom: 'sdk'
};

export class AuthenticationClient {
  // 初始化参数
  options: AuthenticationClientOptions;

  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: AuthenticationTokenProvider;
  wxqr: QrCodeAuthenticationClient;
  qr: QrCodeAuthenticationClient;

  constructor(options: AuthenticationClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    const graphqlApiEndpoint = `${this.options.host}/graphql`;
    const graphqlApiEndpointV2 = `${this.options.host}/v2/graphql`;
    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(graphqlApiEndpoint, this.options);
    this.graphqlClientV2 = new GraphqlClient(
      graphqlApiEndpointV2,
      this.options
    );
    this.tokenProvider = new AuthenticationTokenProvider(this.options);
    this.httpClient = new HttpClient(this.options, this.tokenProvider);
    this.wxqr = new QrCodeAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient,
      'WXAPP_AUTH'
    );
    this.qr = new QrCodeAuthenticationClient(
      this.options,
      this.tokenProvider,
      this.httpClient,
      'APP_AUTH'
    );
  }

  private checkLoggedIn() {
    const user = this.tokenProvider.getUser();
    if (!user) {
      throw new Error('请先登录！');
    }
    return user;
  }

  /**
   * @description 通过邮箱注册
   *
   */
  async registerByEmail(
    email: string,
    password: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
    }
  ) {
    options = options || {};
    profile = profile || {};
    const { forceLogin } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { registerByEmail: user } = await registerByEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: {
          email,
          password,
          profile,
          forceLogin
        }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  /**
   * @description 通过用户名密码注册
   *
   */
  async registerByUsername(
    username: string,
    password: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
    }
  ) {
    options = options || {};
    profile = profile || {};
    const { forceLogin } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { registerByUsername: user } = await registerByUsername(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: {
          username,
          password,
          profile,
          forceLogin
        }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  /**
   * @description 通过手机号注册
   *
   */
  async registerByPhoneCode(
    phone: string,
    code: string,
    password?: string,
    profile?: RegisterProfile,
    options?: {
      forceLogin?: boolean;
    }
  ) {
    options = options || {};
    profile = profile || {};
    const { forceLogin } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { registerByPhoneCode: user } = await registerByPhoneCode(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: {
          phone,
          code,
          password,
          profile,
          forceLogin
        }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  /**
   * @description 检查密码强度
   *
   */
  async checkPasswordStrength(password: string) {
    const { checkPasswordStrength: result } = await checkPasswordStrength(
      this.graphqlClientV2,
      this.tokenProvider,
      { password }
    );
    return result;
  }

  /**
   * @description 发送短信验证码
   *
   */
  async sendSmsCode(phone: string): Promise<{ code: number; message: string }> {
    // TODO: 这种链接从服务器动态拉取
    const api = `${this.options.host}/api/v2/sms/send`;
    const data = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: { phone }
    });

    return data;
  }

  async loginByEmail(
    email: string,
    password: string,
    options?: {
      /** 如果用户不存在，是否自动创建一个账号 */
      autoRegister?: boolean;
    }
  ) {
    options = options || {};
    const { autoRegister = false } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByEmail: user } = await loginByEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: { email, password, autoRegister }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  async loginByUsername(
    username: string,
    password: string,
    options?: {
      /** 如果用户不存在，是否自动创建一个账号 */
      autoRegister?: boolean;
    }
  ) {
    options = options || {};
    const { autoRegister = false } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByUsername: user } = await loginByUsername(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: { username, password, autoRegister }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  async loginByPhoneCode(phone: string, code: string) {
    const { loginByPhoneCode: user } = await loginByPhoneCode(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: { phone, code }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  async loginByPhonePassword(
    phone: string,
    password: string,
    options?: {
      /** 如果用户不存在，是否自动创建一个账号 */
      autoRegister?: boolean;
    }
  ) {
    options = options || {};
    const { autoRegister = false } = options;
    password = encrypt(password, this.options.encrptionPublicKey);
    const { loginByPhonePassword: user } = await loginByPhonePassword(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: { phone, password, autoRegister }
      }
    );
    this.tokenProvider.setUser(user);
    return user;
  }

  /**
   * 检测 AccessToken 所属用户的登录状态
   * @param token 用户 AccessToken
   */
  async checkLoginStatus(token: string) {
    const res = await checkLoginStatus(this.graphqlClient, this.tokenProvider, {
      token
    });
    return res.checkLoginStatus;
  }

  /**
   * @description 发送邮件
   * @param email: 邮件
   * @param scene: 发送场景
   *
   */
  async sendEmail(email: string, scene: EmailScene): Promise<CommonMessage> {
    const { sendEmail: data } = await sendEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      { email, scene }
    );
    return data;
  }

  async resetPhonePassword(
    phone: string,
    code: string,
    newPassword: string
  ): Promise<CommonMessage> {
    newPassword = encrypt(newPassword, this.options.encrptionPublicKey);
    const { resetPassword: data } = await resetPassword(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        phone,
        code,
        newPassword
      }
    );
    return data;
  }

  async resetEmailPassword(
    email: string,
    code: string,
    newPassword: string
  ): Promise<CommonMessage> {
    newPassword = encrypt(newPassword, this.options.encrptionPublicKey);
    const { resetPassword: data } = await resetPassword(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        email,
        code,
        newPassword
      }
    );
    return data;
  }

  async updateProfile(updates: UpdateUserInput): Promise<User> {
    const user = this.checkLoggedIn();
    if (updates && updates.password) {
      delete updates.password;
    }
    const { updateUser: updated } = await updateUser(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id: user.id,
        input: updates
      }
    );
    this.tokenProvider.setUser(updated);
    return updated;
  }

  /**
   * 更新用户密码
   * @param newPassword 新密码
   * @param oldPassword 旧密码
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
      this.graphqlClientV2,
      this.tokenProvider,
      {
        newPassword,
        oldPassword
      }
    );
    return user;
  }

  /**
   * 更新用户手机号
   * @param phone 新手机号
   * @param phoneCode 新手机号的验证码
   * @param oldPhone 旧手机号
   * @param oldPhoneCode 旧手机号的验证码
   */
  async updatePhone(
    phone: string,
    phoneCode: string,
    oldPhone?: string,
    oldPhoneCode?: string
  ): Promise<User> {
    const { updatePhone: user } = await updatePhone(
      this.graphqlClientV2,
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
   * 更新用户邮箱
   * @param email 新邮箱
   * @param emailCode 新邮箱的验证码
   * @param oldEmail 旧邮箱
   * @param oldEmailCode 旧邮箱的验证码
   */
  async updateEmail(
    email: string,
    emailCode: string,
    oldEmail?: string,
    oldEmailCode?: string
  ): Promise<User> {
    const { updateEmail: user } = await updateEmail(
      this.graphqlClientV2,
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

  async refreshToken(): Promise<RefreshToken> {
    this.checkLoggedIn();
    const { refreshToken: data } = await refreshToken(
      this.graphqlClientV2,
      this.tokenProvider,
      {}
    );
    return data;
  }

  async bindPhone(phone: string, phoneCode: string): Promise<User> {
    const { bindPhone: user } = await bindPhone(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        phone,
        phoneCode
      }
    );
    return user;
  }

  async unbindPhone(): Promise<User> {
    const { unbindPhone: user } = await unbindPhone(
      this.graphqlClientV2,
      this.tokenProvider,
      {}
    );
    return user;
  }

  /**
   * @description 验证 token 是否有效
   *
   */
  async verifyToken() {}

  /**
   * 获取当前登录的用户信息
   */
  async currentUser(): Promise<User | null> {
    try {
      const { user: data } = await user(
        this.graphqlClientV2,
        this.tokenProvider,
        {}
      );
      return data;
    } catch {
      return null;
    }
  }
}
