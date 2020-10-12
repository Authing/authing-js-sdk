import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import {
  AuthenticationClientOptions,
  QRCodeGenarateResult,
  QRCodeStatus,
  QRCodeUserInfo
} from './types';
import { createCssClassStyleSheet } from './utils';
import { User } from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';

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
   * @description 生成二维码
   *
   */
  async geneCode(
    customData: { [x: string]: any } = {}
  ): Promise<QRCodeGenarateResult> {
    const api = `${this.options.host}/v2/api/qrcode/gene`;
    const data = await this.httpClient.request({
      method: 'POST',
      url: api,
      data: {
        scene: this.scene,
        customData
      }
    });
    return data;
  }

  /**
   * @description 检查二维码状态
   *
   */
  async checkStatus(random: string): Promise<QRCodeStatus> {
    const api = `${this.options.host}/v2/api/qrcode/check?random=${random}`;
    const data = await this.httpClient.request({
      method: 'GET',
      url: api
    });
    return data;
  }

  async exchangeUserInfo(ticket: string): Promise<Partial<User>> {
    const api = `${this.options.host}/v2/api/qrcode/userinfo`;
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
   * @description 开始轮询二维码状态
   *
   */
  async startPolling(
    random: string,
    options?: {
      /** 间隔时间，单位为毫秒，默认为 800 毫秒 */
      interval?: number;
      /** 开始轮询的事件回调函数 */
      onStart?: (
        /** setInterval 返回的计时器，可以用 clearInterval 取消此计时器 */
        timer: any
      ) => any;
      /** 获取到二维码最新状态事件回调函数 */
      onResult?: (data: QRCodeStatus) => any;
      /** 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的 */
      onScanned?: (userInfo: QRCodeUserInfo) => any;
      /** 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。参数 data 是一个字典，包含两个字段：ticket 和 userInfo。
       * 出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
       * 详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
       * ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。 */
      onSuccess?: (userInfo: QRCodeUserInfo, ticket: string) => any;
      /** 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。 */
      onCancel?: () => any;
      /**
       * 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在","data": null}。完整错误代码请见 https://docs.authing.co/advanced/error-code.html。
       */
      onError?: (message: string) => any;
      /**
       * 二维码失效时被回调，只回调一次，之后轮询结束。
       */
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

  async startScanning(
    domId: string,
    options?: {
      /** 二维码图片大小，默认为 240 * 240 */
      size?: {
        height: number;
        width: number;
      };

      /** DOM 容器大小，默认为 300 * 300 */
      containerSize?: {
        height: number;
        width: number;
      };

      /** 间隔时间，单位为毫秒，默认为 800 毫秒 */
      interval?: number;
      /** 开始轮询的事件回调函数 */
      onStart?: (
        /** setInterval 返回的计时器，可以用 clearInterval 取消此计时器 */
        timer: any
      ) => any;
      /** 获取到二维码最新状态事件回调函数 */
      onResult?: (data: QRCodeStatus) => any;
      /** 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的 */
      onScanned?: (userInfo: QRCodeUserInfo) => any;
      /** 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。参数 data 是一个字典，包含两个字段：ticket 和 userInfo。
       * 出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
       * 详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
       * ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。 */
      onSuccess?: (userInfo: QRCodeUserInfo, ticket: string) => any;
      /** 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。 */
      onCancel?: () => any;
      /**
       * 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在","data": null}。完整错误代码请见 https://docs.authing.co/advanced/error-code.html。
       */
      onError?: (message: string) => any;
      /**
       * 二维码失效时被回调，只回调一次，之后轮询结束。
       */
      onExpired?: () => any;
      onCodeShow?: (random: string, url: string) => any;
      onCodeLoaded?: (random: string, url: string) => any;
      onCodeLoadFailed?: (message: string) => any;
      onCodeDestroyed?: (random: string) => any;

      /**
       * 提示文字
       */
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
      tip.innerHTML = text;
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
}
