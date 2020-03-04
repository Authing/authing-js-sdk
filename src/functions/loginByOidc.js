import TokenMananger from "../TokenManager";
import qs from "querystring";
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
export default function loginByOidc(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  if (!options.client_id) {
    throw Error("options.client_id is not provided.");
  }
  if (!options.client_secret) {
    throw Error("options.client_secret is not provided.");
  }
  options.grant_type = "password";
  options.scope = options.scope || "openid profile email phone";
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
  let token = {};
  return this._axios
    .post(`${this.opts.baseUrl}/oauth/oidc/token`, qs.stringify(options), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => {
      TokenMananger.getInstance().setUserToken(res.data.access_token);
      token = res.data;
      return this._axios.post(
        `${this.opts.baseUrl}/oauth/oidc/me`,
        qs.stringify({ access_token: res.data.access_token }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
    })
    .then(res => {
      return { ...res.data, ...token };
    });
}
