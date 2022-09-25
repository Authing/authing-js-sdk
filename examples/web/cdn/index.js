var authing = new AuthingFactory.Authing({
  domain: 'https://mlbkhepjgjiihaap.authing.cn',
  appId: '6322c6a6c8f7e51c04309097',
  redirectUri: 'http://localhost:8000',
  userPoolId: '62e221f85f5ac5cc47037a39'
})

if (authing.isRedirectCallback()) {
  console.log('redirect')
  authing.handleRedirectCallback().then((loginState) => {
    console.log('loginState: ', loginState)
    window.location.replace('/')
  })
} else {
  authing.getLoginState().then(loginState => {
    console.log('loginState: ', loginState)
  })
}

var loginWithPopup = document.querySelector('#loginWithPopup')
var loginWithRedirect = document.querySelector('#loginWithRedirect')
var logoutWithRedirect = document.querySelector('#logoutWithRedirect')
var getUserInfo = document.querySelector('#getUserInfo')

loginWithPopup.onclick = function () {
  authing.loginWithPopup().then(loginState => {
    console.log('loginState: ', loginState)
  })
}

loginWithRedirect.onclick = function () {
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
