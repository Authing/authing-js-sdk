/* jshint esversion: 6 */
import TokenManager from "./TokenManager";
import axios from "axios";
export class GraphQLClient {
  constructor(options) {
    const defaultOpt = {
      timeout: options.timeout || 8000,
      method: "POST"
    };
    this.options = {
      ...defaultOpt,
      ...options
    };
  }

  request(data, tokenType) {
    // 每次请求前先看看要不要发 token
    return TokenManager.getInstance(this.options)
      .getToken(tokenType)
      .then(token => {
        this.options = {
          ...this.options,
          headers: {
            Authorization: token
          },
          data
        };
        return axios(this.options).then(res => {
          const d = res.data;
          if (d.errors) {
            throw d.errors[0];
          }
          let first = Object.keys(d.data)[0];
          // return d.data[data.operationName];
          return d.data[first];
        });
      });
  }
}
