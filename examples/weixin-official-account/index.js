import { AuthingWxmp } from '@authing/weixin-official-account'


const authingWx = new AuthingWxmp({
  identifier: "此社会化身份源的唯一标志，你在 Authing 控制台创建微信身份源的时候填写的",
  appId: "Authing 应用 ID",
  host: "Authing 应用域名，如 https://my-awesome-app.authing.cn",
  redirectUrl: '指定的回调链接，选填，默认使用控制台配置的回调地址'
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
