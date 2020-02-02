import configs from "../configs";
import TokenMananger from "../TokenManager";
// 把 TokenManager 中的 userToken 设置为 localStorage 里面的 _authing_token
export default function loginFromLocalStorage() {
  if (configs.inBrowser) {
    const authingToken = localStorage.getItem("_authing_token");
    if (authingToken) {
      TokenMananger.getInstance().setToken(authingToken);
    }
  }
}
