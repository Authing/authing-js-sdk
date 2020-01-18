import configs from "../configs";
import encryption from "../utils/_encryption";
import TokenMananger from "../TokenManager";
export default function loginByPhonePassword(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  if (options.password) {
    options.password = encryption(options.password);
  }
  const variables = {
    registerInClient: this.userPoolId,
    phone: options.phone,
    password: options.password
  };

  if (configs.inBrowser) {
    variables.browser = window.navigator.userAgent;
  }

  return this.UserServiceGql.request({
    operationName: "login",
    query: `mutation login($phone: String, $password: String, $registerInClient: String!, $browser: String) {
        login(phone: $phone, password: $password, registerInClient: $registerInClient, browser: $browser) {
          _id
          email
          unionid
          openid
          emailVerified
          username
          nickname
          phone
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
          isDeleted
        }
    }`,
    variables
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
