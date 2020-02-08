import encryption from "../utils/_encryption";
import configs from "../configs";
import TokenMananger from "../TokenManager";
export default function login(options) {
  if (!options) {
    throw Error("options is not provided.");
  }
  /* eslint-disable no-param-reassign */

  options.registerInClient = this.opts.userPoolId;

  if (options.password) {
    options.password = encryption(options.password);
  }

  if (configs.inBrowser) {
    options.browser = window.navigator.userAgent;
  }
  return this.UserServiceGql.request({
    operationName: "login",
    query: `mutation login($unionid: String, $email: String, $username: String, $password: String, $lastIP: String, $registerInClient: String!, $verifyCode: String, $browser: String, $openid: String, $MFACode: String) {
        login(unionid: $unionid, email: $email, username: $username, password: $password, lastIP: $lastIP, registerInClient: $registerInClient, verifyCode: $verifyCode, browser: $browser, openid: $openid, MFACode: $MFACode) {
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
          token
          tokenExpiredAt
          loginsCount
          lastLogin
          lastIP
          signedUp
          blocked
          isDeleted
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
