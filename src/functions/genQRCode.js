import axios from "axios";
export default function genQRCode(clientId) {

  let url = this.opts.host.oauth;
  url = url.replace("/graphql", "");

  return axios.get(
    `${url}/oauth/wxapp/qrcode/${clientId}?useSelfWxapp=${this.opts.useSelfWxapp}&enableFetchPhone=${this.opts.enableFetchPhone}`
  ).then(res => {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.randomWord = res.data.data.random;
    }
    return res
  });
}
