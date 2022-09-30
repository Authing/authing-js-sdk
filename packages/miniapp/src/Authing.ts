import {
  IStorageProvider,
  EncryptFunction,
  LoginState,
  EncryptType,
  AuthingOptions,
  RefreshTokenOptions,
  WxCodeLoginOptions,
  WxPhoneLoginOptions,
  PasswordLoginOptions,
  PassCodeLoginOptions,
  SendSmsOptions,
  NormalResponseData,
  GetPhoneOptions,
  GetUserPhoneResponseData,
  UserInfo,
  UpdatePasswordOptions,
  UploadFileResponseData,
  LoginByCodeOptions,
  Maybe,
  UpdateUserInfo
} from './types'

import { error, getLoginStateKey, getWxLoginCodeKey, request, StorageProvider } from './helpers'

import { AuthingMove } from './AuthingMove'

export class Authing {
  private storage: IStorageProvider
  private readonly options: AuthingOptions
  private readonly encryptFunction?: EncryptFunction

  constructor(options: AuthingOptions) {
    this.options = {
      ...options,
      host: options.host || 'https://core.authing.cn'
    }

    this.storage = new StorageProvider()

    this.encryptFunction = options.encryptFunction

    this.resetWxLoginCode()
  }

  async getLoginState(): Promise<LoginState | null> {
    try {
      const res = await this.storage.get(
        getLoginStateKey(this.options.appId)
      )
  
      const loginState = res.data

      if (loginState.expires_at > Date.now()) {
        return loginState
      }

      error('getLoginState', 'loginState has expired, please login again')

      return null
    } catch (e) {
      return null
    }
  }

  async clearLoginState(): Promise<boolean> {
    try {
      await this.storage.remove(
        getLoginStateKey(this.options.appId)
      )
      return true
    } catch (e) {
      error('clearLoginState', e)
      return false
    }
  }

  private async saveLoginState(
    loginState: LoginState
  ): Promise<LoginState> {
    const _loginState: LoginState = {
      ...loginState,
      expires_at: loginState.expires_in * 1000 + Date.now() - 3600 * 1000 * 2
    }

    await this.storage.set(
      getLoginStateKey(this.options.appId),
      _loginState
    )

    return _loginState
  }

  async getPublicKey(encryptType: EncryptType): Promise<string> {
    try {
      const res = await request({
        method: 'GET',
        url: `${this.options.host}/api/v3/system`
      })
  
      return res[encryptType].publicKey
    } catch (e) {
      error('getPublicKey', e)
      return ''
    }
  }

  private async getCachedWxLoginCode (): Promise<string> {
    try {
      const res = await this.storage.get(getWxLoginCodeKey(this.options.appId))
      return res.data
    } catch (e) {
      return ''
    }
  }

  private async cacheWxLoginCode (code: string): Promise<string> {
    try {
      await this.storage.set(getWxLoginCodeKey(this.options.appId), code)
      return code
    } catch (e) {
      error('cacheWxLoginCode', e)
      return ''
    }
  }

  private async resetWxLoginCode (): Promise<string> {
    const next = async () => {
      try {
        const wxLoginRes = await AuthingMove.login()
        await this.cacheWxLoginCode(wxLoginRes.code)
      } catch (e) {
        error('resetWxLoginCode', e)
      }
    }

    try {
      await AuthingMove.checkSession()
      const code = await this.getCachedWxLoginCode()
      if (!code) {
        await next()
      }
    } catch (e) {
      this.storage.remove(getWxLoginCodeKey(this.options.appId))
      await next()
    } finally {
      return await this.getCachedWxLoginCode()
    }
  }

