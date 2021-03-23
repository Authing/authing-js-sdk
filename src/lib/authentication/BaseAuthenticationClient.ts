import { AuthenticationClientOptions } from './types';

export class BaseAuthenticationClient {
  options: AuthenticationClientOptions;

  get appHost(): string {
    const { appHost, domain, host } = this.options;
    // 最新版本，传入 appHost
    if (appHost) {
      return appHost.replace(/\/$/, '');
    }
    // 兼容协议认证 API 中传入的 domain
    else if (domain) {
      let hostUrl = new URL(this.options.host);
      return `${hostUrl.protocol}//${this.options.domain}`;
    }

    // 最后使用服务器统一域名 host
    else {
      return host;
    }
  }

  constructor(options: AuthenticationClientOptions) {
    this.options = options;
  }
}
