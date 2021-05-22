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
    const headers: any = {};
    headers[this.options.headers['app-id']] = this.options.appId || '';
    headers[this.options.headers['userpool-id']] =
      this.options.userPoolId || '';
    headers[this.options.headers['request-from']] =
      this.options.requestFrom || 'sdk';
    headers[this.options.headers['sdk-version']] = `js:${SDK_VERSION}`;
    headers[this.options.headers.lang] = this.options.lang || '';

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

export class NaiveHttpClient extends HttpClient {
  options: ManagementClientOptions;
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider;
  axios: AxiosInstance;

  constructor(
    options: ManagementClientOptions | AuthenticationClientOptions,
    tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider
  ) {
    super(options, tokenProvider);
  }

  async request(config: AxiosRequestConfig) {
    const headers: any = {};

    headers[this.options.headers['app-id']] = this.options.appId || '';
    headers[this.options.headers['userpool-id']] =
      this.options.userPoolId || '';
    headers[this.options.headers['request-from']] =
      this.options.requestFrom || 'sdk';
    headers[this.options.headers['sdk-version']] = `js:${SDK_VERSION}`;
    headers[this.options.headers.lang] = this.options.lang || '';


    config.headers = { ...headers, ...config.headers };
    config.timeout = this.options.timeout;
    const { data } = await this.axios.request(config);
    return data;
  }
}
