import { isFunction } from "../../utils/isFunction";
import createCssClassStyleSheet from '../../utils/createCssClassStyleSheet'

function checkOptions(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  if (!(typeof options === 'object' && options !== null)) {
    throw Error('options must be an object.');
  }

  let { scene = "APP_AUTH", interval = 800,
    onPollingStart, onResult, onScanned, onExpired, onSuccess, onCancel, onError,
    onQRCodeShow, onQRCodeLoad, onQRCodeLoadFaild, qrcodeSize, containerSize
  } = options

  if (scene !== "APP_AUTH") {
    throw Error(`Unsupported scene ${scene}, the choices are APP_AUTH`)
  }

  if (onPollingStart) {
    if (!isFunction(onPollingStart)) {
      throw Error('onResult must be a function.');
    }
  }

  if (interval) {
    if (typeof interval !== "number") {
      throw Error('interval must be a number.');
    }
  }

  if (onResult) {
    if (!isFunction(onResult)) {
      throw Error('onResult must be a function.');
    }
  }

  if (onExpired) {
    if (!isFunction(onExpired)) {
      throw Error('onExpired must be a function.');
    }
  }

  if (onSuccess) {
    if (!isFunction(onSuccess)) {
      throw Error('onSuccess must be a function.');
    }
  }

  if (onCancel) {
    if (!isFunction(onCancel)) {
      throw Error('onCancel must be a function.');
    }
  }

  if (onError) {
    if (!isFunction(onError)) {
      throw Error('onError must be a function.');
    }
  }

  if (onScanned) {
    if (!isFunction(onScanned)) {
      throw Error('onScanned must be a function.');
    }
  }

  if (onQRCodeShow) {
    if (!isFunction(onQRCodeShow)) {
      throw Error('onQRCodeShow must be a function.');
    }
  }

  if (onQRCodeLoad) {
    if (!isFunction(onQRCodeLoad)) {
      throw Error('onQRCodeLoad must be a function.');
    }
  }

  if (onQRCodeLoadFaild) {
    if (!isFunction(onQRCodeLoadFaild)) {
      throw Error('onQRCodeLoadFaild must be a function.');
    }
  }

  if (qrcodeSize) {
    if (!(typeof qrcodeSize === 'object' && qrcodeSize !== null)) {
      throw Error('qrcodeSize must be an object.');
    }

    if (typeof qrcodeSize.width !== "number") {
      throw Error('qrcodeSize.width must be an number.');
    }

    if (typeof qrcodeSize.height !== "number") {
      throw Error('qrcodeSize.height must be an number.');
    }
  }

  if (containerSize) {
    if (!(typeof containerSize === 'object' && containerSize !== null)) {
      throw Error('containerSize must be an object.');
    }

    if (typeof containerSize.width !== "number") {
      throw Error('containerSize.width must be an number.');
    }

    if (typeof containerSize.height !== "number") {
      throw Error('containerSize.height must be an number.');
    }
  }
}

