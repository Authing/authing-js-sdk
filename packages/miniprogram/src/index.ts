import { AuthingOptions } from './types'

import { Core } from './modules/Core'

export * from '@authing/authingmove-core'

export class Authing {
  readonly core: Core

  constructor(options: AuthingOptions) {
    const _options: AuthingOptions = {
      ...options,
      host: options.host || 'https://core.authing.cn'
    }

    this.core = new Core(_options)
  }
}
