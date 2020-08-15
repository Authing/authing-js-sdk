import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  checkLoginStatus,
  checkPasswordStrength,
  registerByEmail,
  registerByUsername,
  sendVerifyEmail
} from './../graphqlapi';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
import { RegisterProfile } from '../../types/codeGen.v2';
import { encrypt } from '../utils';

const DEFAULT_OPTIONS = {
  timeout: 10000,
  encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
  onError: (err: Error) => {
    throw err;
  },
  enableAccessTokenCache: true,
  host: 'https://core.authing.cn'
};

export class AuthenticationClient {
  // 初始化参数
  options: AuthenticationClientOptions;

  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  tokenProvider: AuthenticationTokenProvider;

  constructor(options: AuthenticationClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    const graphqlApiEndpoint = `${this.options.host}/graphql`;
    const graphqlApiEndpointV2 = `${this.options.host}/v2/graphql`;
    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(
      graphqlApiEndpoint,
      this.options.userPoolId
    );
    this.graphqlClientV2 = new GraphqlClient(
      graphqlApiEndpointV2,
      this.options.userPoolId
    );
    this.tokenProvider = new AuthenticationTokenProvider(this.options);
  }

  /**
   * @description 通过邮箱注册
   *
   */
  async registerByEmail(
    email: string,
    password: string,
    profile?: RegisterProfile
  ) {
    password = encrypt(password, this.options.encrptionPublicKey);
    const { registerByEmail: user } = await registerByEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: {
          email,
          password,
          profile
        }
      }
    );
    return user;
  }

  /**
   * @description 通过用户名密码注册
   *
   */
  async registerByUsername(
    username: string,
    password: string,
    profile?: RegisterProfile
  ) {
    password = encrypt(password, this.options.encrptionPublicKey);
    const { registerByUsername: user } = await registerByUsername(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        input: {
          username,
          password,
          profile
        }
      }
    );
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
   * 想邮箱中发送验证邮件
   * @param email 用户邮箱
   */
  async sendVerifyEmail(email: string) {
    const res = await sendVerifyEmail(this.graphqlClient, this.tokenProvider, {
      email,
      client: this.options.userPoolId
    });
    return res.sendVerifyEmail;
  }
}
