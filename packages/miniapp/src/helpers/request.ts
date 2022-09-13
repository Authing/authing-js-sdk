import { AuthingMove } from '../AuthingMove'

import { WxRequestConfig } from '@authing/authingmove-core'

import { version } from '../../package.json'

export async function request(options: WxRequestConfig) {
  try {
    const _options = Object.assign({}, options, {
      header: {
        ...options.header,
        'x-authing-request-from': 'sdk-miniapp',
        'x-authing-sdk-version': version
      }
    })

    const { data } = await AuthingMove.request(_options)

    // 例如 /oidc/token 直接返回 data，没有 data.data
    return data.data || data
  } catch (e) {
    throw new Error('Authing server error: ' + JSON.stringify(e))
  }
}
