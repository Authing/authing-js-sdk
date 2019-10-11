import TokenManager from './TokenManager';
import { GraphQLClient } from './GraphQL';
import { configs } from './configs';
import mods from './functions';
export default class Authing {
  constructor(options) {
    this.opts = options;
    this.UserServiceGql = new GraphQLClient({
      // baseURL: configs.services.user.host,
      baseURL: 'http://localhost:5555/graphql',
      headers: {
        Authorization: TokenManager.getInstance().getToken()
      }
    });
    this.OAuthServiceGql = new GraphQLClient({
      // baseURL: configs.services.oauth.host,
      baseURL: 'http://localhost:5556/graphql',
      headers: {
        Authorization: TokenManager.getInstance().getToken()
      }
    });
    this.userPoolId = options.userPoolId;
    if (process.env.BUILD_TARGET === 'node') {
      // NodeJS 环境初始化 sdk 经过网络请求
      this.secret = options.secret;
      // @TODO 调用初始化接口
      const queryField = `{
        accessToken
        clientInfo {
          _id
          name
          descriptions
          jwtExpired
          createdAt
          isDeleted
          logo
          emailVerifiedDefault
          registerDisabled
          showWXMPQRCode
          useMiniLogin
          allowedOrigins
          clientType {
            _id
            name
            description
            image
            example
          }
        }
      }`;
      this.UserServiceGql.request({
        operationName: 'getClientWhenSdkInit',
        query: `query {
          getClientWhenSdkInit(secret: "${options.secret}", clientId: "${options.userPoolId}")${queryField}
        }`
      }).then(res => {
        TokenManager.getInstance().setToken(res.accessToken);
      });
    }
  }
}
Authing.prototype = {
  ...mods
};
function test() {
  let auth = new Authing({ userPoolId: '5d9d5d3a24430c6897929544' });
  auth.checkLoginStatus('aaa');
}
