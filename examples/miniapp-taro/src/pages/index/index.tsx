import { Component, PropsWithChildren } from 'react'
import { View, Button } from '@tarojs/components'
import './index.less'

import Taro from '@tarojs/taro'

import { Authing } from '@authing/miniapp-taro'

// import { encryptFunction } from '@authing/miniapp-jsencrypt'

import { encryptFunction } from '@authing/miniapp-sm2encrypt'

console.log('Taro: ', Taro)

const authing = new Authing({
  appId: '630ed3137dd6f2fd7001da24',
  host: 'https://core.authing.cn',
  userPoolId: '62e221f85f5ac5cc47037a39',
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
        <Button onClick={() => this.getUserInfo()}>getUserInfo</Button>
      </View>
    )
  }

  async loginByCode () {
    const res = await authing.loginByCode({
      extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
      options: {
        scope: 'openid profile offline_access'
      }
    })

    console.log('authing.loginByCode res: ', res)
  }

  async getUserInfo () {
    const res = await authing.getUserInfo()

    console.log('authing.getUserInfo res: ', res)
  }
}
