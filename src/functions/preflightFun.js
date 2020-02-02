import axios from 'axios'
export default function preflightFun() {
  return Promise.all([axios.get(this.opts.preflightUrl.users), axios.get(this.opts.preflightUrl.oauth)]).catch(err => {
    if(err.config.url === this.opts.preflightUrl.users) {
      throw Error('用户服务网络预检失败')
    } else if(err.config.url === this.opts.preflightUrl.oauth) {
      throw Error('认证服务网络预检失败')
    } else {
      throw err
    }
  })
}