import { BasicAuthenticationClient } from './BasicAuthenticationClient';
import { CheckLoginStatusRes } from './types';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { checkLoginStatus } from './../graphqlapi/auth.checkLoginStatus';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';

const DEFAULT_OPTIONS = {
  timeout: 10000,
  encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
  onError: (err: Error) => { throw err },
  enableAccessTokenCache: true,
  host: {
    graphqlApiEndpoint: "https://core.authing.cn/graphql",
    restApiBaseHost: "https://core.authing.cn"
  }
}

export class AuthenticationClient {

  // 初始化参数
  options: AuthenticationClientOptions

  graphqlClient: GraphqlClient
  tokenProvider: AuthenticationTokenProvider
  basic: BasicAuthenticationClient

  constructor(options: AuthenticationClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId)
    this.tokenProvider = new AuthenticationTokenProvider(this.options)
    this.basic = new BasicAuthenticationClient(this.options, this.graphqlClient, this.tokenProvider)
  }

  async checkLoginStatus(token: string): Promise<CheckLoginStatusRes> {
    const res = await checkLoginStatus(this.graphqlClient, this.tokenProvider, { token })
    return res.checkLoginStatus
  }
}