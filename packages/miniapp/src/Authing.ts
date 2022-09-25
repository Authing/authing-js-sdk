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
  LoginByCodeOptions
} from './types'

import { error, getLoginStateKey, request, StorageProvider } from './helpers'

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

  protected async saveLoginState(
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

  async loginByCode(
    data: LoginByCodeOptions
  ): Promise<LoginState | void> {
    const loginState = await this.getLoginState()

    if (loginState && loginState.expires_at > Date.now()) {
      return loginState
    }

    const { code } = await AuthingMove.login()

    const { extIdpConnidentifier, connection, wechatMiniProgramCodePayload, options } = data

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

  async loginByPassword(
    data: PasswordLoginOptions
  ): Promise<LoginState | void> {
    if (
      data.options?.passwordEncryptType &&
      data.options?.passwordEncryptType !== 'none'
    ) {
      if (!this.encryptFunction) {
        return error(
          'loginByPassword',
          'encryptFunction is required, if passwordEncryptType is not "none"'
        )
      }

      const publicKey = await this.getPublicKey(
        data.options?.passwordEncryptType
      )

      if (!publicKey) {
        return error('loginByPassword', 'publicKey is invalid')
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
  ): Promise<LoginState | void> {
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
  ): Promise<LoginState | void> {
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
  }

  async refreshToken(): Promise<LoginState | void> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      return error('refreshToken', 'refresh_token has expired, please login again')
    }

    const { refresh_token, expires_at } = loginState

    if (!refresh_token) {
      return error('refreshToken', 'refresh_token must not be empty')
    }

    if (expires_at < Date.now()) {
      return error('refreshToken', 'refresh_token has expired, please login again')
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

  async getUserInfo(): Promise<UserInfo | void> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      return error('getUserInfo', 'Token has expired, please login again')
    }

    const { access_token, expires_at } = loginState

    if (expires_at < Date.now()) {
      return error('getUserInfo', 'Token has expired, please login again')
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
  }

  async updateAvatar(): Promise<UploadFileResponseData | void> {
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
    }
  }

  async updateUserInfo(data: UserInfo): Promise<UserInfo | void> {
    const loginState = await this.getLoginState()

    if (!loginState) {
      return error(
        'updateUserInfo',
        'Token has expired, please login again'
      )
    }

    const { access_token, expires_at }  = loginState

    if (expires_at < Date.now()) {
      return error(
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
