import { ConnectionManagementClient } from './ConnectionManagementClient';
import { OrgManagementClient } from './OrgManagementClient';
import { AccessControlManagementClient } from './AccessControlManagementClient';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserPoolManagementClient } from './UserpoolManagementClient';
import { UsersManagementClient } from './UsersManagementClient';
import { isDomainAvaliable, sendEmail } from '../graphqlapi';
import { EmailScene } from '../../types/graphql.v2';

const DEFAULT_OPTIONS = {
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
  host: {
    graphqlApiEndpoint: 'https://core.authing.cn/graphql',
    restApiBaseHost: 'https://core.authing.cn'
  }
};

export class ManagementClient {
  // 初始化参数
  options: ManagementClientOptions;

  // sub classes definitions
  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;
  users: UsersManagementClient;
  userpool: UserPoolManagementClient;
  acl: AccessControlManagementClient;
  org: OrgManagementClient;
  connections: ConnectionManagementClient;

  constructor(options: ManagementClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    if (!this.options.userPoolId) throw new Error('请提供 userPoolId !');

    const graphqlApiEndpoint = `${this.options.host}/graphql`;
    const graphqlApiEndpointV2 = `${this.options.host}/v2/graphql`;

    if (!this.options.secret && !this.options.accessToken) {
      this.options.onError(
        1000,
        'Init Management Client failed, must provide at least secret or accessToken !'
      );
    }

    // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
    this.graphqlClient = new GraphqlClient(
      graphqlApiEndpoint,
      this.options.userPoolId,
      this.options.onError
    );
    this.graphqlClientV2 = new GraphqlClient(
      graphqlApiEndpointV2,
      this.options.userPoolId,
      this.options.onError
    );
    this.tokenProvider = new ManagementTokenProvider(
      this.options,
      this.graphqlClient
    );
    this.users = new UsersManagementClient(
      this.options,
      this.graphqlClient,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.userpool = new UserPoolManagementClient(
      this.options,
      this.graphqlClient,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.acl = new AccessControlManagementClient(
      this.options,
      this.graphqlClient,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.org = new OrgManagementClient(
      this.options,
      this.graphqlClient,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.connections = new ConnectionManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
  }

  async isDomainAvaliable(domain: string) {
    const res = await isDomainAvaliable(
      this.graphqlClient,
      this.tokenProvider,
      { domain }
    );
    return res.isDomainAvaliable;
  }

  /**
   * @description 发送邮件
   * @param email: 邮件
   * @param scene: 发送场景
   *
   */
  async sendEmail(email: string, scene: EmailScene) {
    const { sendEmail: data } = await sendEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      { email, scene }
    );
    return data;
  }
}