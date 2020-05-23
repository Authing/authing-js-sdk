import { encrypt } from './../utils/encryption';
import { register } from './../graphqlapi/auth.basic.register';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { AuthenticationClientOptions } from './types';
import { GraphqlClient } from './../common/GraphqlClient';

export class BasicAuthenticationClient {
  options: AuthenticationClientOptions
  graphqlClient: GraphqlClient
  tokenProvider: AuthenticationTokenProvider

  constructor(options: AuthenticationClientOptions, graphqlClient: GraphqlClient, tokenProvider: AuthenticationTokenProvider) {
    this.options = options
    this.graphqlClient = graphqlClient
    this.tokenProvider = tokenProvider
  }

  /**
   * 注册
   *
   * @memberof BasicAuthenticationClient
   */
  async register(userInfo: any) {
    if (userInfo.password) {
      userInfo.password = encrypt(userInfo.password, this.options.encrptionPublicKey)
    }
    const res: any = await register(this.graphqlClient, this.tokenProvider, Object.assign(userInfo, { registerInClient: this.options.userPoolId }))
    return res.register
  }
}


