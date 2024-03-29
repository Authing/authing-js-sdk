import React, { useEffect, useState } from 'react'

import { Authing } from '@authing/web'

import {
  IUserInfo,
  LoginState,
  NormalError
} from '@authing/web/dist/typings/src/global'

export default function App() {
  const authing = new Authing({
    // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
    domain: 'AUTHING_DOMAIN_URL',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
    appId: 'AUTHING_APP_ID',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
    redirectUri: 'YOUR_REDIRECT_URL',

    // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
    userPoolId: 'AUTHING_USER_POOL_ID'
  })

  const [loginState, setLoginState] = useState<LoginState | null>(null)

  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError | null>(null)

  const loginWithRedirect = () => {
    authing.loginWithRedirect()
  }

  const getLoginState = async () => {
    const loginState = await authing.getLoginState()
    if (loginState) {
      setLoginState(loginState)
    }
  }

  const getUserInfo = async () => {
    const userInfo = await authing.getUserInfo()
    setUserInfo(userInfo)
  }

  const logoutWithRedirect = async () => {
    await authing.logoutWithRedirect()
  }

  useEffect(() => {
    if (authing.isRedirectCallback()) {
      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后需要配合 handleRedirectCallback 方法，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      authing.handleRedirectCallback().then(res => {
        setLoginState(res)
        // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
        window.location.replace('/')
      })
    } else {
      getLoginState()
    }
  }, [])

  return (
    <div className="App">
      <h2>Website 1</h2>
      <p>
        <a href="https://localhost:8001" rel="noreferrer" target="_blank">
          redirect to website2
        </a>
      </p>
      <p>
        <button onClick={loginWithRedirect}>Login With Redirect</button>
        <button onClick={logoutWithRedirect}>Logout With Redirect</button>
      </p>
      <p>
        <button onClick={getLoginState}>Get Login State</button>
      </p>
      <p>
        {loginState && (
          <textarea
            cols={100}
            rows={20}
            readOnly
            value={JSON.stringify(loginState, null, 2)}
          ></textarea>
        )}
      </p>
      <p>
        <button onClick={getUserInfo}>Get User Info</button>
      </p>
      <p>
        {userInfo && (
          <textarea
            cols={100}
            rows={15}
            readOnly
            value={JSON.stringify(userInfo, null, 2)}
          ></textarea>
        )}
      </p>
    </div>
  )
}
