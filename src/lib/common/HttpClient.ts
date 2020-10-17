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
    this.axios = Axios.create();
  }

  async request(config: AxiosRequestConfig) {
    const headers: any = {
      'x-authing-sdk-version': `js:${SDK_VERSION}`,
      'x-authing-userpool-id': this.options.userPoolId,
      'x-authing-request-from': this.options.requestFrom || 'sdk',
      'x-authing-app-id': this.options.appId || ''
    };
    const token = await this.tokenProvider.getToken();
    token && (headers.Authorization = `Bearer ${token}`);
    config.headers = headers;
    config.timeout = this.options.timeout;
    const { data } = await this.axios.request(config);
    const { code, message } = data;
    if (code !== 200) {
      throw new Error(message);
    }
    return data.data;
  }
}
