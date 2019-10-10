import axios from 'axios'
export function preflightFun() {
  return Promise.all([axios.get(this.opts.preflightUrl.users), axios.get(this.opts.preflightUrl.oauth)])
}