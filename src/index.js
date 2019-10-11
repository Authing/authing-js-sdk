const TokenManager = require('./TokenManager').default;
const { GraphQLClient } = require('./GraphQL');
const configs = require('./configs').default;
const mods = require('./functions').default;
class Authing {
  constructor(options) {
    this.opts = options;
    this.opts.useSelfWxapp = options.useSelfWxapp || false;
    this.opts.enableFetchPhone = options.enableFetchPhone || false;
    this.opts.timeout = options.timeout || 10000;
    this.opts.noSecurityChecking = options.noSecurityChecking || false;
    this.opts.preflight = options.preflight || false;
    this.opts.cdnPreflight = options.cdnPreflight || false;
    if (!options.accessToken) {
      if (!options.clientId) {
        throw new Error('clientId is not provided');
      }
    }
  
    if (!this.opts.noSecurityChecking) {
      return this._auth().then((token) => {
        if (token) {
          self.initOwnerClient(token);
          self.loginFromLocalStorage();
        } else {
          self.ownerAuth.authed = true;
          self.ownerAuth.authSuccess = false;
          throw 'auth failed, please check your secret and client ID.';
        }
        return self;
      }).catch((error) => {
        self.ownerAuth.authed = true;
        self.ownerAuth.authSuccess = false;
        throw `认证失败: ${error.message.message || error}`;
      });
    }
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
