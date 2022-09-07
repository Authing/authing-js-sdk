# @authing/miniapp-taro

Authing miniapp SDK for Taro

## Usage

``` tsx
import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'

import Taro from '@tarojs/taro'

import { Authing } from '@authing/miniapp-taro'

import { encryptFunction } from '@authing/miniapp-jsencrypt'

const authing = new Authing({
  appId: '630b549efa97ba795338e2cd',
  host: 'http://localhost:3000',
  userPoolId: '630b549d5a697473a2d7fa20',
  encryptFunction
})

export default class Index extends Component<PropsWithChildren> {
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
    
    const res = await authing.loginByCode({
      connection: 'wechat_mini_program_code',
      extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
      wechatMiniProgramCodePayload: {
        encryptedData,
        iv
      }
    })

    console.log('authing.loginByCode res: ', res)
  }

  async loginByPhone () {
    const { encryptedData, iv } = await Taro.getUserProfile({
      desc: 'getUserProfile'
    })
    
    const res = await authing.loginByPhone({
      connection: 'wechat_mini_program_phone',
      extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
      wechatMiniProgramPhonePayload: {
        encryptedData,
        iv
      }
    })

    console.log('authing.loginByPhone res: ', res)
  }

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
  }

  async loginByPassword () {
    const res = await authing.loginByPassword({
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

    console.log('authing.loginByPassword res: ', res)
  }

  async sendSms () {
    // channel = CHANNEL_LOGIN
    const res = await authing.sendSms({
      phoneNumber: '13100000000',
      phoneCountryCode: '+86',
      channel: 'CHANNEL_LOGIN'
    })

    console.log('authing.sendSms res: ', res)
  }

  async loginByPassCode () {
    const res = await authing.loginByPassCode({
      connection: 'PASSCODE',
      passCodePayload: {
        // send phone code
        passCode: '9973',
        phone: '13100000000',
        phoneCountryCode: '+86'
      }
    })

    console.log('authing.loginByPassCode: ', res)
  }

  async refreshToken () {
    const res = await authing.refreshToken()
    console.log('authing.refreshToken res: ', res)
  }

  async updatePassword () {
    const res = await authing.updatePassword({
      newPassword: '123',
      oldPassword: '123',
      // rsa and none
      passwordEncryptType: 'none'
    })

    console.log('authing.updatePassword res: ', res)
  }

  async getUserInfo () {
    const res = await authing.getUserInfo()
    console.log('authing.getUserInfo res: ', res)
  }

  async updateAvatar () {
    const res = await authing.updateAvatar()
    console.log('authing.updateAvatar res: ', JSON.parse(res.data))
  }

  async updateUserInfo () {
    const res = await authing.updateUserInfo({
      address: 'Hello world'
    })

    console.log('authing.updateUserInfo res: ', res)
  }
}
```