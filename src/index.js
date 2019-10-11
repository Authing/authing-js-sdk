const TokenManager = require('./TokenManager').default;
const { GraphQLClient } = require('./GraphQL');
const configs = require('./configs').default;
const mods = require('./functions').default;
class Authing {
  constructor(options) {
    this.opts = options || {};
    this.opts.useSelfWxapp = options.useSelfWxapp || false;
    this.opts.enableFetchPhone = options.enableFetchPhone || false;
    // 设置 axios 的超时时间
    this.opts.timeout = options.timeout || 10000;
    this.opts.preflight = options.preflight || false;
    this.opts.cdnPreflight = options.cdnPreflight || false;

    if (options.host) {
      configs.services.user.host = options.host.user || configs.services.user.host;
      configs.services.oauth.host = options.host.oauth || configs.services.oauth.host;
    }

    this.opts.preflightUrl = {
      users: configs.services.user.host.replace('/graphql', '/system/status'),
      oauth: configs.services.oauth.host.replace('/graphql', '/system/status')
    };

    this.opts.cdnPreflightUrl = 'https://usercontents.authing.cn';

    if (!options.accessToken) {
      if (!options.userPoolId) {
        throw new Error('userPoolId is not provided');
      }
    } else {
      // 直接拿 token 初始化
      TokenManager.getInstance().setToken(options.accessToken)
    }

    this.UserServiceGql = new GraphQLClient({
      // baseURL: configs.services.user.host,
      baseURL: 'http://localhost:5555/graphql',
      headers: {
        Authorization: TokenManager.getInstance().getToken()
      },
      timeout: this.opts.timeout
    });
    this.OAuthServiceGql = new GraphQLClient({
      // baseURL: configs.services.oauth.host,
      baseURL: 'http://localhost:5556/graphql',
      headers: {
        Authorization: TokenManager.getInstance().getToken()
      },
      timeout: this.opts.timeout
    });
    this.userPoolId = options.userPoolId;
    if (process.env.BUILD_TARGET === 'node') {
      // NodeJS 环境初始化 sdk 经过网络请求
      this.secret = options.secret;
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
        query: `query getClientWhenSdkInit {
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
module.exports = Authing;
