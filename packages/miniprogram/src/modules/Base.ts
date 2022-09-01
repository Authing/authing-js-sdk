import {
  ModuleOptions,
  AuthingOptions,
  IStorageProvider,
  EncryptFunction
} from '../types'

import {
  getAccessTokenKey,
  getIdTokenKey,
  getRefreshTokenKey,
  request
} from '../helpers'

export class Base {
  protected readonly authingOptions: AuthingOptions
  protected readonly storage: IStorageProvider
  protected readonly encryptFunction?: EncryptFunction

  constructor(options: ModuleOptions) {
    this.authingOptions = options.authingOptions
    this.storage = options.storage
    this.encryptFunction = options.encryptFunction
  }

  async getLoginState() {
    const idTokenRes = await this.storage.get(
      getIdTokenKey(this.authingOptions.appId)
    )

    const accessTokenRes = await this.storage.get(
      getAccessTokenKey(this.authingOptions.appId)
    )

    const refreshTokenRes = await this.storage.get(
      getRefreshTokenKey(this.authingOptions.appId)
    )

    return {
      idToken: idTokenRes.data,
      accessToken: accessTokenRes.data,
      refreshTokenRes: refreshTokenRes.data
    }
  }

  clearLoginState() {
    this.storage.remove(getAccessTokenKey(this.authingOptions.appId))
    this.storage.remove(getIdTokenKey(this.authingOptions.appId))
    this.storage.remove(getRefreshTokenKey(this.authingOptions.appId))
  }

  protected async saveLoginState(
    accessToken: string,
    idToken: string,
    refreshToken: string
  ) {
    await this.storage.set(
      getAccessTokenKey(this.authingOptions.appId),
      accessToken
    )

    await this.storage.set(getIdTokenKey(this.authingOptions.appId), idToken)

    await this.storage.set(
      getRefreshTokenKey(this.authingOptions.appId),
      refreshToken
    )
  }

  async getPublicKey() {
    const { publicKey } = await request({
      method: 'GET',
      url: 'https://core.authing.cn/api/v2/.well-known'
    })

    return publicKey
  }
}
