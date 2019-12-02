const TokenManager = require("./TokenManager").default;
const { GraphQLClient } = require("./GraphQL");
const axios = require("axios");
const configs = require("./configs").default;
const mods = require("./functions").default;
// sdk 的所有参数
const defaultOpts = {
  useSelfWxapp: false,
  enableFetchPhone: false,
  timeout: 10000,
  preflight: false,
  cdnPreflight: false,
  host: {
    user: "https://users.authing.cn/graphql",
    oauth: "https://oauth.authing.cn/graphql"
  },
  preflightUrl: {
    users: "https://users.authing.cn/system/status",
    oauth: "https://oauth.authing.cn/system/status"
  },
  cdnPreflightUrl: "https://usercontents.authing.cn",
  accessToken: "",
  userPoolId: "",
  secret: "",
  onInitError: function(err) {
    throw err;
  }
};
class Authing {
  constructor(options) {
    Object.defineProperty(this, "_axios", {
      enumerable: false,
      value: axios
    });
    this.opts = Object.assign({}, defaultOpts, options);
    this.version = process.env.VERSION;
    if (options.host) {
      configs.services.user.host =
        options.host.user || configs.services.user.host;
      configs.services.oauth.host =
        options.host.oauth || configs.services.oauth.host;
    }
    this.UserServiceGql = new GraphQLClient({
      baseURL: configs.services.user.host,
      headers: {
        Authorization: ""
      },
      timeout: this.opts.timeout
    });
    this.OAuthServiceGql = new GraphQLClient({
      baseURL: configs.services.oauth.host,
      headers: {
        Authorization: ""
      },
      timeout: this.opts.timeout
    });
    this.tokenManager = TokenManager.getInstance(
      this.opts,
      new GraphQLClient({
        baseURL: configs.services.user.host,
        headers: {
          Authorization: ""
        },
        timeout: this.opts.timeout
      })
    );

    if (!options.accessToken) {
      if (!options.userPoolId) {
        throw new Error("userPoolId is not provided");
      }
    } else {
      // 直接拿 token 初始化
      TokenManager.getInstance().setToken(options.accessToken);
    }

    this.userPoolId = options.userPoolId;
    if (process.env.BUILD_TARGET === "node") {
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
      this.FetchToken = this.UserServiceGql.request({
        operationName: "getClientWhenSdkInit",
        query: `query getClientWhenSdkInit {
          getClientWhenSdkInit(secret: "${options.secret}", clientId: "${options.userPoolId}")${queryField}
        }`
      })
        .then(res => {
          if (!res.accessToken) {
            throw Error("网络获取 owner token 失败");
          }
          TokenManager.getInstance().setToken(res.accessToken);
          this.userPoolSettings = res.clientInfo;
          return res.accessToken;
        })
        .catch(this.opts.onInitError);
    } else {
      this.FetchToken = Promise.resolve(
        "don't need to fetch owner token in browser"
      );
    }
    // 预检 oauth users 服务 或 cdn
    this.checkPreflight();
  }
}
Authing.prototype = {
  constructor: Authing,
  ...mods
};
module.exports = Authing;
