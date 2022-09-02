import { AuthingMove } from '../AuthingMove'

import { WxRequestConfig } from '@authing/authingmove-core'

export async function request(options: WxRequestConfig) {
  try {
    const { data } = await AuthingMove.request(options)
    // 例如 /oidc/token 直接返回 data，没有 data.data
    return data.data || data
  } catch (e) {
    console.error('认证服务器返回错误: ', e)
  }
}
