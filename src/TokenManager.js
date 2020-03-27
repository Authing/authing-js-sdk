// Token 状态管理，单例
export default class TokenManager {
  // 实例化 tokenManager 的时候传入外部配置，用于后续刷新 token
  constructor(opts, UserServiceGql) {
    this.opts = opts;
    this.instances = [];
    this.UserServiceGql = UserServiceGql;
    this.lockRefresh = false;
  }
  static getInstance(opts, UserServiceGql) {
    TokenManager.instances = !TokenManager.instances
    ? {}
    : TokenManager.instances;
    if (!opts || !opts.userPoolId) {
      if (TokenManager.instances['default']) {
        return TokenManager.instances["default"];
      }else {
        throw new Error('not valid opts')
      }
    } 
    if (!TokenManager.instances[opts.userPoolId]) {
      TokenManager.instances[opts.userPoolId] = new TokenManager(
        opts,
        UserServiceGql
      );
      TokenManager.instances['default'] = TokenManager.instances[opts.userPoolId]
    }
    return TokenManager.instances[opts.userPoolId];
  }
  static destroy(opts) {
    if (!!TokenManager.instances){
      return 
    }
    TokenManager.instances[opts.userPoolId] = null
  }
  setUserToken(userToken) {
    TokenManager.getInstance(this.opts).userToken = userToken;
  }
  setOwnerToken(ownerToken) {
    TokenManager.getInstance(this.opts).ownerToken = ownerToken;
  }
  setToken(token) {
    if (typeof window === "undefined" && typeof document === "undefined") {
      return (TokenManager.getInstance(this.opts).ownerToken = token);
    } else {
      return (TokenManager.getInstance(this.opts).userToken = token);
    }
  }
  refreshOwnerToken() {
    // 重新获取 token
    return this.UserServiceGql.request({
      operationName: "getClientWhenSdkInit",
      query: `query getClientWhenSdkInit {
          getClientWhenSdkInit(secret: "${this.opts.secret}", clientId: "${this.opts.userPoolId}") {accessToken}
        }`
    }).then(res => {
      // 获取完了之后更新 TokenManager 维护的 token
      this.setOwnerToken(res.accessToken);
      return res;
    });
  }
  getToken(type) {
    let that = this;
    return new Promise((resolve, reject) => {
      function chooseToken() {
        if (!type) {
          if (TokenManager.getInstance(that.opts).userToken) {
            resolve(`Bearer ${TokenManager.getInstance(that.opts).userToken}`);
          } else if (TokenManager.getInstance(that.opts).ownerToken) {
            resolve(`Bearer ${TokenManager.getInstance(that.opts).ownerToken}`);
          } else {
            resolve(null);
          }
        } else {
          resolve(`Bearer ${TokenManager.getInstance(that.opts)[type]}`);
        }
      }
      // lock 的目的是防止无限互相调用，UserServiceGql -> getToken -> 当前 token 过期 -> refreshOwnerToken -> UserServiceGql -> getToken
      if (process.env.BUILD_TARGET === "node" && !this.lockRefresh) {
        // 如果在 node 环境下
        if (
          TokenManager.getInstance(this.opts).ownerToken &&
          typeof TokenManager.getInstance(this.opts).ownerToken === "string"
        ) {
          // 如果 ownerToken 被设置过
          // 取出 jwt 中间的 payload
          let payload = TokenManager.getInstance(this.opts).ownerToken.split(".")[1];
          let buf = Buffer.from(payload, "base64");
          let jsonStr = buf.toString();
          try {
            let info = JSON.parse(jsonStr);
            let expireTime = new Date(info.exp * 1000);
            if (expireTime < Date.now()) {
              // 如果过期了
              this.lockRefresh = true;
              this.refreshOwnerToken()
                .then(() => {
                  this.lockRefresh = false;
                  chooseToken();
                })
                .catch(err => {
                  this.lockRefresh = false;
                  reject(err);
                });
            } else {
              // node 环境下，且 token 没过期
              chooseToken();
            }
          } catch (err) {
            console.log("刷新 token 前置条件失败");
            reject(err);
          }
        } else {
          // 如果没有 ownerToken，返回 null
          resolve(null);
        }
      } else {
        // 如果在浏览器环境下
        chooseToken();
      }
    });
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
