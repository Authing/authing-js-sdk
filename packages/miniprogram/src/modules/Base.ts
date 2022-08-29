import { request } from '../helpers'

export class Base {
  async getPublicKey() {
    const { publicKey } = await request({
      method: 'GET',
      url: 'https://core.authing.cn/api/v2/.well-known'
    })

    return publicKey
  }
}