export default function startAppAuthScanning(options) {

  /*
  - 调用示例
  authing.startAppAuthScanning({
      mount: '', // 可选，二维码挂载点，如不写则默认漂浮在文档中间
      qrcodeSize: {
        height: 240,
        width: 240,
      },
      containerSize: {
        height: 300,
        width: 300
      },
      interval: 1000, // 可选，轮询间隔时间，默认为 800 ms 
      onPollingStart: (intervalNum) => {},
      onResult: (res) => {},
      onScanned: (userInfo) => {},
      onSuccess: (data) => {
          const { ticket, userInfo } = data;
      },
      onCancel: () => {},
      onExpired: () => {},
      onError: (data) => {},
 
      onQRCodeShow: (qrcode) => {},
      onQRCodeLoad: (qrcode) => {},
      onQRCodeLoadFaild: (error) => {},
      tips: '使用 <strong> APP </strong> 扫码登录',
      scannedTips: '用户已扫码，等待确认',
      canceledTips: '用户取消授权',
      expiredTips: '二维码已过期',
      successTips: '扫码成功',
      retryTips: '重试',
      failedTips: '网络出错，请重试'
  })
  */

  const self = this;
  checkOptions(options);

  let { mount = "authing__app-scan-qrcode-root-node", scene = "APP_AUTH", interval = 800,
    onPollingStart, onResult, onScanned, onExpired, onSuccess, onCancel, onError, onQRCodeShow, onQRCodeLoad,
    onQRCodeLoadFaild,
    tips = "使用 <strong> APP </strong> 扫码登录",
    scannedTips = "用户已扫码，等待确认",
    canceledTips = "用户取消授权",
    expiredTips = "二维码已过期",
    successTips = "扫码成功",
    retryTips = "重试",
    failedTips = "网络出错，请重试",
    qrcodeSize = {
      height: 240,
      width: 240
    },
    containerSize = {
      height: 300,
      width: 300
    },
  } = options


  // mount 二维码
  const mountNode = mount
  let qrcodeNode = document.getElementById(mountNode);
  let qrcodeWrapper;
  let needGenerate = false;
  if (!qrcodeNode) {
    qrcodeNode = document.createElement('div');
    qrcodeNode.id = mountNode;
    createCssClassStyleSheet('__authing-qrcode-node-mount',`z-index: 65535;position: fixed;background: #fff;width: ${containerSize.width}px;height: ${containerSize.height}px;left: 50%;margin-left: -${containerSize.width / 2}px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -${containerSize.height / 2}px;border: 1px solid #ccc;`)
    qrcodeNode.classList.add('__authing-qrcode-node-mount')
    document.getElementsByTagName('body')[0].appendChild(qrcodeNode);
    needGenerate = true;
  } else {
    qrcodeNode.style.position = 'relative';
  }

  // 创建 <style> 
  const styleNode = document.createElement('style'); const
    style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';
  styleNode.type = 'text/css';
  if (styleNode.styleSheet) {
    styleNode.styleSheet.cssText = style;
  } else {
    styleNode.innerHTML = style;
  }
  document.getElementsByTagName('head')[0].appendChild(styleNode);


  // 一些显示事件
  const loading = () => {
    qrcodeNode.innerHTML = '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
  };

  const unloading = () => {
    const child = document.getElementById('authing__spinner');
    qrcodeNode.removeChild(child);
  };

  const genTip = (text) => {
    const tip = document.createElement('span');
    tip.class = 'authing__heading-subtitle';
    if (!needGenerate) {
      createCssClassStyleSheet('__authing__heading-subtitle-style', 'display: block;font-weight: 400;font-size: 15px;color: #888;line-height: 48px;')
      tip.classList.add('__authing__heading-subtitle-style')
    } else {
      createCssClassStyleSheet('__authing__heading-subtitle-style', 'display: block;font-weight: 400;font-size: 12px;color: #888;')
      tip.classList.add('__authing__heading-subtitle-style')
    }
    tip.innerHTML = text;
    return tip;
  };

  const genImage = (src) => {
    const qrcodeImage = document.createElement('img');
    qrcodeImage.class = 'authing__qrcode';
    qrcodeImage.src = src;
    qrcodeImage.width = qrcodeSize.width;
    qrcodeImage.height = qrcodeSize.height;
    return qrcodeImage;
  };

  const genShadow = (text, aOnClick, shadowAId) => {

    let shadowId = 'authing__retry'

    if (document.getElementById(shadowId)) {
      document.getElementById(shadowId).remove()
    }

    const shadow = document.createElement('div');
    shadow.id = shadowId;
    createCssClassStyleSheet('__authing-shadow-style', `text-align:center;width: ${qrcodeSize.width}px;height: ${qrcodeSize.height}px;position: absolute;left: 50%;top: 0px;margin-left: -${qrcodeSize.width / 2}px;background-color: rgba(0,0,0, 0.5);line-height:${qrcodeSize.height}px;color:#fff;font-weight:600;`)
    shadow.classList.add('__authing-shadow-style')

    const shadowA = document.createElement('a');
    shadowA.innerHTML = text;
    shadowA.style.color='#fff';
    shadowA.style.borderBottom = '1px solid #fff'
    shadowA.style.cursor = 'pointer'
    shadowA.onclick = aOnClick;
    shadowA.id = shadowAId;
    shadow.appendChild(shadowA);
    return shadow;
  };

  const displayScannedUser = (nickname, photo) => {

    let shadowId = 'authing__retry'

    if (document.getElementById(shadowId)) {
      document.getElementById(shadowId).remove()
    }
    const shadow = document.createElement('div');
    createCssClassStyleSheet('__authing-shadow-style-position',  `text-align:center;width: ${qrcodeSize.width}px;height: ${qrcodeSize.height}px;position: absolute;left: 50%;top: 0px;margin-left: -${qrcodeSize.width / 2}px;line-height:${qrcodeSize.height}px;color:#fff;font-weight:600;display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/`)
    shadow.classList.add('__authing-shadow-style-position')
    shadow.id = shadowId;

    const img = document.createElement('img');
    img.id = 'authing__scanned-user';
    img.src = photo
    img.style.width = '100px'
    img.style.height = '100px'
    shadow.appendChild(img);
    return shadow;
  };

  function genRetry(qrcodeElm, tipText, retryId) {
    const tip = genTip(tipText);

    qrcodeWrapper = document.createElement('div');
    qrcodeWrapper.id = 'authing__qrcode-wrapper';
    qrcodeWrapper.style.textAlign = 'center';
    qrcodeWrapper.style.position = 'relative';
    // TODO: 这里换一个二维码
    const qrcodeImage = genImage('https://usercontents.authing.cn/0ab3a1bf19c0d7106673e494d532f91a.png');

    if (!needGenerate) {
      qrcodeImage.style.marginTop = '12px';
    } else {
      qrcodeImage.style.marginTop = '16px';
    }

    qrcodeImage.onload = () => {
      unloading();
    };

    const shadow = genShadow(retryTips, () => {
      start();
    }, retryId || '__authing_retry_btn');

    qrcodeWrapper.appendChild(qrcodeImage);
    qrcodeWrapper.appendChild(shadow);
    qrcodeWrapper.appendChild(tip);
    qrcodeElm.appendChild(qrcodeWrapper);
  }


  let start = () => {
    loading();
    self.qrlogin.geneCode({ scene: scene }).then((res) => {
      if (res.code !== 200) {
        genRetry(qrcodeNode, res.message);
        if (onQRCodeLoadFaild) {
          onQRCodeLoadFaild(res);
        }
      } else {
        const { qrcodeId, qrcodeUrl } = res.data
        if (onQRCodeLoad) {
          onQRCodeLoad(qrcodeUrl);
        }

        if (qrcodeNode) {
          qrcodeWrapper = document.createElement('div');
          qrcodeWrapper.id = 'authing__qrcode-wrapper';
          qrcodeWrapper.style.textAlign = 'center';
          qrcodeWrapper.style.position = 'relative';

          const qrcodeImage = genImage(qrcodeUrl);
          qrcodeImage.onload = () => {
            unloading();
            if (onQRCodeShow) {
              onQRCodeShow({
                qrcodeId,
                qrcodeUrl
              });
            }

            // 需要对用户的 onSuccess, onScanned, onExpired, onCancel 进行加工从而在页面上展示相关提示
            let decoratedOnSuccess = function (data) {
              const shadow = genShadow(successTips, null, '__authing_success_tip');
              qrcodeWrapper.appendChild(shadow);
              if (onSuccess) {
                onSuccess(data)
              }
            }

            let decoratedOnScanned = function (userInfo) {
              const shadow = displayScannedUser(
                userInfo.nickname,
                userInfo.photo
              )
              qrcodeWrapper.appendChild(shadow);
              if (onScanned) {
                onScanned(userInfo)
              }
            }

            let decoratedOnCancel = function () {
              const shadow = genShadow(canceledTips, null, '__authing_success_tip');
              qrcodeWrapper.appendChild(shadow);
              if (onCancel) {
                onCancel()
              }
            }

            let decoratedOnExpired = function () {
              const shadow = genShadow(expiredTips, null, '__authing_success_tip');
              qrcodeWrapper.appendChild(shadow);
              if (onExpired) {
                onExpired()
              }
            }

            let decoratedOnError = function (data) {
              if (onError) {
                onError(data)
              }
            }

            // 开始轮询
            self.qrlogin.pollingCodeStatus({
              qrcodeId,
              scene,
              interval,
              onPollingStart,
              onResult,
              onScanned: decoratedOnScanned,
              onExpired: decoratedOnExpired,
              onSuccess: decoratedOnSuccess,
              onCancel: decoratedOnCancel,
              onError: decoratedOnError
            })
          };

          const tip = genTip(tips);
          qrcodeWrapper.appendChild(qrcodeImage);
          qrcodeWrapper.appendChild(tip);
          qrcodeNode.appendChild(qrcodeWrapper);
        }
      }
    }).catch((error) => {
      genRetry(qrcodeNode, failedTips);
      if (onQRCodeLoadFaild) {
        onQRCodeLoadFaild(error);
      }
    });
  };

  start();
}