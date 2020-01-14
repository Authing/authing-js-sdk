import axios from 'axios';
export default function cdnPreflightFun() {
  return axios.get(this.opts.cdnPreflightUrl).catch(error => {
    throw Error(`CDN 服务预检失败`);
  });
}
