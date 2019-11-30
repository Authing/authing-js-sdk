/* jshint esversion: 6 */
import TokenManager from './TokenManager';
import axios from 'axios';
export class GraphQLClient {
  constructor(options) {
    const defaultOpt = {
      timeout: options.timeout || 8000,
      method: 'POST'
    };
    this.options = {
      ...defaultOpt,
      ...options
    };
  }

  async request(data, tokenType) {
    this.options.data = data;
    // 每次请求前先看看要不要发 token
    let token = await TokenManager.getInstance().getToken(tokenType)
    this.options = {
      ...this.options,
      headers: {
        Authorization: token
      }
    };
    return axios(this.options).then(res => {
      const d = res.data;
      if (d.errors) {
        throw d.errors[0];
      }
      let first = Object.keys(d.data)[0]
      // return d.data[data.operationName];
      return d.data[first];
    });
  }
}
