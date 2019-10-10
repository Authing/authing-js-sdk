import axios from 'axios'
export function cdnPreflightFun() {
  return new Promise((resolve, reject) => {
    axios
      .get(this.opts.cdnPreflightUrl)
      .then(res => resolve(res))
      .catch(error => {
        reject(new Error(`CDN 服务预检失败：${error}`));
      });
  });
}
