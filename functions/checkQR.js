import configs from '../configs'
import axios from 'axios'
export function checkQR() {
  const random = sessionStorage.randomWord || '';
  let url = configs.services.oauth.host;
  url = url.replace('/graphql', '');

  return axios.post(`${url}/oauth/wxapp/confirm/qr?random=${random}&useSelfWxapp=${this.opts.useSelfWxapp}`);
}
