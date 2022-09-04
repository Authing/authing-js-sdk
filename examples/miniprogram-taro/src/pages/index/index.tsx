import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'
import './index.less'

import Taro from '@tarojs/taro'

import { Authing } from '@authing/miniprogram-taro'

// import { encryptFunction } from '@authing/miniprogram-jsencrypt'

import { encryptFunction } from '@authing/miniprogram-sm2encrypt'

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
        <Button onClick={() => this.loginByCode()}>loginByCode</Button>
        <Button onClick={() => this.loginByPhone()}>loginByPhone</Button>
        <Button openType="getPhoneNumber" onClick={(e) => this.getPhone(e)}>getPhone</Button>
        <Button onClick={() => this.loginByPassword()}>loginByPassword</Button>

        <View>发送手机短信验证码</View>
        <Button onClick={() => this.sendSms()}>sendSms</Button>
        <View>使用手机短信验证码登录</View>
        <Button onClick={() => this.loginByPassCode()}>loginByPassCode</Button>

        <Button onClick={() => this.refreshToken()}>refreshToken</Button>
        <Button onClick={() => this.updatePassword()}>updatePassword</Button>
        <Button onClick={() => this.getUserInfo()}>getUserInfo</Button>
        <Button onClick={() => this.updateAvatar()}>updateAvatar</Button>
        <Button onClick={() => this.updateUserInfo()}>updateUserInfo</Button>
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
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.core.loginByCode res: ', res)
  }

  async loginByPhone () {
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
      },
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.core.loginByPhone res: ', res)
  }

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
  }

  async loginByPassword () {
    const res = await authing.core.loginByPassword({
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

    console.log('authing.core.loginByPassword res: ', res)
  }

  async sendSms () {
    // 指定 channel 为 CHANNEL_LOGIN，发送登录所用的验证码
    const res = await authing.core.sendSms({
      phoneNumber: '13100000000',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    console.log('authing.core.sendSms res: ', res)
  }

  async loginByPassCode () {
    const res = await authing.core.loginByPassCode({
      connection: 'PASSCODE',
      passCodePayload: {
        // 手机收到的短信验证码
        passCode: '9973',
        phone: '13100000000',
        phoneCountryCode: '+86'
      }
    })

    console.log('authing.core.loginByPassCode: ', res)
  }

  async refreshToken () {
    const res = await authing.core.refreshToken()
    console.log('authing.core.refreshToken res: ', res)
  }

  async updatePassword () {
    const res = await authing.user.updatePassword({
      newPassword: '123',
      oldPassword: '123',
      passwordEncryptType: 'none'
    })

    console.log('authing.user.updatePassword res: ', res)
  }

  async getUserInfo () {
    const res = await authing.user.getUserInfo()
    console.log('authing.user.getUserInfo res: ', res)
  }

  async updateAvatar () {
    const res = await authing.user.updateAvatar()
    console.log('authing.user.updateAvatar res: ', res)
  }

  async updateUserInfo () {
    const res = await authing.user.updateUserInfo({
      address: 'Hello world'
    })

    console.log('authing.user.updateUserInfo res: ', res)
  }
}
