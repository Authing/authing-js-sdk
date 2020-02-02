import axios from 'axios';
// 检验微信二维码扫描状态
export default function checkQR(QRCodeId) {
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

  let url = this.opts.host.oauth;
  url = url.replace('/graphql', '');

  return axios.post(`${url}/oauth/wxapp/confirm/qr?random=${random}&useSelfWxapp=${this.opts.useSelfWxapp}`);
}
