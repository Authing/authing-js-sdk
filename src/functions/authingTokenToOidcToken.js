import qs from "querystring";
export default function authingTokenToOidcToken(options) {
  if (!options) {
    throw Error("options is not provided.");
  }

  if (!options.client_id) {
    throw Error("options.client_id is not provided.");
  }
  if (!options.client_secret) {
    throw Error("options.client_secret is not provided.");
  }
  options.grant_type = "authingToken";
  options.scope = options.scope || "openid profile email phone offline_access";
  return this._axios
    .post(`${this.opts.baseUrl}/oauth/oidc/token`, qs.stringify(options), {
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err.response.data;
    });
}
