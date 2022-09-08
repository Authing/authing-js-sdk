// index.ts
import { Authing } from '@authing/miniapp-wx'

// 按需使用，加密密码
// import { encryptFunction } from '@authing/miniapp-jsencrypt'

import { encryptFunction } from '@authing/miniapp-sm2encrypt'

const authing = new Authing({
  appId: '630ed3137dd6f2fd7001da24',
  host: 'https://core.authing.cn',
  userPoolId: '62e221f85f5ac5cc47037a39',

  // appId: '62e752f0d8c681db4ed3f743',
  // host: 'https://console.pre.authing.cn',
  // userPoolId: '62e221f85f5ac5cc47037a39',

  // appId: '630b549efa97ba795338e2cd',
  // host: 'http://localhost:3000',
  // userPoolId: '630b549d5a697473a2d7fa20',
  
  encryptFunction
})

console.log('authing: ', authing)

Page({
  data: {},

  async loginByCode () {
    const { encryptedData, iv } = await wx.getUserProfile({
      desc: 'getUserProfile1'
    })
    
    const res = await authing.loginByCode({
      connection: 'wechat_mini_program_code',
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      wechatMiniProgramCodePayload: {
        encryptedData,
        iv
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.loginByCode res: ', res)
  },

  async loginByPhone (e) {
    const { encryptedData, iv } = await wx.getUserProfile({
      desc: 'getUserProfile'
    })
    
    const res = await authing.loginByPhone({
      connection: 'wechat_mini_program_phone',
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      wechatMiniProgramPhonePayload: {
        encryptedData,
        iv
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.loginByPhone res: ', res)
  },

  /**
   * 需要在真机上测试，微信开发者工具不会返回 code
   * @param {*} e 
   */
  async getPhone (e) {
    const { code } = e.detail

    const res = await authing.getPhone({
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      code
    })

    console.log('authing.getPhone res: ', res)
  },

  async loginByPassword () {
    const res = await authing.loginByPassword({
      connection: 'PASSWORD',
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
      phoneNumber: '13100000000',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    console.log('authing.sendSms res: ', res)
  },

  async loginByPassCode () {
    const res = await authing.loginByPassCode({
      connection: 'PASSCODE',
      passCodePayload: {
        // 手机收到的短信验证码
        passCode: '5671',
        phone: '13100000000',
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
  }
})
