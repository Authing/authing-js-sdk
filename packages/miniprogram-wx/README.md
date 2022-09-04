# @authing/miniprogram-wx

Authing JS SDK for weixin minprogram

## Usage

``` typescript
// index.js
import { Authing } from '@authing/miniprogram-wx'

// Use on demand
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
      code: '97ae45d841722d56d3b1184d6a1fd727b3f2fd4675e2f21142f54f8d8742d2fa'
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
        // rsa and none
        passwordEncryptType: 'rsa',
        scope: 'offline_access openid profile'
      }
    })

    console.log('authing.core.loginByPassword res: ', res)
  },

  async sendSms () {
    // channel = CHANNEL_LOGIN，send code for login
    const res = await authing.core.sendSms({
      phoneNumber: '13100000000',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    console.log('authing.core.sendSms res: ', res)
  },

  async loginByPassCode () {
    const res = await authing.core.loginByPassCode({
      connection: 'PASSCODE',
      passCodePayload: {
        // send phone code
        passCode: '9973',
        phone: '13100000000',
        phoneCountryCode: '+86'
      }
    })

    console.log('authing.core.loginByPassCode: ', res)
  },

  async refreshToken () {
    const res = await authing.core.refreshToken()
    console.log('authing.core.refreshToken res: ', res)
  },

  async updatePassword () {
    const res = await authing.user.updatePassword({
      newPassword: '123',
      oldPassword: '123',
      // none and rsa
      passwordEncryptType: 'none'
    })

    console.log('authing.user.updatePassword res: ', res)
  },

  async getUserInfo () {
    const res = await authing.user.getUserInfo()
    console.log('authing.user.getUserInfo res: ', res)
  },

  async updateAvatar () {
    const res = await authing.user.updateAvatar()
    console.log('authing.user.updateAvatar res: ', JSON.parse(res.data))
  },

  async updateUserInfo () {
    const res = await authing.user.updateUserInfo({
      address: 'Hello world'
    })

    console.log('authing.user.updateUserInfo res: ', res)
  }
})
```