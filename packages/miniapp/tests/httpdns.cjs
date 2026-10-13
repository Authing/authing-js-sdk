const assert = require('assert').strict
const fs = require('fs')
const path = require('path')

const storage = new Map()
const requests = []
let requestError

function createPlatform() {
  return {
    login({ success }) {
      success({ code: 'platform-login-code' })
    },
    getStorage({ key, success, fail }) {
      if (storage.has(key)) success({ data: storage.get(key) })
      else fail({ errMsg: 'getStorage:fail data not found' })
    },
    setStorage({ key, data, success }) {
      storage.set(key, data)
      success({})
    },
    removeStorage({ key, success }) {
      storage.delete(key)
      success({})
    },
    request(options) {
      requests.push(options)
      if (requestError) return options.fail(requestError)
      const tokens = {
        access_token: 'test-access-token',
        expires_in: 3600,
        id_token: 'test-id-token',
        refresh_token: 'test-refresh-token',
        token_type: 'Bearer',
        scope: 'openid'
      }
      const data = options.url.endsWith('/api/v3/system')
        ? { rsa: { publicKey: 'test-public-key' } }
        : options.url.endsWith('/oidc/token')
          ? tokens
          : { statusCode: 200, data: tokens }
      options.success({ statusCode: 200, data })
    }
  }
}

async function loadSDK(platform) {
  const bundle = fs.readFileSync(path.join(__dirname, `../dist/bundle-${platform}.js`))
  return import(`data:text/javascript;base64,${bundle.toString('base64')}`)
}

function assertNoHttpDNS(request) {
  assert.equal(Object.prototype.hasOwnProperty.call(request, 'enableHttpDNS'), false)
  assert.equal(Object.prototype.hasOwnProperty.call(request, 'httpDNSServiceId'), false)
}

async function main() {
  global.wx = createPlatform()
  global.tt = createPlatform()
  const { Authing } = await loadSDK('wx')
  const base = { appId: 'test-app', userPoolId: 'test-pool', platform: 'wx' }
  const enabled = new Authing({ ...base, enableHttpDNS: true, httpDNSServiceId: 'test-service' })
  const plain = new Authing({ ...base, appId: 'plain-app' })
  const disabled = new Authing({ ...base, enableHttpDNS: false, httpDNSServiceId: 'disabled-service' })

  // Exercise the built login flow, including its request headers, payload and saved state.
  const [loginError, loginState] = await enabled.loginByCode({ extIdpConnidentifier: 'test-connection' })
  assert.equal(loginError, null)
  assert.equal(loginState.access_token, 'test-access-token')
  const loginRequest = requests[requests.length - 1]
  assert.equal(loginRequest.url, 'https://core.authing.cn/api/v3/signin-by-mobile')
  assert.equal(loginRequest.method, 'POST')
  assert.equal(loginRequest.enableHttpDNS, true)
  assert.equal(loginRequest.httpDNSServiceId, 'test-service')
  assert.equal(loginRequest.header['x-authing-app-id'], base.appId)
  assert.equal(loginRequest.header['x-authing-request-from'], 'sdk-miniapp')
  assert.equal(loginRequest.data.wechatMiniProgramCodePayload.code, 'platform-login-code')
  assert.equal(Object.prototype.hasOwnProperty.call(loginRequest.data, 'enableHttpDNS'), false)
  assert.equal(Object.prototype.hasOwnProperty.call(loginRequest.data, 'httpDNSServiceId'), false)

  await plain.getPublicKey('rsa')
  assertNoHttpDNS(requests[requests.length - 1])
  await enabled.getPublicKey('rsa')
  assert.equal(requests[requests.length - 1].httpDNSServiceId, 'test-service')
  await disabled.getPublicKey('rsa')
  assert.equal(requests[requests.length - 1].enableHttpDNS, false)

  // Separate configured instances must not overwrite each other's provider.
  const other = new Authing({ ...base, enableHttpDNS: true, httpDNSServiceId: 'other-service' })
  await other.getPublicKey('rsa')
  assert.equal(requests[requests.length - 1].httpDNSServiceId, 'other-service')
  const [refreshError, refreshedState] = await enabled.refreshToken()
  assert.equal(refreshError, null)
  assert.equal(refreshedState.access_token, 'test-access-token')
  assert.equal(requests[requests.length - 1].url, 'https://core.authing.cn/oidc/token')
  assert.equal(requests[requests.length - 1].httpDNSServiceId, 'test-service')

  const { Authing: TTAuthing } = await loadSDK('tt')
  const douyin = new TTAuthing({ ...base, platform: 'tt', enableHttpDNS: true, httpDNSServiceId: 'test-service' })
  await douyin.getPublicKey('rsa')
  assertNoHttpDNS(requests[requests.length - 1])

  requestError = { errno: 600001, errMsg: 'request:fail -2:net::ERR_FAILED' }
  const [error] = await enabled.getPublicKey('rsa')
  assert.equal(error.message, JSON.stringify(requestError))
  console.log('HTTPDNS checks passed: login, headers/payload, defaults, explicit disable, instance isolation, token refresh, Douyin, network errors.')
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
