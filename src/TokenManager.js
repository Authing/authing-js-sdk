// Token 状态管理，单例
export default class TokenManager {
  // 实例化 tokenManager 的时候传入外部配置，用于后续刷新 token
  constructor(opts, UserServiceGql) {
    this.opts = opts;
    this.UserServiceGql = UserServiceGql;
  }
  static getInstance(opts, UserServiceGql) {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager(opts, UserServiceGql);
    }
    return TokenManager.instance;
  }
  static destroy() {
    TokenManager.instance = null;
  }
  setUserToken(userToken) {
    TokenManager.instance.userToken = userToken;
  }
  setOwnerToken(ownerToken) {
    TokenManager.instance.ownerToken = ownerToken;
  }
  setToken(token) {
    if (typeof window === "undefined" && typeof document === "undefined") {
      return (TokenManager.instance.ownerToken = token);
    } else {
      return (TokenManager.instance.userToken = token);
    }
  }
  async refreshOwnerToken() {
    try {
      let res = await this.UserServiceGql.request({
        operationName: "getClientWhenSdkInit",
        query: `query getClientWhenSdkInit {
          getClientWhenSdkInit(secret: "${this.opts.secret}", clientId: "${this.opts.userPoolId}") {accessToken}
        }`
      });
      this.setOwnerToken(res.accessToken);
    } catch (err) {
      throw Error("刷新 token 失败");
    }
  }
  async getToken(type) {
    if (process.env.BUILD_TARGET === "node") {
      // 如果在 node 环境下
      if (
        TokenManager.instance.ownerToken &&
        typeof TokenManager.instance.ownerToken === "string"
      ) {
        // 取出 jwt 中间的 payload
        let payload = TokenManager.instance.ownerToken.split(".")[1];
        let buf = Buffer.from(payload, "base64");
        let jsonStr = buf.toString()
        try {
          let info = JSON.parse(jsonStr);
          let expireTime = new Date(info.exp * 1000);
          if (expireTime < Date.now()) {
            // 如果过期了
            await this.refreshOwnerToken()
          }
        } catch (err) {
          console.log('刷新 token 前置条件失败')
        }
      }
    }

    if (!type) {
      /*
      if (typeof window === 'undefined') {
        return `Bearer ${TokenManager.instance.ownerToken}`;
      } else {
        return `Bearer ${TokenManager.instance.userToken}`;
      }
      */
      if (TokenManager.instance.userToken) {
        return `Bearer ${TokenManager.instance.userToken}`;
      } else if (TokenManager.instance.ownerToken) {
        return `Bearer ${TokenManager.instance.ownerToken}`;
      } else {
        return null;
      }
    } else {
      return `Bearer ${TokenManager.instance[type]}`;
    }
  }
}

function test() {
  let tm = TokenManager.getInstance();
  let tm2 = TokenManager.getInstance();
  console.log(tm === tm2);
  let a = "";
  tm.setUserToken("11111");
  tm.setOwnerToken("22222");
  a = tm.getToken();
  console.log(a);
  a = tm.getToken("userToken");
  console.log(a);
  a = tm.getToken("ownerToken");
  console.log(a);
}
// test();
