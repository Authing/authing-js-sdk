import configs from '../configs';
import axios from 'axios';
// 检验微信二维码扫描状态
export function checkQR(QRCodeId) {
  let random;
  if (typeof QRCodeId === 'undefined') {
    if (typeof sessionStorage !== 'undefined') {
      random = sessionStorage.randomWord || '';
    } else {
      random = '';
    }
  } else {
    random = QRCodeId;
  }

  let url = configs.services.oauth.host;
  url = url.replace('/graphql', '');

  return axios.post(`${url}/oauth/wxapp/confirm/qr?random=${random}&useSelfWxapp=${this.opts.useSelfWxapp}`);
}
