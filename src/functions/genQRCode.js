import axios from "axios";
import { randomWord } from "../utils/randomWord";
export default function genQRCode(clientId) {
  clientId = clientId || this.opts.userPoolId
  const random = randomWord(true, 12, 24);
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.randomWord = random;
  }

  let url = this.opts.host.oauth;
  url = url.replace("/graphql", "");

  return axios.get(
    `${url}/oauth/wxapp/qrcode/${clientId}?random=${random}&useSelfWxapp=${this.opts.useSelfWxapp}&enableFetchPhone=${this.opts.enableFetchPhone}`
  );
}
