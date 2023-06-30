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
  authing.handleRedirectCallback().then(() => {
    // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
    // 处理 handleCallback 和最后 replace 的应该是两个不同的页面，这里模拟一下
    window.location.replace('/?a=1')
  })
} else {
  try {
    const a = +window.location.search.split('?')[1].split('=')[1]
    if (a === 1) {
      getUserInfo()
      getLoginState()
    } else {
      console.log('normal')
      authing.loginWithRedirect()
    }
  } catch (e) {
    console.log('normal')
    authing.loginWithRedirect()
  }
}

var loginWithRedirectButton = document.querySelector('#loginWithRedirect')
var logoutWithRedirectButton = document.querySelector('#logoutWithRedirect')
var getUserInfoButton = document.querySelector('#getUserInfo')
var getLoginStateButton = document.querySelector('#getLoginState')

loginWithRedirectButton.onclick = function () {
  authing.loginWithRedirect()
}

logoutWithRedirectButton.onclick = function () {
  authing.logoutWithRedirect()
}

getUserInfoButton.onclick = function () {
  getUserInfo()
}

getLoginStateButton.onclick = function () {
  getLoginState()
}

function getUserInfo () {
  authing.getUserInfo().then(userInfo => {
    console.log('userInfo: ', userInfo)
  })
}

function getLoginState () {
  authing.getLoginState().then(loginState => {
    console.log('loginState: ', loginState)
  })
}
