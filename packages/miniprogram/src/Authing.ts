import {
  IStorageProvider,
  EncryptFunction,
  LoginStateOptions,
  EncryptType,
  RefreshTokenResponseData,
  AuthingOptions,
  ChangeQrcodeStatusOptions,
  ChangeQrcodeStatusResponseData,
  RefreshTokenOptions,
  WxCodeLoginOptions,
  WxPhoneLoginOptions,
  PasswordLoginOptions,
  PassCodeLoginOptions,
  SendSmsOptions,
  NormalResponseData,
  LogoutResponseData,
  GetPhoneOptions,
  GetUserPhoneResponseData,
  UserInfo,
  UpdatePasswordOptions,
  UploadFileResponseData
} from './types'

import { error, getLoginStateKey, request, StorageProvider } from './helpers'

import { AuthingMove } from './AuthingMove'

export class Authing {
  private readonly storage: IStorageProvider
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

  async getLoginState(): Promise<LoginStateOptions> {
    const res = await this.storage.get(
      getLoginStateKey(this.options.appId)
    )

    return res.data
  }

  async clearLoginState() {
    return await this.storage.remove(
      getLoginStateKey(this.options.appId)
    )
  }

  protected async saveLoginState(
    loginState: LoginStateOptions
  ): Promise<LoginStateOptions | RefreshTokenResponseData> {
    const _loginState: LoginStateOptions | RefreshTokenResponseData = {
      ...loginState,
      expires_at: loginState.expires_in * 1000 + Date.now()
    }

    await this.storage.set(
      getLoginStateKey(this.options.appId),
      _loginState
    )

    return _loginState
  }

  async getPublicKey(encryptType: EncryptType): Promise<string> {
    const res = await request({
      method: 'GET',
      url: `${this.options.host}/api/v3/system`
    })

    return res[encryptType].publicKey
  }

  async loginByCode(
    data: WxCodeLoginOptions
  ): Promise<LoginStateOptions | void> {
    const _data: WxCodeLoginOptions = {
      ...data,
      connection: 'wechat_mini_program_code'
    }
    return await this.login(_data, 'code')
  }

  async loginByPhone(
    data: WxPhoneLoginOptions
  ): Promise<LoginStateOptions | void> {
    const _data: WxPhoneLoginOptions = {
      ...data,
      connection: 'wechat_mini_program_phone'
    }
    return await this.login(_data, 'phone')
  }

  async loginByPassword(
    data: PasswordLoginOptions
  ): Promise<LoginStateOptions | void> {
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
  ): Promise<LoginStateOptions | void> {
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

  async logout(): Promise<LogoutResponseData> {
    try {
      const { access_token } = await this.getLoginState()

      await request({
        method: 'POST',
        url: `${this.options.host}/oidc/token/revocation`,
        data: {
          client_id: this.options.appId,
          token: access_token
        }
      })

      return await this.clearLoginState()
    } catch (e) {
      error('logout', e)
    }
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
  ): Promise<LoginStateOptions | void> {
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

    if (res.access_token) {
      const loginState = await this.saveLoginState(res)
      return loginState
    }

    await this.clearLoginState()
  }

  async refreshToken(): Promise<
    LoginStateOptions | RefreshTokenResponseData | void
    > {
    const { refresh_token } = await this.getLoginState()

    if (!refresh_token) {
      return error('refreshToken', 'refresh_token must not be empty')
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

    if (res.access_token) {
      const loginState = await this.saveLoginState(res)
      return loginState
    }

    await this.clearLoginState()
  }

  async changeQrcodeStatus(
    data: ChangeQrcodeStatusOptions
  ): Promise<ChangeQrcodeStatusResponseData | void> {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error(
        'changeQrcodeStatus',
        'Token has expired, please login again'
      )
    }

    return await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/change-qrcode-status`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })
  }

  async updatePassword(
    data: UpdatePasswordOptions
  ): Promise<NormalResponseData | void> {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error(
        'changeQrcodeStatus',
        'Token has expired, please login again'
      )
    }

    if (data.passwordEncryptType && data.passwordEncryptType !== 'none') {
      if (!this.encryptFunction) {
        return error(
          'updatePassword',
          'encryptFunction is required, if passwordEncryptType is not "none"'
        )
      }

      const publicKey = await this.getPublicKey(data.passwordEncryptType)

      data.newPassword = this.encryptFunction(data.newPassword, publicKey)
    }

    return await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/update-password`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })
  }

  async getUserInfo(): Promise<UserInfo | void> {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error('getUserInfo', 'Token has expired, please login again')
    }

    return await request({
      method: 'GET',
      url: `${this.options.host}/api/v3/get-profile`,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })
  }

  async updateAvatar(): Promise<UploadFileResponseData | void> {
    try {
      const res = await AuthingMove.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['original']
      })

      const uploaded = await AuthingMove.uploadFile({
        url: `${this.options.host}/api/v2/upload?folder=avatar`,
        name: 'file',
        filePath: res.tempFiles[0].tempFilePath
      })

      return JSON.parse(uploaded.data)
    } catch (e) {
      error('updateAvatar', e)
    }
  }

  async updateUserInfo(data: UserInfo): Promise<UserInfo | void> {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error(
        'changeQrcodeStatus',
        'Token has expired, please login again'
      )
    }

    return await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/update-profile`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId,
        Authorization: access_token
      }
    })
  }

  async getPhone(data: GetPhoneOptions): Promise<GetUserPhoneResponseData> {
    const { phone_info } = await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/get-wechat-miniprogram-phone`,
      data,
      header: {
        'x-authing-userpool-id': this.options.userPoolId
      }
    })

    return phone_info
  }
}