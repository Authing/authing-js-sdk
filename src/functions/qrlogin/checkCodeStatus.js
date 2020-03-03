import axios from 'axios';
import { convertObjectToQueryString } from "../../utils/queryString"

// 检验微信二维码扫描状态
export default function checkQRCodeStatus(options) {
  if (!options) {
    throw Error('options is not provided.');
  }
  if (!(typeof options === 'object' && options !== null)) {
    throw Error('options must be an object.');
  }

  let { qrcodeId, scene } = options
  if (!qrcodeId) {
    throw Error('qrcodeId is not provided.');
  }

  if (scene !== "APP_AUTH") {
    throw Error(`Unsupported scene ${scene}, the choices are APP_AUTH`)
  }
  let host = this.opts.host.oauth.replace("/graphql", "");
  let queryString = convertObjectToQueryString({ qrcodeId, scene })
  let url = `${host}/qrcode/check?${queryString}`

  return axios.get(url).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}
