import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  AuthenticationClientOptions,
  QRCodeGenarateResult,
  QRCodeStatus,
  QRCodeUserInfo
} from './types';
import { createCssClassStyleSheet } from '../utils';
import { User } from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';

/**
 * @class QrCodeAuthenticationClient 扫码登录模块
 * @description 此模块用于进行扫码登录，扫码登录分为两种小程序扫码登录（wxqrcode）和 APP 扫码登录（qrcode）。两种扫码登录方式 API 完全一致。
 *
 * 使用小程序扫码登录：
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * authenticationClient.wxqrcode.startScanning() # 开始扫码登录
 * \`\`\`
 *
 * 使用 APP 扫码登录
 *
 * \`\`\`javascript
 * import { AuthenticationClient } from "authing-js-sdk"
 * const authenticationClient = new AuthenticationClient({
 *    appId: "YOUR_APP_ID",
 * })
 * authenticationClient.qrcode.startScanning() # 开始扫码登录
 * \`\`\`
 *
 * @name QrCodeAuthenticationClient
 */
export class QrCodeAuthenticationClient {
  options: AuthenticationClientOptions;
  tokenProvider: AuthenticationTokenProvider;
  scene: string;
  httpClient: HttpClient;

  constructor(
    options: AuthenticationClientOptions,
    tokenProvider: AuthenticationTokenProvider,
    httpClient: HttpClient,
    scene: 'WXAPP_AUTH' | 'APP_AUTH'
  ) {
    this.options = options;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
    this.scene = scene;
  }

