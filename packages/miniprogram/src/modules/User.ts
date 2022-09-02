import { AuthingMove } from '../AuthingMove'

import { error, request } from '../helpers'

import {
  GetPhoneOptions,
  ModuleOptions,
  UpdatePasswordOptions,
  UserInfo
} from '../types'

import { Base } from './Base'

export class User extends Base {
  constructor(options: ModuleOptions) {
    super(options)
  }

  async updatePassword(data: UpdatePasswordOptions) {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error(
        'changeQrcodeStatus',
        'Token has expired, please login again'
      )
    }

    if (data.passwordEncryptType === 'rsa') {
      if (!this.encryptFunction) {
        return error(
          'updatePassword',
          'encryptFunction is requiered, if passwordEncryptType is not "none"'
        )
      }

      const publicKey = await this.getPublicKey()

      data.newPassword = this.encryptFunction(data.newPassword, publicKey)
    }

    return await request({
      method: 'POST',
      url: `${this.authingOptions.host}/api/v3/update-password`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: access_token
      }
    })
  }

  async getUserInfo() {
    const { access_token } = await this.getLoginState()

    return await request({
      method: 'GET',
      url: `${this.authingOptions.host}/api/v3/get-profile`,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: access_token
      }
    })
  }

  async updateAvatar() {
    try {
      const res = await AuthingMove.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['original']
      })

      await AuthingMove.uploadFile({
        url: `${this.authingOptions.host}/api/v2/upload?folder=avatar`,
        name: 'file',
        filePath: res.tempFiles[0].tempFilePath
      })
    } catch (e) {
      error('updateAvatar', e)
    }
  }

  async updateUserInfo(data: UserInfo) {
    const { access_token, expires_at } = await this.getLoginState()

    if (expires_at < Date.now()) {
      return error(
        'changeQrcodeStatus',
        'Token has expired, please login again'
      )
    }

    return await request({
      method: 'POST',
      url: `${this.authingOptions.host}/api/v3/update-profile`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId,
        Authorization: access_token
      }
    })
  }

  async getPhone(data: GetPhoneOptions) {
    return await request({
      method: 'POST',
      url: `${this.authingOptions.host}/api/v3/get-wechat-miniprogram-phone`,
      data,
      header: {
        'x-authing-userpool-id': this.authingOptions.userPoolId
      }
    })
  }
}
