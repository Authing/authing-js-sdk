import qs from "querystring";
import TokenMananger from "../TokenManager";
export default function refreshOidcToken(options) {
  if (!options.client_id) {
    throw Error("please provide client_id");
  }
  if (!options.client_secret) {
    throw Error("please provide client_secret");
  }
  if (!options.refresh_token) {
    throw Error("please provide refresh_token");
  }
  options.grant_type = "refresh_token";
  return this._axios
    .post(`${this.opts.baseUrl}/oauth/oidc/token`, qs.stringify(options), {
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(res => {
      TokenMananger.getInstance().setUserToken(res.data.access_token);
      return res.data;
    });
}