  async loginByCode(
    data: LoginByCodeOptions
  ): Promise<Maybe<LoginState>> {
    const loginState = await this.getLoginState()

    if (loginState && loginState.expires_at > Date.now()) {
      return loginState
    }

    const { extIdpConnidentifier, connection, wechatMiniProgramCodePayload, options } = data

    const code  = await this.resetWxLoginCode()

    if (!code) {
      error('loginByCode', 'get wx login code error')
      return null
    }

    const _data: WxCodeLoginOptions = {
      connection: connection || 'wechat_mini_program_code',
      extIdpConnidentifier,
      wechatMiniProgramCodePayload: {
        ...wechatMiniProgramCodePayload,
        code
      },
      options
    }

    return await this.login(_data, 'code')
  }

  // async loginByPhone(
  //   data: LoginByPhoneOptions
  // ): Promise<Maybe<LoginState>> {
  //   const loginState = await this.getLoginState()

  //   if (loginState && loginState.expires_at > Date.now()) {
  //     return loginState
  //   }

  //   const { extIdpConnidentifier, connection, wechatMiniProgramPhonePayload, options } = data

  //   const code  = await this.resetWxLoginCode()

  //   if (!code) {
  //     error('loginByPhone', 'get wx login code error')
  //     return null
  //   }

  //   const _data: WxPhoneLoginOptions = {
  //     connection: connection || 'wechat_mini_program_phone',
  //     extIdpConnidentifier,
  //     wechatMiniProgramPhonePayload: {
  //       ...wechatMiniProgramPhonePayload,
  //       code
  //     },
  //     options
  //   }

  //   return await this.login(_data, 'phone')
  // }

  async loginByPassword(
    data: PasswordLoginOptions
  ): Promise<Maybe<LoginState>> {
    if (
      data.options?.passwordEncryptType &&
      data.options?.passwordEncryptType !== 'none'
    ) {
      if (!this.encryptFunction) {
        error(
          'loginByPassword',
          'encryptFunction is required, if passwordEncryptType is not "none"'
        )
        return null
      }

      const publicKey = await this.getPublicKey(
        data.options?.passwordEncryptType
      )

      if (!publicKey) {
        error('loginByPassword', 'publicKey is invalid')
        return null
      }

      data.passwordPayload.password = this.encryptFunction(
        data.passwordPayload.password,
        publicKey
      )
    }

    const _data: PasswordLoginOptions = {
      ...data,
      connection: 'PASSWORD'
    }

    return await this.login(_data, 'password')
  }

  async loginByPassCode(
    data: PassCodeLoginOptions
  ): Promise<Maybe<LoginState>> {
    if (data.passCodePayload.phone) {
      data.passCodePayload.phoneCountryCode =
        data.passCodePayload.phoneCountryCode || '+86'
    }

    const _data: PassCodeLoginOptions = {
      ...data,
      connection: 'PASSCODE'
    }

    return await this.login(_data, 'passCode')
  }