  /**
   * @name startScanning
   * @name_zh 一键开始扫码
   * @description 一键开始扫码
   *
   * @param {string} domId DOM 元素的 ID。
   * @param {Object} options
   * @param {number} options.interval 间隔时间，单位为毫秒，默认为 800 毫秒
   * @param {Function} options.onStart 开始轮询的事件回调函数, 第一个参数为 setInterval 返回的计时器，可以用 clearInterval 取消此计时器
   * @param {Function} options.onResult 获取到二维码最新状态事件回调函数，第一个参数为的类型为 QRCodeStatus。
   * @param {Function} options.onScanned 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的。
   * 出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
   * @param {Function} options.onSuccess 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。第一个参数为 userInfo 用户信息，第二个参数为 ticket，用于换取用户的详情。
   * 详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
   * ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。
   * @param {Function} options.onCancel 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。
   * @param {Function} options.onError 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在" }
   * @param {Function} options.onExpired 二维码失效时被回调，只回调一次，之后轮询结束。
   * @param {Function} options.onCodeShow 二维码首次成功显示的事件。
   * @param {Function} options.onCodeLoaded 二维码首次成功 Load 的事件。
   * @param {Function} options.onCodeLoadFailed 二维码加载失败的事件。
   * @param {Function} options.onCodeDestroyed 二维码被销毁的事件。
   * @param {Object} options.size 二维码图片大小，默认为 240 * 240，单位为 px 。
   * @param {number} options.size.height 高度
   * @param {number} options.size.width 宽度
   * @param {Object} options.containerSize DOM 容器大小，默认为 300 * 300，单位为 px 。
   * @param {number} options.containerSize.height 高度
   * @param {number} options.containerSize.width 宽度
   * @param {Object} options.tips 自定义提示信息
   * @param {number} options.tips.title
   * @param {number} options.tips.scanned
   * @param {Object} options.tips.succeed
   * @param {number} options.tips.canceled
   * @param {number} options.tips.expired
   * @param {number} options.tips.retry
   * @param {number} options.tips.failed
   *
   * @example
   *
   * authenticationClient.wxqrcode.startScanning("qrcode", {
   *  onSuccess: (userInfo, ticket) => {
   *    console.log(userInfo, ticket)
   *  },
   *  onError: (message) => onFail && onFail(`${message}`),
   * });
   *
   * @returns {null}
   * @memberof QrCodeAuthenticationClient
   *
   */
  async startScanning(
    domId: string,
    options?: {
      size?: {
        height: number;
        width: number;
      };
      containerSize?: {
        height: number;
        width: number;
      };
      interval?: number;
      onStart?: (timer: any) => any;
      onResult?: (data: QRCodeStatus) => any;
      onScanned?: (userInfo: QRCodeUserInfo) => any;
      onSuccess?: (userInfo: QRCodeUserInfo, ticket: string) => any;
      onCancel?: () => any;
      onError?: (message: string) => any;
      onExpired?: () => any;
      onCodeShow?: (random: string, url: string) => any;
      onCodeLoaded?: (random: string, url: string) => any;
      onCodeLoadFailed?: (message: string) => any;
      onCodeDestroyed?: (random: string) => any;
      tips?: {
        title?: string;
        scanned?: string;
        succeed?: string;
        canceled?: string;
        expired?: string;
        retry?: string;
        failed?: string;
      };
    }
  ) {
    options = options || {};
    const {
      size = {
        height: 240,
        width: 240
      },
      containerSize = {
        height: 300,
        width: 300
      },
      interval = 800,
      onStart,
      onResult,
      onScanned,
      onExpired,
      onSuccess,
      onCancel,
      onError,
      onCodeShow,
      onCodeLoaded,
      onCodeLoadFailed,
      // onCodeDestroyed,
      tips = {}
    } = options;
    const {
      title = `使用 <strong> ${
        this.scene === 'WXAPP_AUTH' ? '微信' : 'APP'
      } </strong> 扫码登录`,
      // scanned = '用户已扫码，等待确认',
      canceled = '用户取消授权',
      expired = '二维码已过期',
      succeed = '扫码成功',
      retry = '重试'
    } = tips;

    let node = document.getElementById(domId);
    let nodeWrapper: any;
    let needGenerate = false;

    if (!node) {
      node = document.createElement('div');
      node.id = domId;
      createCssClassStyleSheet(
        '__authing-qrcode-node-mount',
        `z-index: 65535;position: fixed;background: #fff;width: ${
          containerSize.width
        }px;height: ${
          containerSize.height
        }px;left: 50%;margin-left: -${containerSize.width /
          2}px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -${containerSize.height /
          2}px;border: 1px solid #ccc;`
      );
      node.classList.add('__authing-qrcode-node-mount');
      document.getElementsByTagName('body')[0].appendChild(node);
      needGenerate = true;
    } else {
      node.style.position = 'relative';
    }

    // 创建 <style>
    const styleNode = document.createElement('style');
    const style =
      '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';
    styleNode.type = 'text/css';
    if (styleNode.style) {
      styleNode.style.cssText = style;
    } else {
      styleNode.innerHTML = style;
    }
    document.getElementsByTagName('head')[0].appendChild(styleNode);

    // 一些显示事件
    const loading = () => {
      node.innerHTML =
        '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
    };

    const unloading = () => {
      const child = document.getElementById('authing__spinner');
      if (child) node.removeChild(child);
    };

    const genTip = (text: string) => {
      let formattedText: string;
      try {
        formattedText = JSON.parse(text).message || text;
      } catch (e) {
        formattedText = text;
      }

      const tip = document.createElement('span');
      tip.className = 'authing__heading-subtitle';
      if (!needGenerate) {
        createCssClassStyleSheet(
          '__authing__heading-subtitle-style',
          'display: block;font-weight: 400;font-size: 15px;color: #888;line-height: 48px;'
        );
        tip.classList.add('__authing__heading-subtitle-style');
      } else {
        createCssClassStyleSheet(
          '__authing__heading-subtitle-style',
          'display: block;font-weight: 400;font-size: 12px;color: #888;'
        );
        tip.classList.add('__authing__heading-subtitle-style');
      }
      tip.innerHTML = formattedText;
      return tip;
    };

    const genImage = (src: string) => {
      const qrcodeImage = document.createElement('img');
      qrcodeImage.className = 'authing__qrcode';
      qrcodeImage.src = src;
      qrcodeImage.width = size.width;
      qrcodeImage.height = size.height;
      return qrcodeImage;
    };

    const genShadow = (
      text: string,
      aOnClick: () => any,
      shadowAId: string
    ) => {
      let shadowId = 'authing__retry';

      if (document.getElementById(shadowId)) {
        document.getElementById(shadowId).remove();
      }

      const shadow = document.createElement('div');
      shadow.id = shadowId;
      createCssClassStyleSheet(
        '__authing-shadow-style',
        `text-align:center;width: ${size.width}px;height: ${
          size.height
        }px;position: absolute;left: 50%;top: 0px;margin-left: -${size.width /
          2}px;background-color: rgba(0,0,0, 0.5);line-height:${
          size.height
        }px;color:#fff;font-weight:600;`
      );
      shadow.classList.add('__authing-shadow-style');

      const shadowA = document.createElement('a');
      shadowA.innerHTML = text;
      shadowA.style.color = '#fff';
      shadowA.style.borderBottom = '1px solid #fff';
      shadowA.style.cursor = 'pointer';
      shadowA.onclick = aOnClick;
      shadowA.id = shadowAId;
      shadow.appendChild(shadowA);
      return shadow;
    };

    const displayScannedUser = (_: string, photo: string) => {
      let shadowId = 'authing__retry';

      if (document.getElementById(shadowId)) {
        document.getElementById(shadowId).remove();
      }
      const shadow = document.createElement('div');
      createCssClassStyleSheet(
        '__authing-shadow-style-position',
        `text-align:center;width: ${size.width}px;height: ${
          size.height
        }px;position: absolute;left: 50%;top: 0px;margin-left: -${size.width /
          2}px;line-height:${
          size.height
        }px;color:#fff;font-weight:600;display: flex;
      align-items: center; /*垂直居中*/
      justify-content: center; /*水平居中*/`
      );
      shadow.classList.add('__authing-shadow-style-position');
      shadow.id = shadowId;

      const img = document.createElement('img');
      img.id = 'authing__scanned-user';
      img.src = photo;
      img.style.width = '100px';
      img.style.height = '100px';
      shadow.appendChild(img);
      return shadow;
    };

    function genRetry(qrcodeElm: any, tipText: string, retryId?: string) {
      const tip = genTip(tipText);

      nodeWrapper = document.createElement('div');
      nodeWrapper.id = 'authing__qrcode-wrapper';
      nodeWrapper.style.textAlign = 'center';
      nodeWrapper.style.position = 'relative';
      // TODO: 这里换一个二维码
      const qrcodeImage = genImage(
        'https://usercontents.authing.cn/0ab3a1bf19c0d7106673e494d532f91a.png'
      );

      if (!needGenerate) {
        qrcodeImage.style.marginTop = '12px';
      } else {
        qrcodeImage.style.marginTop = '16px';
      }

      qrcodeImage.onload = () => {
        unloading();
      };

      const shadow = genShadow(
        retry,
        () => {
          start();
        },
        retryId || '__authing_retry_btn'
      );

      nodeWrapper.appendChild(qrcodeImage);
      nodeWrapper.appendChild(shadow);
      nodeWrapper.appendChild(tip);
      qrcodeElm.appendChild(nodeWrapper);
    }

    let start = async () => {
      loading();

      let random: string = null;
      let url: string = null;
      try {
        const data = await this.geneCode();
        random = data.random;
        url = data.url;
      } catch (error) {
        error = error;
        genRetry(node, error.message);
        if (onCodeLoadFailed) {
          onCodeLoadFailed(error);
        }
        return;
      }

      if (onCodeLoaded) {
        onCodeLoaded(random, url);
      }

      nodeWrapper = document.createElement('div');
      nodeWrapper.id = 'authing__qrcode-wrapper';
      nodeWrapper.style.textAlign = 'center';
      nodeWrapper.style.position = 'relative';
      const qrcodeImage = genImage(url);
      qrcodeImage.onload = () => {
        unloading();
        if (onCodeShow) {
          onCodeShow(random, url);
        }

        // 需要对用户的 onSuccess, onScanned, onExpired, onCancel 进行加工从而在页面上展示相关提示
        let decoratedOnSuccess = function(
          userInfo: QRCodeUserInfo,
          ticket: string
        ) {
          const shadow = genShadow(succeed, null, '__authing_success_tip');
          nodeWrapper.appendChild(shadow);
          if (onSuccess) {
            onSuccess(userInfo, ticket);
          }
        };

        let decoratedOnScanned = function(userInfo: QRCodeUserInfo) {
          const shadow = displayScannedUser(userInfo.nickname, userInfo.photo);
          nodeWrapper.appendChild(shadow);
          if (onScanned) {
            onScanned(userInfo);
          }
        };

        let decoratedOnCancel = function() {
          const shadow = genShadow(canceled, null, '__authing_success_tip');
          nodeWrapper.appendChild(shadow);
          if (onCancel) {
            onCancel();
          }
        };

        let decoratedOnExpired = function() {
          const shadow = genShadow(expired, null, '__authing_success_tip');
          nodeWrapper.appendChild(shadow);
          if (onExpired) {
            onExpired();
          }
        };

        let decoratedOnError = function(data: any) {
          const { message } = data;
          if (onError) {
            onError(message);
          }
        };

        // 开始轮询
        this.startPolling(random, {
          interval,
          onStart,
          onResult,
          onScanned: decoratedOnScanned,
          onExpired: decoratedOnExpired,
          onSuccess: decoratedOnSuccess,
          onCancel: decoratedOnCancel,
          onError: decoratedOnError
        });

        const tip = genTip(title);
        nodeWrapper.appendChild(qrcodeImage);
        nodeWrapper.appendChild(tip);
        node.appendChild(nodeWrapper);
      };
    };

    start();
  }

