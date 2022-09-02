import {
  ModuleOptions,
  AuthingOptions,
  IStorageProvider,
  EncryptFunction,
  LoginStateOptions
} from '../types'

import { getLoginStateKey, request } from '../helpers'

export class Base {
  protected readonly authingOptions: AuthingOptions
  protected readonly storage: IStorageProvider
  protected readonly encryptFunction?: EncryptFunction

  constructor(options: ModuleOptions) {
    this.authingOptions = options.authingOptions
    this.storage = options.storage
    this.encryptFunction = options.encryptFunction
  }

  async getLoginState(): Promise<LoginStateOptions> {
    const res = await this.storage.get(
      getLoginStateKey(this.authingOptions.appId)
    )

    return res.data
  }

  async clearLoginState() {
    return await this.storage.remove(
      getLoginStateKey(this.authingOptions.appId)
    )
  }

  protected async saveLoginState(loginState: LoginStateOptions) {
    const _loginState: LoginStateOptions = {
      ...loginState,
      expires_at: loginState.expires_in * 1000 + Date.now()
    }

    await this.storage.set(
      getLoginStateKey(this.authingOptions.appId),
      _loginState
    )

    return _loginState
  }

  async getPublicKey() {
    const { publicKey } = await request({
      method: 'GET',
      url: 'https://core.authing.cn/api/v2/.well-known'
    })

    return publicKey
  }
}
