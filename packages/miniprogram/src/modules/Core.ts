import {
  WxLoginOptions,
  ModuleOptions,
  AuthingOptions,
  IStorageProvider,
  EncryptFunction,
  PasswordLoginOptions,
  UserInfo
} from '../types'

import { getAccessTokenKey, getIdTokenKey, request } from '../helpers'

import { Base } from './Base'

export class Core extends Base {
  private readonly authingOptions: AuthingOptions
  private readonly storage: IStorageProvider
  private readonly encryptFunction?: EncryptFunction

  constructor(options: ModuleOptions) {
    super()
    this.authingOptions = options.authingOptions
    this.storage = options.storage
    this.encryptFunction = options.encryptFunction
  }

  async loginByCode(data: WxLoginOptions) {
    const _data: WxLoginOptions = {
      ...data,
      connection: 'wechat_mini_program_code'
    }
    return await this.login(_data, 'code')
  }

  async loginByPhone(data: WxLoginOptions) {
    const _data: WxLoginOptions = {
      ...data,
      connection: 'wechat_mini_program_phone'
    }
    return await this.login(_data, 'phone')
  }

  async loginByPassword(data: PasswordLoginOptions) {
    // Todo: 需要判断用户是否使用密码加密功能，目前控制台配置还有争议，待讨论
    const _data: PasswordLoginOptions = {
      ...data,
      connection: 'PASSWORD'
    }
    return await this.login(_data, 'password')
  }

  logout() {
    // Todo：后端同时退出
    this.clearLoginState()
  }

  getPhone(code: string) {
    // Todo: 缺少根据 code、encryptedData、iv 解密用户手机号的接口
  }

  async getUserInfo() {
    const { accessToken } = await this.getLoginState()

    return await request({
      method: 'GET',
      url: `${this.authingOptions.host}/api/v3/get-profile`,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: accessToken
      }
    })
  }

  updateAvatar() {}

  async updateUserInfo(data: UserInfo) {
    const { accessToken } = await this.getLoginState()

    return await request({
      method: 'POST',
      url: `${this.authingOptions.host}/api/v3/update-profile`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: accessToken
      }
    })
  }

  private async saveLoginState(accessToken: string, idToken: string) {
    await this.storage.set(
      getAccessTokenKey(this.authingOptions.appId),
      accessToken
    )

    await this.storage.set(getIdTokenKey(this.authingOptions.appId), idToken)
  }

  public clearLoginState() {
    this.storage.remove(getAccessTokenKey(this.authingOptions.appId))
    this.storage.remove(getIdTokenKey(this.authingOptions.appId))
  }

  async getLoginState() {
    const idTokenRes = await this.storage.get(
      getIdTokenKey(this.authingOptions.appId)
    )

    const accessTokenRes = await this.storage.get(
      getAccessTokenKey(this.authingOptions.appId)
    )

    return {
      idToken: idTokenRes.data,
      accessToken: accessTokenRes.data
    }
  }

  private async login(
    data: WxLoginOptions | PasswordLoginOptions,
    type: string
  ) {
    const urlMap: Record<string, string> = {
      code: '/api/v3/signin-by-mobile',
      phone: '/api/v3/signin-by-mobile',
      password: '/api/v3/signin'
    }

    const { access_token, id_token } = await request({
      method: 'POST',
      url: this.authingOptions.host + urlMap[type],
      data,
      header: {
        'x-authing-app-id': this.authingOptions.appId
      }
    })

    await this.saveLoginState(access_token, id_token)

    return {
      accessToken: access_token,
      idToken: id_token
    }
  }
}
