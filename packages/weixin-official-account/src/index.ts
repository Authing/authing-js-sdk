import { AuthingWxmpOptions } from './types'

export class AuthingWxmp {
  private options: AuthingWxmpOptions

  constructor(options: AuthingWxmpOptions) {
    this.options = options

    this.validateKeys()
  }

  validateKeys() {
    const keys = ['appId', 'host', 'identifier', 'redirectUrl']

    keys.forEach(key => {
      const _key = key as keyof AuthingWxmpOptions
      if (!this.options[_key]) {
        throw new Error(`"${_key}" is not provided`)
      }
    })
  }

  checkWechatUA(): boolean {
    const ua = window.navigator.userAgent.toLowerCase()

    const matched = ua.match(/MicroMessenger/i)

    if (matched && matched[0] === 'micromessenger') {
      return true
    }

    return false
  }

  getAuthorizationUrl() {
    const { appId, host, identifier, redirectUrl } = this.options

    const queryObject = {
      app_id: appId,
      redirect_url: redirectUrl
    }

    return `${host}/connections/social/${identifier}?${new URLSearchParams(
      queryObject
    ).toString()}`
  }

  getUserInfo(search: string) {
    search = search || window.location.search

    const urlParams = new URLSearchParams(search)
    const code = urlParams.get('code')
    const message = urlParams.get('message')
    let userInfo = urlParams.get('data')

    const ok = code && +code === 200

    if (userInfo) {
      userInfo = JSON.parse(userInfo)
    }

    return {
      ok,
      message,
      userInfo
    }
  }
}
