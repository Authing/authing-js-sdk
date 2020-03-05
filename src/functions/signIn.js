import TokenMananger from "../TokenManager";
import configs from "../configs";

function isPassingInMultiUserIdentifierParams(oidcParams) {
  const parameters = ["username", "email", "phone", "unionid"];
  let flag = false;
  for (let item of parameters) {
    if (!flag && oidcParams[item]) {
      flag = true;
    } else if (flag && oidcParams[item]) {
      return true;
    }
  }
  return false;
}
export default function signIn(options) {
  if (!options) {
    throw Error("options is not provided.");
  }
  options.userPoolId = this.userPoolId
  // if (!options.oidcAppId) {
  //   throw Error("options.oidcAppId is not provided.");
  // }
  if (isPassingInMultiUserIdentifierParams(options)) {
    throw Error(
      "repeated parameters provided. please don't pass in username or email or phone or unionid at the same time."
    );
  }
  let noIdentifier = true;
  ["username", "email", "phone", "unionid"].forEach(item => {
    if (item in options) {
      noIdentifier = false;
    }
  });
  if (noIdentifier) {
    throw Error(
      "please provide one identifiler: email, phone, username or unionid"
    );
  }
  if (!options.unionid && !options.password) {
    throw Error("options.password is not provided.");
  }
  return this.UserServiceGql.request({
    operationName: "SignIn",
    query: `
    mutation SignIn($oidcAppId: String, $email: String, $userPoolId: String, $phone: String, $username: String, $unionid: String, $password: String) {
      signIn(oidcAppId: $oidcAppId,
      userPoolId: $userPoolId,
      email: $email,
      phone: $phone,
      password: $password,
      username: $username,
      unionid: $unionid) {
        sub
        birthdate
        family_name
        gender
        given_name
        locale
        middle_name
        name
        nickname
        picture
        preferred_username
        profile
        updated_at
        website
        zoneinfo
        username
        _id
        company
        browser
        device
        logins_count
        register_method
        blocked,
        last_ip
        register_in_userpool
        last_login
        signed_up
        email
        email_verified,
        phone_number
        phone_number_verified
        token
        access_token
        id_token
        refresh_token
        expires_in
        token_type
        scope
      }
    }
  `,
    variables: options
  }).then(res => {
    // 登录成功记录 token
    if (res && res.token) {
      TokenMananger.getInstance().setUserToken(res.token);
    }
    if (configs.inBrowser) {
      localStorage.setItem("_authing_token", res.token);
    }
    return res;
  });
}
