import { AuthingOptions, LoginOptions } from '../types'

import {
  StorageProvider,
  getAccessTokenKey,
  getIdTokenKey,
  request
} from '../helps'

export class Core {
  private options: AuthingOptions
  private storage: StorageProvider

  constructor(options: AuthingOptions) {
    this.options = options
    this.storage = new StorageProvider()
  }

  async loginByCode(data: LoginOptions) {
    const _data: LoginOptions = {
      ...data,
      connection: 'wechat_mini_program_code'
    }
    return await this.login(_data)
  }

  async loginByPhone(data: LoginOptions) {
    const _data: LoginOptions = {
      ...data,
      connection: 'wechat_mini_program_phone'
    }
    return await this.login(_data)
  }

  loginByPassword() {}

  logout() {
    this.clearLoginState()
  }

  getPhone() {}

  updateAvatar() {}

  updateProfile() {}

  private async saveLoginState(accessToken: string, idToken: string) {
    await this.storage.set(getAccessTokenKey(this.options.appId), accessToken)

    await this.storage.set(getIdTokenKey(this.options.appId), idToken)
  }

  public clearLoginState() {
    this.storage.remove(getAccessTokenKey(this.options.appId))
    this.storage.remove(getIdTokenKey(this.options.appId))
  }

  async getLoginState() {
    const idToken = await this.storage.get(getIdTokenKey(this.options.appId))
    const accessToken = await this.storage.get(
      getAccessTokenKey(this.options.appId)
    )

    return {
      idToken,
      accessToken
    }
  }

  private async login(data: LoginOptions) {
    const { access_token, id_token } = await request({
      method: 'POST',
      url: `${this.options.host}/api/v3/signin-by-mobile`,
      data,
      header: {
        'x-authing-app-id': this.options.appId
      }
    })

    await this.saveLoginState(access_token, id_token)

    return {
      accessToken: access_token,
      idToken: id_token
    }
  }
}
