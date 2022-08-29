import { AuthingOptions } from './types'

import { Core } from './modules/Core'

import { StorageProvider } from './helpers'

export * from '@authing/authingmove-core'

export class Authing {
  readonly core: Core

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
  }
}