  async logout(): Promise<boolean> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      return true
    }

    const { access_token, expires_at } = loginState

    if (!access_token || expires_at < Date.now()) {
      await this.clearLoginState()
      return true
    }

    await request({
      method: 'POST',
      url: `${this.options.host}/oidc/token/revocation`,
      data: {
        client_id: this.options.appId,
        token: access_token
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })

    await this.clearLoginState()

    return true
  }

  async sendSms(data: SendSmsOptions): Promise<NormalResponseData> {
    data.phoneCountryCode = data.phoneCountryCode || '+86'

    return await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/send-sms`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId
      }
    })
  }

  private async login(
    data:
      | WxCodeLoginOptions
      | WxPhoneLoginOptions
      | PasswordLoginOptions
      | PassCodeLoginOptions,
    type: string
  ): Promise<Maybe<LoginState>> {
    const urlMap: Record<string, string> = {
      code: '/api/v3/signin-by-mobile',
      phone: '/api/v3/signin-by-mobile',
      password: '/api/v3/signin',
      passCode: '/api/v3/signin'
    }

    const res = await request({
      method: 'POST',
      url: this.options.host + urlMap[type],
      data,
      header: {
        'x-authing-app-id': this.options.appId
      }
    })

    if (res.access_token || res.id_token) {
      const loginState = await this.saveLoginState(res)
      return loginState
    }

    await this.clearLoginState()

    error('login', res)

    return null
  }

  async refreshToken(): Promise<Maybe<LoginState>> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      error('refreshToken', 'refresh_token has expired, please login again')
      return null
    }

    const { refresh_token, expires_at } = loginState

    if (!refresh_token) {
      error('refreshToken', 'refresh_token must not be empty')
      return null
    }

    if (expires_at < Date.now()) {
      error('refreshToken', 'refresh_token has expired, please login again')
      return null
    }

    const data: RefreshTokenOptions = {
      grant_type: 'refresh_token',
      redirect_uri: '',
      refresh_token
    }

    const res = await request({
      method: 'POST',
      url: `${this.options.host}/oidc/token`,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-authing-app-id': this.options.appId
      }
    })

    if (res.access_token || res.id_token) {
      const loginState = await this.saveLoginState(res)
      return loginState
    }

    error('refreshToken', res)

    return null
  }

  async updatePassword(
    data: UpdatePasswordOptions
  ): Promise<boolean> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      error(
        'updatePassword',
        'Token has expired, please login again'
      )
      return false
    }

    const { access_token, expires_at } = loginState

    if (expires_at < Date.now()) {
      error(
        'updatePassword',
        'Token has expired, please login again'
      )
      return false
    }

    if (data.passwordEncryptType && data.passwordEncryptType !== 'none') {
      if (!this.encryptFunction) {
        error(
          'updatePassword',
          'encryptFunction is required, if passwordEncryptType is not "none"'
        )
        return false
      }

      const publicKey = await this.getPublicKey(data.passwordEncryptType)

      if (!publicKey) {
        error('loginByPassword', 'publicKey is invalid')
        return false
      }

      data.newPassword = this.encryptFunction(data.newPassword, publicKey)
    }

    const res = await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/update-password`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })

    if (res.statusCode === 200) {
      return true
    }

    error('updatePassword', res)

    return false
  }

  async getUserInfo(): Promise<Maybe<UserInfo>> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      error('getUserInfo', 'Token has expired, please login again')
      return null
    }

    const { access_token, expires_at } = loginState

    if (expires_at < Date.now()) {
      error('getUserInfo', 'Token has expired, please login again')
      return null
    }

    const res = await request({
      method: 'GET',
      url: `${this.options.host}/api/v3/get-profile`,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })

    if (res.userId) {
      return res
    }

    error('getUserInfo', res)

    return null
  }

  async updateAvatar(): Promise<Maybe<UploadFileResponseData>> {
    try {
      const res = await AuthingMove.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['original']
      })

      const uploadRes = await AuthingMove.uploadFile({
        url: `${this.options.host}/api/v2/upload?folder=avatar`,
        name: 'file',
        filePath: res.tempFiles[0].tempFilePath
      })

      const parsedUploadRed = JSON.parse(uploadRes.data)

      await this.updateUserInfo({
        photo: parsedUploadRed.data.url
      })

      return parsedUploadRed
    } catch (e) {
      error('updateAvatar', e)
      return null
    }
  }

  async updateUserInfo(data: UpdateUserInfo): Promise<Maybe<UserInfo>> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      error(
        'updateUserInfo',
        'Token has expired, please login again'
      )
      return null
    }

    const { access_token, expires_at }  = loginState

    if (expires_at < Date.now()) {
      error(
        'updateUserInfo',
        'Token has expired, please login again'
      )
    }

    const res = await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/update-profile`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })

    if (res.userId) {
      return res
    }

    error('updateUserInfo', res)

    return null
  }

  async getPhone(data: GetPhoneOptions): Promise<GetUserPhoneResponseData> {
    const res = await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/get-wechat-miniprogram-phone`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId
      }
    })

    return res.phone_info || error('getPhone', res)
  }
}
