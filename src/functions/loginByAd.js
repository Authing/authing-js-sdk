import configs from "../configs";
import TokenMananger from "../TokenManager";

export default function loginByAd(options) {
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

  if (!options.adConnectorId) {
    throw Error("adConnectorId is not provided.");
  }

  return this.OAuthServiceGql.request({
    operationName: "loginByAd",
    query: `mutation loginByAd($username: String!, $password: String!, $adConnectorId: String!) {
    loginByAd(username: $username, password: $password, adConnectorId: $adConnectorId) {
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
