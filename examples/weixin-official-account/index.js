import { AuthingWxmp } from '@authing/weixin-official-account'


const authingWx = new AuthingWxmp({
  identifier: "authing-official-account",
  appId: "62e7f0c91073aaba0db4d65b",
  host: "https://test-application-2022.authing.cn",
  redirectUrl: 'http://localhost:3001'
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
