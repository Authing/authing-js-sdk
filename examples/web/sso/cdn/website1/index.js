var authing = new AuthingFactory.Authing({
  // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
  domain: 'AUTHING_DOMAIN_URL',

  // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
  appId: 'AUTHING_APP_ID',

  // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
  redirectUri: 'YOUR_REDIRECT_URL',

  // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
  userPoolId: 'AUTHING_USER_POOL_ID'
})

if (authing.isRedirectCallback()) {
  console.log('redirect')
  authing.handleRedirectCallback().then((loginState) => {
    console.log('loginState: ', loginState)
    // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
    window.location.replace('/')
  })
} else {
  authing.getLoginState({ ignoreCache: true }).then(loginState => {
    console.log('loginState: ', loginState)
    if (!loginState) {
      // 静默登录。取不到用户信息直接跳转到授权中心
      authing.loginWithRedirect();
    }
  })
}

var loginWithPopup = document.querySelector('#loginWithPopup')
var loginWithRedirect = document.querySelector('#loginWithRedirect')
var logoutWithRedirect = document.querySelector('#logoutWithRedirect')
var getUserInfo = document.querySelector('#getUserInfo')

loginWithPopup.onclick = function () {
  const params = {
    // 即使在用户已登录时也提示用户再次登录
    forced: true
  }
  authing.loginWithPopup(params).then(loginState => {
    console.log('loginState: ', loginState)
  })
}

loginWithRedirect.onclick = function () {
  const params = {
    redirectUri: 'YOUR_REDIRECT_URL',

    // 发起登录的 URL，若设置了 redirectToOriginalUri 会在登录结束后重定向回到此页面，默认为当前 URL
    originalUri: 'YOUR_ORIGINAL_URL',

    // 即使在用户已登录时也提示用户再次登录
    forced: true,

    // 自定义的中间状态，会被传递到回调端点
    customState: {}
  }
  authing.loginWithRedirect()
}

logoutWithRedirect.onclick = function () {
  authing.logoutWithRedirect({
    redirectUri: 'https://www.baidu.com'
  })
}

getUserInfo.onclick = function () {
  authing.getUserInfo().then(userInfo => {
    console.log('userInfo: ', userInfo)
  })
}
