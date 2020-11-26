import { SDK_VERSION } from '../version';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../authentication/types';
import Axios, { AxiosInstance } from 'axios';

export class GraphqlClient {
  endpoint: string;
  options: ManagementClientOptions | AuthenticationClientOptions;
  axios: AxiosInstance;

  constructor(
    endpoint: string,
    options: ManagementClientOptions | AuthenticationClientOptions
  ) {
    this.endpoint = endpoint;
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true
    });
  }

  async request(options: { query: string; variables?: any; token?: string }) {
    const { query, token, variables } = options;
    let headers: any = {
      'content-type': 'application/json',
      'x-authing-sdk-version': `js:${SDK_VERSION}`,
      'x-authing-userpool-id': this.options.userPoolId || '',
      'x-authing-request-from': this.options.requestFrom || 'sdk',
      'x-authing-app-id': this.options.appId || ''
    };
    token && (headers.Authorization = `Bearer ${token}`);
    let data = null;
    let errors = null;
    try {
      let { data: responseData } = await this.axios({
        url: this.endpoint,
        data: {
          query,
          variables
        },
        method: 'post',
        headers,
        timeout: this.options.timeout
      });
      data = responseData.data;
      errors = responseData.errors;
    } catch (error) {
      console.log(error);
      this.options.onError(500, '网络请求错误', null);
      throw { code: 500, message: '网络请求错误', data: null };
    }

    if (errors?.length > 0) {
      let errmsg = null;
      let errcode = null;
      let data = null;
      errors.map((err: any) => {
        const { message: msg } = err;
        const { code, message, data: _data } = msg;
        errcode = code;
        errmsg = message;
        data = _data;
        this.options.onError(code, message, data);
      });
      throw { code: errcode, message: errmsg, data };
    }

    return data;
  }
}
