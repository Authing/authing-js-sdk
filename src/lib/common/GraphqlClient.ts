import { SDK_VERSION } from '../version';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../authentication/types';
import Axios, { AxiosInstance } from 'axios';
import { pickBy } from 'lodash';

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
      'content-type': 'application/json'
    };

    headers[this.options.headers['app-id']] = this.options.appId || '';
    headers[this.options.headers['tenant-id']] = this.options.tenantId;
    headers[this.options.headers['userpool-id']] =
      // @ts-ignore
      this.options.userPoolId || '';
    headers[this.options.headers['request-from']] =
      this.options.requestFrom || 'sdk';
    headers[this.options.headers['sdk-version']] = `js:${SDK_VERSION}`;
    headers[this.options.headers.lang] = this.options.lang || '';

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
        headers: {
          ...pickBy(headers, i => !!i)
        },
        timeout: this.options.timeout
      });
      data = responseData.data;
      errors = responseData.errors;
    } catch (error) {
      const statusCode = error.code || error?.response?.status;
      const errorDetail = error.message || error?.response?.data;
      this.options.onError(statusCode || 500, error.message, errorDetail);
      throw {
        code: statusCode || 500,
        message: error.message,
        data: errorDetail
      };
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
