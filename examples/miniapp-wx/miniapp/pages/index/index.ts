// index.ts
import { Authing } from '@authing/miniapp-wx'

// 按需使用，加密密码
// import { encryptFunction } from '@authing/miniapp-jsencrypt'

import { encryptFunction } from '@authing/miniapp-sm2encrypt'

const authing = new Authing({
  appId: 'AUTHING_APP_ID',
  host: 'AUTHING_HOST',
  userPoolId: 'AUTHING_USER_POOL_ID',
  encryptFunction
})

console.log('authing: ', authing)

Page({
  data: {},

  async loginByPhone (e) {
    const { code } = e.detail
    const res = await authing.loginByPhone({
      extIdpConnidentifier: 'EXT_IDP_CONNIDENTIFIER',
      wechatMiniProgramCodeAndPhonePayload: {
        wxPhoneInfo: {
          code
        }
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })
    console.log('authing.loginByPhone res: ', res)
  },

  async loginByCode () {    
    const res = await authing.loginByCode({
      extIdpConnidentifier: 'EXT_IDP_CONNIDENTIFIER',
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.loginByCode res: ', res)
  },

  /**
   * 需要在真机上测试，微信开发者工具不会返回 code
   * @param {*} e 
   */
  async getPhone (e) {
    const { code } = e.detail

    const res = await authing.getPhone({
      extIdpConnidentifier: 'EXT_IDP_CONNIDENTIFIER',
      code
    })

    console.log('authing.getPhone res: ', res)
  },

  async loginByPassword () {
    const res = await authing.loginByPassword({
      passwordPayload: {
        password: '123',
        username: 'test'
      },
      options: {
        passwordEncryptType: 'sm2',
        scope: 'offline_access openid profile'
      }
    })
    console.log('authing.loginByPassword res: ', res)
  },

  async sendSms () {
    // 指定 channel 为 CHANNEL_LOGIN，发送登录所用的验证码
    const res = await authing.sendSms({
      phoneNumber: '13126919251',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    console.log('authing.sendSms res: ', res)
  },

  async loginByPassCode () {
    const res = await authing.loginByPassCode({
      passCodePayload: {
        // 手机收到的短信验证码
        passCode: '845603',
        phone: '13126919251',
        phoneCountryCode: '+86'
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.loginByPassCode: ', res)
  },

  async refreshToken () {
    const res = await authing.refreshToken()
    console.log('authing.refreshToken res: ', res)
  },

  async updatePassword () {
    const res = await authing.updatePassword({
      newPassword: '123',
      oldPassword: '123',
      passwordEncryptType: 'none'
    })

    console.log('authing.updatePassword res: ', res)
  },

  async getUserInfo () {
    const res = await authing.getUserInfo()
    console.log('authing.getUserInfo res: ', res)
  },

  async updateAvatar () {
    const res = await authing.updateAvatar()
    console.log('authing.updateAvatar res: ', res)
  },

  async updateUserInfo () {
    const res = await authing.updateUserInfo({
      address: 'Hello world 12'
    })

    console.log('authing.updateUserInfo res: ', res)
  },

  async logout () {
    const res = await authing.logout()
    console.log('authing.logout res: ', res)
  },

  async getLoginState () {
    const res = await authing.getLoginState()
    console.log('authing.getLoginState res: ', res)
  },

  async clearLoginState () {
    const res = await authing.clearLoginState()
    console.log('authing.clearLoginState res: ', res)
  }
})
