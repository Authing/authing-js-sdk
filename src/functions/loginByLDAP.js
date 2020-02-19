import configs from "../configs";
import TokenMananger from "../TokenManager";
export default function loginByLDAP(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  options.clientId = this.userPoolId;

  if (!options.password) {
    throw Error("password is not provided.");
  }

  if (!options.username) {
    throw Error("username is not provided.");
  }

  if (configs.inBrowser) {
    options.browser = window.navigator.userAgent;
  }

  return this.OAuthServiceGql.request({
    operationName: "LoginByLDAP",
    query: `mutation LoginByLDAP($username: String!, $password: String!, $clientId: String!, $browser: String) {
    LoginByLDAP(username: $username, clientId: $clientId, password: $password, browser: $browser) {
        _id
        email
        emailVerified
        unionid
        openid
        oauth
        registerMethod
        username
        nickname
        company
        photo
        browser
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        metadata
      }
    }`,
    variables: options
  }).then(res => {
    // 登录成功记录 token
    if (res && res.token) {
      TokenMananger.getInstance().setUserToken(res.token);
      if (configs.inBrowser)
        localStorage.setItem('_authing_token', res.token)
    }
    return res;
  });
}
