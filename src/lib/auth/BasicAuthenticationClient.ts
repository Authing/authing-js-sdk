import { GraphqlClient } from './../common/GraphqlClient';
import { register } from './../graphqlapi/auth.basic.register';
import { encrypt } from './../utils/encryption';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { AuthenticationClientOptions } from './types';
import { UserRegisterInput } from '../../types/CodeGen';

export class BasicAuthenticationClient {
  public options: AuthenticationClientOptions;
  public graphqlClient: GraphqlClient;
  public tokenProvider: AuthenticationTokenProvider;

  constructor(
    options: AuthenticationClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: AuthenticationTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 注册
   *
   * @memberof BasicAuthenticationClient
   */
  async register(userInfo: UserRegisterInput) {
    userInfo.registerInClient = this.options.userPoolId;
    if (userInfo.password) {
      userInfo.password = encrypt(
        userInfo.password,
        this.options.encrptionPublicKey
      );
    }

    const res = await register(this.graphqlClient, this.tokenProvider, {
      userInfo
    });
    return res.register;
  }
}
