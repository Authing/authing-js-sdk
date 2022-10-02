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

    // /oidc/token 直接返回 data，没有 data.data
    // /api/v3/update-password 只返回 message 和 statusCode，没有 data.data
    return data.data || data
  } catch (e) {
    return e
  }
}
