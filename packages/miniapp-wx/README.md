# @authing/miniapp-wx

Authing JS SDK for weixin minprogram

## Usage

``` typescript
// index.js
import { Authing } from '@authing/miniapp-wx'

// Use on demand
import { encryptFunction } from '@authing/miniapp-jsencrypt'

const authing = new Authing({
  appId: 'AUTHING_APP_ID',

  // 公有云部署：Authing 控制台 -> 选择已创建的小程序应用 -> 应用配置 -> 认证配置 -> 认证地址
  // 私有化部署：填写你的私有服务地址
  host: 'https://my-authing-app.example.com',

  // 用户池 ID
  userPoolId: '62e221xxxxxxxxxxx7037a39',

  // 非必传，密码默认将以明文传输
  encryptFunction
})

Page({
  data: {},

  async loginByCode () {
    // 微信小程序限制：wx.getUserProfile 必须使用 button 触发
    // 为了防止用户频繁触发登录按钮
    // 建议使用 const [error, loginState] = await authing.getLoginState() 方法获取登录态
    // 如果 loginState 为 undefined，说明用户未登录，或登录态已过期，则显示登录按钮
    // 如果 loginState 不为 undefined，说明用户已登录，且登录态未过期，则无需再显示登录按钮
    const { encryptedData, iv } = await wx.getUserProfile({
      desc: 'getUserProfile'
    })

    // 由于微信小程序 wx.login() 获取 code 、 session_key 有效期及相关数据解密的机制
    // 偶然情况下 res 会是 undefined
    // 所以需要判断 res 是否为 undefined 再进一步处理剩余业务逻辑
    // 如果 res 是 undefined，则提示用户再点击一次按钮重新登录即可
    const [error, res] = await authing.loginByCode({
      // 你的小程序身份源唯一标识
      extIdpConnidentifier: 'AUTHING_EXT_IDP_CONN_IDENTIFIER',
      wechatMiniProgramCodePayload: {
        encryptedData,
        iv
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })
  },

  /**
   * 需要在真机上测试，微信开发者工具不会返回 code
   * @param {*} e 
   */
  async getPhone (e) {
    const { code } = e.detail

    const res = await authing.getPhone({
      extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
      code
    })

    console.log('authing.getPhone res: ', res)
  },

  async loginByPassword () {
    const [error, res] = await authing.loginByPassword({
      passwordPayload: {
        // 你的用户密码
        password: 'USER_PASSWORD',
        // 你的用户名
        username: 'USER_NAME'
      },
      options: {
        // 如果使用 rsa，则需要安装 @authing/miniapp-jsencrypt 并在初始化 SDK 时传入 encryptFunction 
        // 如果使用 sm2，则需要安装 @authing/miniapp-sm2encrypt 并在初始化 SDK 时传入 encryptFunction 
        passwordEncryptType: 'sm2',
        scope: 'offline_access openid profile'
      }
    })
  },

  async sendSms () {
    const [error, res] = await authing.sendSms({
      phoneNumber: '131xxxxxxxx',
      phoneCountryCode: '+86',
      // 指定 channel 为 CHANNEL_LOGIN，发送登录所用的验证码
      channel: 'CHANNEL_LOGIN'
    })
  },

  async loginByPassCode () {
    const [error, res] = await authing.loginByPassCode({
      passCodePayload: {
        // 手机收到的短信验证码
        passCode: 'xxxx',
        phone: '131xxxxxxxx',
        phoneCountryCode: '+86'
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })
  },

  async refreshToken () {
    const [error, res] = await authing.refreshToken()
  },

  async updatePassword () {
    const [error, res] = await authing.updatePassword({
      newPassword: 'USER_NEW_PASSWORD',
      oldPassword: 'USER_OLS_PASSWORD',
      // 如果使用 rsa，则需要安装 @authing/miniapp-jsencrypt 并在初始化 SDK 时传入 encryptFunction 
      // 如果使用 sm2，则需要安装 @authing/miniapp-sm2encrypt 并在初始化 SDK 时传入 encryptFunction
      passwordEncryptType: 'sm2'
    })
  },

  async getUserInfo () {
    const [error, res] = await authing.getUserInfo()
  },

  async updateAvatar () {
    const [error, res] = await authing.updateAvatar()
  },

  async updateUserInfo () {
    const [error, res] = await authing.updateUserInfo({
      address: 'YOUR_ADDRESS'
    })
  }
})
```