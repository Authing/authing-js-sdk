import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  OIDCConnectionConfig,
  AuthenticationClientOptions,
  Protocol,
  ApplicationConfig,
  ISamlConnectionConfig,
  ICasConnectionConfig,
  IAzureAdConnectionConfig,
  IOAuthConnectionConfig
} from './types';
import { HttpClient } from '../common/HttpClient';
import { objectToQueryString, popupCenter, isWechatBrowser } from '../utils';
import { User } from '../../types/index';
import { generateUidKey } from '../utils';
import { BaseAuthenticationClient } from './BaseAuthenticationClient';

/**
 * @class EnterpriseAuthenticationClient 企业身份源登录模块
 * @description 此模块封装了企业身份源登录的功能，可以通过简洁的 API 快速使用企业身份源登录获取用户信息。
 *
 * 发起企业身份源登录授权请求：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * await authenticationClient.enterprise.authorize("oidc", "identifierxxx" {
 *    onSuccess: (user) => { console.log(user) },
 *    onError: (code, message) => {  }
 * })
 * \`\`\`
 *
 *
 * @name EnterpriseAuthenticationClient
 */
export class EnterpriseAuthenticationClient {
  options: AuthenticationClientOptions;
  tokenProvider: AuthenticationTokenProvider;
  httpClient: HttpClient;
  baseClient: BaseAuthenticationClient;

  constructor(
    options: AuthenticationClientOptions,
    tokenProvider: AuthenticationTokenProvider,
    httpClient: HttpClient
  ) {
    this.options = options;
    this.baseClient = new BaseAuthenticationClient(options);
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
  }

  //  TODO，跟着 user-portal 逻辑走的，后续应该优化
  private async initProviderContext(appId: string) {
    // 这个接口不止为了获取应用配置，还为了初始化一些企业身份源的 context
    const appConfig: ApplicationConfig = await this.httpClient.request({
      method: 'GET',
      url: `${this.baseClient.appHost}/api/v2/applications/${appId}/public-config`
    });

    return appConfig;
  }

  private getProviderConfigAndError(
    protocol: Protocol,
    appConfig: ApplicationConfig,
    identifier: string
  ) {
    const providerConfig = appConfig.identityProviders?.find(
      item => item.protocol === protocol && item.identifier === identifier
    )?.config;

    if (!providerConfig) {
      throw new Error('身份源配置不存在');
    }
    return providerConfig;
  }

  private getLoginUrl(
    protocol: Protocol,
    appConfig: ApplicationConfig,
    identifier: string,
    state?: string
  ) {
    let config = this.getProviderConfigAndError(
      protocol,
      appConfig,
      identifier
    );

    switch (protocol) {
      case Protocol.OIDC:
        config = config as OIDCConnectionConfig;

        const query = objectToQueryString({
          state,
          client_id: config.clientId,
          redirect_uri: config.redirectUri,
          scope: config.scopes,
          response_type: config.responseType,
          nonce: generateUidKey(32)
        });
        return `${config.authorizationEdpoint}?${query}`;
      case Protocol.SAML:
        config = config as ISamlConnectionConfig;
        return config.samlRequest;
      case Protocol.CAS:
        config = config as ICasConnectionConfig;
        return config.casConnectionLoginUrl!;
      case Protocol.OAUTH:
        config = config as IOAuthConnectionConfig;
        return config.authUrl!;
      case Protocol.AZURE_AD:
        config = config as IAzureAdConnectionConfig;
        return config.authorizationUrl!;
      default:
        return '';
    }
  }

  /**
   * @name authorize
   * @name_zh 发送授权登录请求
   * @description 发送授权登录请求，该方法会直接打开一个新窗口，跳转到企业身份源（如 OIDC、SAML 等）的登录授权页面，用户
   * 完成授权之后，会自动关闭此窗口，并触发 onSuccess 回调函数，通过此函数，你可以获取到用户信息。
   *
   * @param {Protocol} protocol: 企业身份源协议
   * @param {string} provider 企业身份源的唯一标志。
   * @param {object} [options]
   * @param {boolean} [options.popup=true] 是否通过弹窗的方式打开社会化登录窗口，如果设置为 false，将会以 window.open 的方式打开一个新的浏览器  tab 。
   * @param {Function} [options.onSuccess] 用户同意授权事件回调函数，第一个参数为用户信息。
   * @param {Function} [options.onError] 企业身份源失败事件回调函数，第一个参数 code 为错误码，第二个参数 message 为错误提示。详细的错误码列表请见：详细说明请见：[Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
   * @param {object} [options.position] 只有当 options.popup 为 ture 的时候有效，弹出窗口的位置，默认为 { w: 585, h: 649 } 。
   *
   * @example
   *
   * // 使用身份源标识符为 'oidc1' 的 OIDC 身份源登录
   *
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   *
   * await authenticationClient.enterprise.authorize("oidc", "oidc1" {
   *    onSuccess: (user) => { console.log(user) },
   *    onError: (code, message) => {  },
   *    // 自定义弹出窗口的位置
   *    position: {
   *      w: 100,
   *      h: 100
   *    }
   * })
   *
   * @example
   *
   * // 使用新建浏览器 tab 的形式打开社会化登录页面
   *
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   *
   * await authenticationClient.enterprise.authorize("oidc", "oidc1", {
   *    popup: false,
   *    onSuccess: (user) => { console.log(user) },
   *    onError: (code, message) => {  },
   * })
   *
   * @memberof EnterpriseAuthenticationClient
   */
  async authorize(
    protocol: Protocol,
    identifier: string,
    options?: {
      popup?: boolean;
      onSuccess?: (user: User) => void;
      onError?: (code: number, message: string) => void;
      position?: {
        w: number;
        h: number;
      };
    }
  ) {
    options = options || {};
    const { position, popup = true, onSuccess, onError } = options;
    const { appId } = this.options;

    const appConfig = await this.initProviderContext(appId);

    // OIDC 还要特殊初始化
    const state = generateUidKey(32);
    if (protocol === Protocol.OIDC) {
      await this.httpClient.request({
        method: 'POST',
        url: `${this.baseClient.appHost}/api/v2/connections/oidc/start-interaction`,
        data: {
          state,
          protocol,
          userPoolId: appConfig.userPoolId,
          appId,
          referer: window.location.href,
          connection: { providerIentifier: identifier }
        }
      });
    }

    const url = this.getLoginUrl(protocol, appConfig, identifier, state);

    const onMessage = (e: MessageEvent) => {
      let { code, message, data: userInfo, event } = e.data;
      event = event || {};
      const { source, eventType } = event;
      if (source !== 'authing' || eventType !== 'enterpriseLogin') {
        return;
      }

      try {
        const parsedMsg = JSON.parse(message);
        message = parsedMsg.message;
        code = parsedMsg.code;
      } catch (e) {
        // do nothing...
      }
      if (code === 200) {
        // 保存用户的 token
        this.tokenProvider.setUser(userInfo);
        onSuccess && onSuccess(userInfo);
      } else {
        onError && onError(code, message);
      }
      window.removeEventListener('message', onMessage);
    };
    window.addEventListener('message', onMessage);

    if (isWechatBrowser()) {
      // 在微信内直接打开
      window.location.href = url;
    } else if (popup) {
      popupCenter(url, position);
    } else {
      window.open(url);
    }
  }
}
