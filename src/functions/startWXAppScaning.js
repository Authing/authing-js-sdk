import createCssClassStyleSheet from '../utils/createCssClassStyleSheet'
export default function startWXAppScaning(opts) {
  const self = this;

  if (!opts) {
    opts = {};
  }

  const mountNode = opts.mount || 'authing__qrcode-root-node';
  const interval = opts.interval || 1500;
  const { tips, successTips, successRedirectTips, retryTips, failedTips } = opts;

  this.opts.enableFetchPhone = opts.enableFetchPhone || this.opts.enableFetchPhone;
  this.opts.useSelfWxapp = opts.useSelfWxapp || this.opts.useSelfWxapp;

  let redirect = true;

  // eslint-disable-next-line no-prototype-builtins
  if (opts.hasOwnProperty('redirect')) {
    if (!opts.redirect) {
      redirect = false;
    }
  }

  const { onError, onSuccess, onIntervalStarting, onQRCodeShow, onQRCodeLoad } = opts;

  let qrcodeNode = document.getElementById(mountNode);
  let qrcodeWrapper;

  let needGenerate = false;
  let start = () => { };

  if (!qrcodeNode) {
    qrcodeNode = document.createElement('div');
    qrcodeNode.id = mountNode;
    createCssClassStyleSheet('__authing-qrcode-node', `z-index: 65535;position: fixed;background: #fff;width: 300px;height: 300px;left: 50%;margin-left: -150px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -150px;border: 1px solid #ccc;`)
    qrcodeNode.classList.add("__authing-qrcode-node")
    document.getElementsByTagName('body')[0].appendChild(qrcodeNode);
    needGenerate = true;
  } else {
    createCssClassStyleSheet('__authing-qrcode-node', `position:relative;`)
    qrcodeNode.classList.add("__authing-qrcode-node")
  }

  const styleNode = document.createElement('style'); const
    style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';

  styleNode.type = 'text/css';

  if (styleNode.styleSheet) {
    styleNode.styleSheet.cssText = style;
  } else {
    styleNode.innerHTML = style;
  }

  document.getElementsByTagName('head')[0].appendChild(styleNode);

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
      createCssClassStyleSheet('__authing__heading-tip', `display: block;font-weight: 400;font-size: 15px;color: #888;ine-height: 48px;`)
      tip.classList.add('__authing__heading-tip');
    } else {
      createCssClassStyleSheet('__authing__heading-tip', `display: block;font-weight: 400;font-size: 12px;color: #888;`)
      tip.classList.add('__authing__heading-tip');
    }
    tip.innerHTML = text;
    return tip;
  };

  const genImage = (src) => {
    const qrcodeImage = document.createElement('img');
    qrcodeImage.class = 'authing__qrcode';
    qrcodeImage.src = src;
    qrcodeImage.width = 240;
    qrcodeImage.height = 240;
    return qrcodeImage;
  };

  const genShadow = (text, aOnClick, shadowAId) => {
    const shadow = document.createElement('div');
    shadow.id = 'authing__retry';
    createCssClassStyleSheet('__authing-shadow-wrap', 'text-align:center;width: 240px;height: 240px;position: absolute;left: 50%;top: 0px;margin-left: -120px;background-color: rgba(0,0,0, 0.5);line-height:240px;color:#fff;font-weight:600;')
    shadow.classList.add('__authing-shadow-wrap')
    const shadowA = document.createElement('a');
    shadowA.innerHTML = text;
    createCssClassStyleSheet('__authing-shadow-a-wrap', 'color:#fff;border-bottom: 1px solid #fff;cursor: pointer;')

    shadowA.classList.add('__authing-shadow-a-wrap');
    shadowA.onclick = aOnClick;
    shadowA.id = shadowAId;
    shadow.appendChild(shadowA);
    return shadow;
  };

  function genRetry(qrcodeElm, tipText, retryId) {
    const tip = genTip(tipText);

    qrcodeWrapper = document.createElement('div');
    qrcodeWrapper.id = 'authing__qrcode-wrapper';
    createCssClassStyleSheet('__authing-qrcode-wrapper-center', 'text-align: center;position: relative;')

    qrcodeWrapper.classList.add('__authing-qrcode-wrapper-center')

    const qrcodeImage = genImage('https://usercontents.authing.cn/authing_user_manager_wxapp_qrcode.jpg');

    if (!needGenerate) {
      qrcodeImage.style.marginTop = '12px';
    } else {
      qrcodeImage.style.marginTop = '16px';
    }

    qrcodeImage.onload = () => {
      unloading();
    };

    const shadow = genShadow(retryTips || '点击重试', () => {
      start();
    }, retryId || '__authing_retry_btn');

    qrcodeWrapper.appendChild(qrcodeImage);
    qrcodeWrapper.appendChild(shadow);
    qrcodeWrapper.appendChild(tip);
    qrcodeElm.appendChild(qrcodeWrapper);
  }

  start = () => {
    loading();
    self.genQRCode().then((qrRes) => {
      qrRes = qrRes.data;

      if (qrRes.code !== 200) {
        genRetry(qrcodeNode, qrRes.message);
        if (onError) {
          onError(qrRes);
        }
      } else {
        const qrcode = qrRes.data;
        if (onQRCodeLoad) {
          onQRCodeLoad(qrcode);
        }        
        sessionStorage.qrcodeUrl = qrcode.qrcode;
        sessionStorage.qrcode = JSON.stringify(qrcode);

        if (qrcodeNode) {
          qrcodeWrapper = document.createElement('div');
          qrcodeWrapper.id = 'authing__qrcode-wrapper';
          qrcodeWrapper.style.textAlign = 'center';
          qrcodeWrapper.style.position = 'relative;';

          const qrcodeImage = genImage(qrcode.qrcode);

          qrcodeImage.onload = () => {
            unloading();
            if (onQRCodeShow) {
              onQRCodeShow(qrcode);
            }
            let inter = 0;
            inter = setInterval(() => {
              if (onIntervalStarting) {
                onIntervalStarting(inter);
              }
              self.checkQR().then((checkRes) => {
                const checkResult = checkRes.data.data;
                if (checkResult.code === 200) {
                  clearInterval(inter);
                  // 登录成功记录 token
                  this.tokenManager.setUserToken(checkResult.data.token);
                  if (redirect) {
                    const shadowX = genShadow(successRedirectTips || '扫码成功，即将跳转', () => {
                      window.location.href = `${checkResult.redirect}?code=200&data=${JSON.stringify(checkResult.data)}`;
                    }, '__authing_success_redirect_tip');
                    setTimeout(() => {
                      window.location.href = `${checkResult.redirect}?code=200&data=${JSON.stringify(checkResult.data)}`;
                    }, 600);
                    qrcodeWrapper.appendChild(shadowX);
                  } else {
                    const shadow = genShadow(successTips || '扫码成功', null, '__authing_success_tip');
                    qrcodeWrapper.appendChild(shadow);
                    if (onSuccess) {
                      onSuccess(checkResult);
                    }
                  }
                }
              });
            }, interval);
          };

          const tip = genTip(tips || `使用 <strong>微信</strong> 或小程序 <strong>${this.opts.enableFetchPhone?'小登录':'身份管家'}</strong> 扫码登录`);

          qrcodeWrapper.appendChild(qrcodeImage);
          qrcodeWrapper.appendChild(tip);
          qrcodeNode.appendChild(qrcodeWrapper);
        }
      }
    }).catch((error) => {
      console.log(error)
      genRetry(qrcodeNode, failedTips || '网络出错，请重试', '__authing_failed_tip');
      if (onError) {
        onError(error);
      }
    });
  };

  start();
}