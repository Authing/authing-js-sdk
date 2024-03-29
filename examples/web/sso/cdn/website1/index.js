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
  authing.handleRedirectCallback().then(loginState => {
    console.log('loginState: ', loginState)
    // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
    window.location.replace('/')
  })
} else {
  authing.getLoginState().then(loginState => {
    console.log(loginState)
  })
}

var loginWithRedirect = document.querySelector('#loginWithRedirect')
var logoutWithRedirect = document.querySelector('#logoutWithRedirect')
var getUserInfo = document.querySelector('#getUserInfo')
var getLoginState = document.querySelector('#getLoginState')

loginWithRedirect.onclick = function () {
  // authing.loginWithRedirect(params)
  authing.loginWithRedirect()
}

logoutWithRedirect.onclick = function () {
  authing.logoutWithRedirect()
}

getUserInfo.onclick = function () {
  authing.getUserInfo().then(userInfo => {
    console.log('userInfo: ', userInfo)
  })
}

getLoginState.onclick = function () {
  authing.getLoginState().then(loginState => {
    console.log('loginState: ', loginState)
  })
}
