import { AuthingMove } from '../AuthingMove'

import { WxRequestConfig } from '@authing/authingmove-core'

import { version } from '../../package.json'

export async function request(options: WxRequestConfig) {
  try {
    const _options = Object.assign({}, options, {
      header: {
        ...options.header,
        'x-authing-request-from': 'miniprogram-sdk',
        'x-authing-client-version': version
      }
    })

    const { data } = await AuthingMove.request(_options)

    // 例如 /oidc/token 直接返回 data，没有 data.data
    return data.data || data
  } catch (e) {
    console.error('认证服务器返回错误: ', e)
  }
}
