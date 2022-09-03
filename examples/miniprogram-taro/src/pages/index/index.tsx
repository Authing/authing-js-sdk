import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

import Taro from '@tarojs/taro'

import { Authing } from '@authing/miniprogram-taro'

import { encryptFunction } from '@authing/miniprogram-jsencrypt'

const authing = new Authing({
  appId: '630b549efa97ba795338e2cd',
  host: 'http://localhost:3000',
  userPoolId: '630b549d5a697473a2d7fa20',
  encryptFunction
})

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }

  async loginByCode () {
    const { encryptedData, iv } = await Taro.getUserProfile({
      desc: 'getUserProfile'
    })

    const { code } = await Taro.login()
    
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
    const { encryptedData, iv } = await Taro.getUserProfile({
      desc: 'getUserProfile'
    })

    const { code } = await Taro.login()
    
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
      code
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
    const res = await authing.core.refreshToken()
    console.log('authing.core.refreshToken res: ', res)
  },

  async updatePassword () {
    const res = await authing.user.updatePassword({
      newPassword: '123',
      oldPassword: '123',
      // 小程序端使用 none 和 rsa
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
}
