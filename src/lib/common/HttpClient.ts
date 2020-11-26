import { SDK_VERSION } from '../version';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../authentication/types';
import { AuthenticationTokenProvider } from '../authentication/AuthenticationTokenProvider';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  options: ManagementClientOptions;
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider;
  axios: AxiosInstance;

  constructor(
    options: ManagementClientOptions | AuthenticationClientOptions,
    tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
    this.axios = Axios.create({
      withCredentials: true
    });
  }

  async request(config: AxiosRequestConfig) {
    const headers: any = {
      'x-authing-sdk-version': `js:${SDK_VERSION}`,
      'x-authing-userpool-id': this.options.userPoolId || '',
      'x-authing-request-from': this.options.requestFrom || 'sdk',
      'x-authing-app-id': this.options.appId || ''
    };
    if (!(config && config.headers && config.headers.authorization)) {
      // 如果用户不传 token，就使用 sdk 自己维护的
      const token = await this.tokenProvider.getToken();
      token && (headers.Authorization = `Bearer ${token}`);
    } else {
      headers.authorization = config.headers.authorization;
    }
    config.headers = headers;
    config.timeout = this.options.timeout;
    const { data } = await this.axios.request(config);
    const { code, message } = data;
    if (code !== 200) {
      this.options.onError(code, message, data.data);
      throw new Error(JSON.stringify({ code, message, data: data.data }));
    }
    return data.data;
  }
}
