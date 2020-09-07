import { SDK_VERSION } from '../version';
import { ManagementClientOptions } from '../management/types';
import { AuthenticationClientOptions } from '../auth/types';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import Axios, { AxiosRequestConfig } from 'axios';

export class HttpClient {
  options: ManagementClientOptions;
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider;

  constructor(
    options: ManagementClientOptions | AuthenticationClientOptions,
    tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
  }

  async request(config: AxiosRequestConfig) {
    const headers: any = {
      'x-authing-sdk-version': SDK_VERSION,
      'x-authing-userpool-id': this.options.userPoolId,
      'x-authing-request-from': 'sdk',
      'x-authing-app-id': this.options.appId
    };
    const token = await this.tokenProvider.getAccessToken();
    token && (headers.Authorization = `Bearer ${token}`);
    config.headers = headers;
    const { data } = await Axios.request(config);
    const { code, message } = data;
    if (code !== 200) {
      throw new Error(message);
    }
    return data.data;
  }
}
