// Token 状态管理，单例
export default class TokenManager {
  static getInstance() {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
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
    if (typeof window === 'undefined') {
      return (TokenManager.instance.ownerToken = token);
    } else {
      return (TokenManager.instance.userToken = token);
    }
  }
  getToken(type) {
    if (typeof type === 'undefined') {
      if (typeof window === 'undefined') {
        return `Bearer ${TokenManager.instance.ownerToken}`;
      } else {
        return `Bearer ${TokenManager.instance.userToken}`;
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
  let a = '';
  tm.setUserToken('11111');
  tm.setOwnerToken('22222');
  a = tm.getToken();
  console.log(a);
  a = tm.getToken('userToken');
  console.log(a);
  a = tm.getToken('ownerToken');
  console.log(a);
}
// test();
