import { AuthingWxmp } from '@authing/weixin-official-account'


const authingWx = new AuthingWxmp({
  // 此社会化身份源的唯一标志，你在 Authing 控制台创建微信身份源的时候填写的
  identifier: "AUTHING_IDENTIFIER",

  appId: "AUTHING_APP_ID",

  // Authing 控制台 -> 选择已创建的小程序应用 -> 应用配置 -> -> 认证配置 -> 认证地址
  host: "https://my-awesome-app.authing.cn",

  // Authing 控制台 -> 选择已创建的小程序应用 -> 应用配置 -> -> 认证配置 -> 登录回调 URL
  redirectUrl: ''
})

const query =  (function (){
  const query = {}

  const queryString = window.location.search.split('?')[1]

  if (!queryString) {
    return query
  }

  queryString.split('&').forEach(item => {
    const [key, value] = item.split('=')
    query[key] = value
  })

  return query
})();


if (+query.init === 1) {
  window.location = authingWx.getAuthorizationUrl()
} else {
  const { ok, userInfo, message } = authingWx.getUserInfo()
  if (ok) {
    console.log('userInfo: ', userInfo)
  } else if (message) {
    console.log(message)
  }
}
