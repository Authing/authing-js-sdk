import axios from 'axios';
import configs from '../configs';
import { randomWord } from '../utils/randomWord';
export function genQRCode(clientId) {
  const random = randomWord(true, 12, 24);
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.randomWord = random;
  }

  let url = configs.services.oauth.host;
  url = url.replace('/graphql', '');

  return axios.get(`${url}/oauth/wxapp/qrcode/${clientId}?random=${random}&useSelfWxapp=${this.opts.useSelfWxapp}&enableFetchPhone=${this.opts.enableFetchPhone}`);
}
