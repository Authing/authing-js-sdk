import configs from "../configs";
import TokenMananger from "../TokenManager";
export function loginFromLocalStorage() {
  if (configs.inBrowser) {
    const authingToken = localStorage.getItem("_authing_token");
    if (authingToken) {
      TokenMananger.getInstance().setToken(authingToken);
    }
  }
}