  /**
   * @name geneCode
   * @name_zh 生成二维码
   * @description 生成二维码
   *
   * @example
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const { url, random } = await authenticationClient.wxqrcode.geneCode()
   *
   * # random 二维码唯一 ID
   * # url 二维码链接
   *
   * @returns {Promise<QRCodeGenarateResult>}
   * @memberof QrCodeAuthenticationClient
   */
  async geneCode(): Promise<QRCodeGenarateResult> {
    const api = `${this.options.host}/api/v2/qrcode/gene`;
    const data = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        scene: this.scene
      }
    });
    return data;
  }

  /**
   * @name checkStatus
   * @name_zh 检测扫码状态
   * @description 检测扫码状态
   *
   * @param {string} random
   *
   * @example
   *
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const { random, status, ticket, userInfo } = await authenticationClient.wxqrcode.checkStatus('RANDOM')
   * # status: 二维码状态: 0 - 未使用, 1 - 已扫码, 2 - 已授权, 3 - 取消授权, -1 - 已过期
   * # ticket: 用于换取用户信息的一个随机字符串
   * # userInfo: 用户信息
   *
   * @returns {Promise<QRCodeStatus>}
   * @memberof QrCodeAuthenticationClient
   */
  async checkStatus(random: string): Promise<QRCodeStatus> {
    const api = `${this.options.host}/api/v2/qrcode/check?random=${random}`;
    const data = await this.httpClient.request({
      method: 'GET',
      url: api
    });
    return data;
  }

  /**
   * @name exchangeUserInfo
   * @name_zh 使用 ticket 交换用户信息
   * @description 使用 ticket 交换用户信息
   *
   * @example
   *
   * const authenticationClient = new AuthenticationClient({
   *    appId: "YOUR_APP_ID",
   * })
   * const user = await authenticationClient.wxqrcode.exchangeUserInfo('TICKET')
   * # user: 完整的用户信息，其中 user.token 为用户的登录凭证。
   *
   * @param {string} ticket ticket
   * @returns {Promise<Partial<User>>}
   * @memberof QrCodeAuthenticationClient
   */
  async exchangeUserInfo(ticket: string): Promise<Partial<User>> {
    const api = `${this.options.host}/api/v2/qrcode/userinfo`;
    const userInfo = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        ticket
      }
    });
    return userInfo;
  }

  /**
   * @name startPolling
   * @name_zh 开始轮询二维码状态
   * @description 开始轮询二维码状态
   *
   * @param {string} random 二维码唯一 ID
   * @param {Object} options
   * @param {number} options.interval 间隔时间，单位为毫秒，默认为 800 毫秒
   * @param {Function} options.onStart 开始轮询的事件回调函数, 第一个参数为 setInterval 返回的计时器，可以用 clearInterval 取消此计时器
   * @param {Function} options.onResult 获取到二维码最新状态事件回调函数，第一个参数为的类型为 QRCodeStatus。
   * @param {Function} options.onScanned 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的。
   * 出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
   * @param {Function} options.onSuccess 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。第一个参数为 userInfo 用户信息，第二个参数为 ticket，用于换取用户的详情。
   * 详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
   * ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。
   * @param {Function} options.onCancel 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。
   * @param {Function} options.onError 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在" }
   * @param {Function} options.onExpired 二维码失效时被回调，只回调一次，之后轮询结束。
   *
   * @returns {null}
   * @memberof QrCodeAuthenticationClient
   */
  async startPolling(
    random: string,
    options?: {
      interval?: number;
      onStart?: (timer: any) => any;
      onResult?: (data: QRCodeStatus) => any;
      onScanned?: (userInfo: QRCodeUserInfo) => any;
      onSuccess?: (userInfo: QRCodeUserInfo, ticket: string) => any;
      onCancel?: () => any;
      onError?: (message: string) => any;
      onExpired?: () => any;
    }
  ) {
    options = options || {};
    const {
      interval = 800,
      onStart,
      onResult,
      onScanned,
      onExpired,
      onSuccess,
      onCancel,
      onError
    } = options;

    let calledOnScanned = false;
    let callOnPoolingStart = false;

    const timer = setInterval(async () => {
      // 开始轮询时回调 onPollingStart
      if (onStart && !callOnPoolingStart) {
        onStart(timer);
        callOnPoolingStart = true;
      }

      try {
        const data = await this.checkStatus(random);
        const { status, ticket, userInfo } = data;
        // 每次获取到数据都回调 onResult 函数
        if (onResult) {
          onResult(data);
        }

        // 过期
        if (status === -1) {
          clearInterval(timer);
          if (onExpired) {
            onExpired();
          }
        }

        // 未扫码
        if (status === 0) {
        }

        // 已扫码
        if (status === 1) {
          if (onScanned && !calledOnScanned) {
            onScanned(userInfo);
            calledOnScanned = true;
          }
        }

        // 已授权
        if (status === 2) {
          clearInterval(timer);
          if (onSuccess) {
            onSuccess(userInfo, ticket);
          }
        }

        // 已取消
        if (status === 3) {
          clearInterval(timer);
          if (onCancel) {
            onCancel();
          }
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
        return;
      }
    }, interval);
    return timer;
  }
}
