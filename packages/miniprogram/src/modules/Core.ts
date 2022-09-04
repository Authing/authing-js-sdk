import {
  WxPhoneLoginOptions,
  WxCodeLoginOptions,
  ModuleOptions,
  PasswordLoginOptions,
  SendSmsOptions,
  PassCodeLoginOptions,
  RefreshTokenOptions,
  ChangeQrcodeStatusOptions,
  LoginStateOptions,
  NormalResponseData,
  ChangeQrcodeStatusResponseData,
  LogoutResponseData,
  RefreshTokenResponseData
} from '../types'

import { error, request } from '../helpers'

import { Base } from './Base'

export class Core extends Base {
  constructor(options: ModuleOptions) {
    super(options)
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
          'encryptFunction is requiered, if passwordEncryptType is not "none"'
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
        url: `${this.authingOptions.host}/oidc/token/revocation`,
        data: {
          client_id: this.authingOptions.appId,
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
      url: `${this.authingOptions.host}/api/v3/send-sms`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId
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
      url: this.authingOptions.host + urlMap[type],
      data,
      header: {
        'x-authing-app-id': this.authingOptions.appId
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
      url: `${this.authingOptions.host}/oidc/token`,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-authing-app-id': this.authingOptions.appId
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
      url: `${this.authingOptions.host}/api/v3/change-qrcode-status`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: access_token
      }
    })
  }
}
