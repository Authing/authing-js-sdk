import { isDomainAvaliable } from './../graphqlapi/management.isDomainAvaliable';
import { OrgManagementClient } from './OrgManagementClient';
import { AccessControlManagementClient } from './AccessControlManagementClient';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from "./types"
import { UserPoolManagementClient } from './UserpoolManagementClient';
import { UsersManagementClient } from './UsersManagementClient';


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

export class ManagementClient {

  // 初始化参数
  options: ManagementClientOptions

  // sub classes definitions
  graphqlClient: GraphqlClient
  tokenProvider: ManagementTokenProvider
  users: UsersManagementClient
  userpool: UserPoolManagementClient
  accessControl: AccessControlManagementClient
  org: OrgManagementClient

  constructor(options: ManagementClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)

    if (!this.options.secret && !this.options.accessToken) {
      this.options.onError(new Error('Init Management Client failed, must provide at least secret or accessToken !'))
    }

    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId)
    this.tokenProvider = new ManagementTokenProvider(this.options, this.graphqlClient)
    this.users = new UsersManagementClient(this.options, this.graphqlClient, this.tokenProvider)
    this.userpool = new UserPoolManagementClient(this.options, this.graphqlClient, this.tokenProvider)
    this.accessControl = new AccessControlManagementClient(this.options, this.graphqlClient, this.tokenProvider)
    this.org = new OrgManagementClient(this.options, this.graphqlClient, this.tokenProvider)
  }

  async isDomainAvaliable(domain: string) {
    const res = await isDomainAvaliable(this.graphqlClient, this.tokenProvider, { domain })
    return res.isDomainAvaliable
  }
}
