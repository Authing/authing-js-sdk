import configs from "../configs";
import { TokenMananger } from "../TokenManager";
export function logout(_id) {
  if (!_id) {
    throw Error("_id is not provided");
  }
  TokenMananger.getInstance().destroy();
  if (configs.inBrowser) {
    localStorage.removeItem("_authing_token");
  }

  return this.update({
    _id,
    tokenExpiredAt: "0"
  });
}
