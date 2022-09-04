import { AuthingOptions } from './types'

import { Core } from './modules/Core'
import { User } from './modules/User'

import { StorageProvider } from './helpers'

export * from '@authing/authingmove-core'

export class Authing {
  readonly core: Core
  readonly user: User

  constructor(options: AuthingOptions) {
    const _options: AuthingOptions = {
      ...options,
      host: options.host || 'https://core.authing.cn'
    }

    const storage = new StorageProvider()

    const encryptFunction = options.encryptFunction

    this.core = new Core({
      authingOptions: _options,
      storage,
      encryptFunction
    })

    this.user = new User({
      authingOptions: _options,
      storage,
      encryptFunction
    })
  }
}
