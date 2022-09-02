// index.js
import { Authing } from '@authing/miniprogram-wx'

// 按需使用，加密密码
import { encryptFunction } from '@authing/miniprogram-jsencrypt'

const authing = new Authing({
  appId: '630b549efa97ba795338e2cd',
  host: 'http://localhost:3000',
  userPoolId: '630b549d5a697473a2d7fa20',
  encryptFunction
})

Page({
  data: {},

  async loginByCode () {
    const { encryptedData, iv } = await wx.getUserProfile({
      desc: 'getUserProfile'
    })

    const { code } = await wx.login()
    
    const res = await authing.core.loginByCode({
      connection: 'wechat_mini_program_code',
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      wechatMiniProgramCodePayload: {
        encryptedData,
        iv,
        code
      }
    })

    console.log('authing.core.loginByCode res: ', res)
  },

  async loginByPhone (e) {
    const { encryptedData, iv } = await wx.getUserProfile({
      desc: 'getUserProfile'
    })

    const { code } = await wx.login()
    
    const res = await authing.core.loginByPhone({
      connection: 'wechat_mini_program_phone',
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      wechatMiniProgramPhonePayload: {
        encryptedData,
        iv,
        code
      }
    })

    console.log('authing.core.loginByPhone res: ', res)
  },

  /**
   * 需要在真机上测试，微信开发者工具不会返回 code
   * @param {*} e 
   */
  async getPhone (e) {
    const { code } = e.detail

    const res = await authing.user.getPhone({
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      code: '5c3faecb5c72ac1c38396b04a6d273f1967b169787b479ff74bfddf46497c63c'
    })

    console.log('authing.user.getPhone res: ', res)
  },

  async loginByPassword () {
    const res = await authing.core.loginByPassword({
      connection: 'PASSWORD',
      passwordPayload: {
        password: '123',
        username: 'test'
      },
      options: {
        // 小程序支持 ras 和 none 两种模式
        passwordEncryptType: 'rsa',
        scope: 'offline_access openid profile'
      }
    })

    console.log('authing.core.loginByPassword res: ', res)
  },

  async loginBySmsCode () {
    // 指定 channel 为 CHANNEL_LOGIN，发送登录所用的验证码
    await authing.core.sendSms({
      phoneNumber: '13126919251',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    const res = await authing.core.loginByPassCode({
      connection: 'PASSCODE',
      passCodePayload: {
        // 手机收到的短信验证码
        passCode: '9973',
        phone: '13126919251',
        phoneCountryCode: '+86'
      }
    })

    console.log('authing.core.loginByPassCode: ', res)
  },

  async refreshToken () {
    const res = await authing.core.refreshToken({
      grant_type: 'refresh_token',
      redirect_uri: 'https://authing.cn',
      refresh_token: ''
    })
  }
})
