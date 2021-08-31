import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { AuthenticationClientOptions } from './types';
import { HttpClient } from '../common/HttpClient';
import {
  objectToQueryString,
  popupCenter,
  isMobileBrowser,
  generateRandomString
} from '../utils';
import { User } from '../../types/index';
import { BaseAuthenticationClient } from './BaseAuthenticationClient';

/**
 * @class SocialAuthenticationClient 社会化登录模块
 * @description 此模块封装了社会化登录的功能，可以通过简洁的 API 快速使用社会化登录获取用户信息。
 *
 * 发起社会化登录授权请求：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * await authenticationClient.social.authorize("github", {
 *    onSuccess: (user) => { console.log(user) },
 *    onError: (code, message) => {  }
 * })
 * \`\`\`
 *
 *
 * @name SocialAuthenticationClient
 */
export class SocialAuthenticationClient {
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
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
    this.baseClient = new BaseAuthenticationClient(options);
  }

  /**
   * @name authorize
   * @name_zh 发送授权登录请求
   * @description 发送授权登录请求，该方法会直接打开一个新窗口，跳转到第三方社会化登录服务商（如 GitHub、微信、钉钉等）的登录授权页面，用户
   * 完成授权之后，会自动关闭此窗口，并触发 onSuccess 回调函数，通过此函数，你可以获取到用户信息。
   *
   * @param {string} provider 社会化登录服务商的标志。
   * @param {object} [options]
   * @param {boolean} [options.popup=true] 是否通过弹窗的方式打开社会化登录窗口，如果设置为 false，将会以 window.open 的方式打开一个新的浏览器  tab 。
   * @param {Function} [options.onSuccess] 用户同意授权事件回调函数，第一个参数为用户信息。
   * @param {Function} [options.onError] 社会化登录失败事件回调函数，第一个参数 code 为错误码，第二个参数 message 为错误提示。详细的错误码列表请见：详细说明请见：[Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
   * @param {object} [options.position] 只有当 options.popup 为 ture 的时候有效，弹出窗口的位置，默认为 { w: 585, h: 649 } 。
   * @param {object} [options.authorizationParams] 请求时的额外参数
   *
   * @example
   *
   * // 使用 GitHub 登录
   *
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   *
   * await authenticationClient.social.authorize("github", {
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
   * await authenticationClient.social.authorize("github", {
   *    popup: false,
   *    onSuccess: (user) => { console.log(user) },
   *    onError: (code, message) => {  },
   * })
   *
   * @memberof SocialAuthenticationClient
   */
  async authorize(
    provider: string,
    options?: {
      popup?: boolean;
      onSuccess?: (user: User) => void;
      onError?: (code: number, message: string) => void;
      position?: {
        w: number;
        h: number;
      };
      authorization_params?: Record<string, any>; // 为了兼容之前的代码
      authorizationParams?: Record<string, any>;
      context?: { [x: string]: any };
      /**
       * @description 将会写入配置的用户自定义字段
       */
      customData?: { [x: string]: any };

      /**
       * @description 获取的用户信息中是否包含 identities
       */
      withIdentities?: boolean;

      /**
       * @description 协议类型
       */
      protocol?: string;
      uuid?: string;
    }
  ) {
    options = options || {};
    let {
      position,
      popup = true,
      onSuccess,
      onError,
      authorization_params,
      authorizationParams,
      context,
      customData,
      withIdentities = false,
      protocol = 'oidc',
      uuid
    } = options;

    if (!uuid) {
      uuid = generateRandomString(20);
    }

    const query: Record<string, string> = {
      from_guard: '1',
      app_id: this.options.appId,
      authorization_params: JSON.stringify(
        authorization_params || authorizationParams
      ),
      with_identities: withIdentities ? '1' : '0',
      protocol,
      uuid
    };
    if (context) {
      query.context = JSON.stringify(context);
    }
    if (customData) {
      query.custom_data = JSON.stringify(customData);
    }
    const url = `${
      this.baseClient.appHost
    }/connections/social/${provider}${objectToQueryString(query)}`;
    const onMessage = (e: MessageEvent) => {
      let { code, message, data: userInfo, event } = e.data;
      event = event || {};
      const { source, eventType } = event;
      if (source !== 'authing' || eventType !== 'socialLogin') {
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

    if (isMobileBrowser()) {
      // 在微信内直接打开
      window.location.href = url;
    } else if (popup) {
      popupCenter(url, position);
    } else {
      window.open(url);
    }
  }
}
