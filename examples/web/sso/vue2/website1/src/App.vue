<template>
  <div id="app">
    <h2>Website 1</h2>
    <p>
      <a href="https://localhost:8001" rel="noreferrer" target="_blank">
        redirect to website2
      </a>
    </p>
    <p>
      <button @click="loginWithRedirect">Login With Redirect</button>
      <button @click="logout">Logout</button>
    </p>
    <p>
      <button @click="getLoginState">Get Login State</button>
    </p>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
    <p>
      <button @click="getUserInfo">Get User Info</button>
    </p>
    <p v-if="userInfo">
      <textarea
        cols="100"
        rows="15"
        readOnly
        :value="JSON.stringify(userInfo, null, 2)"
      ></textarea>
    </p>
  </div>
</template>

<script>
import { Authing } from '@authing/web'

export default {
  name: 'App',
  data() {
    return {
      authing: null,
      loginState: null,
      userInfo: null
    }
  },
  created() {
    this.authing = new Authing({
      // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
      domain: 'AUTHING_DOMAIN_URL',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
      appId: 'AUTHING_APP_ID',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
      redirectUri: 'YOUR_REDIRECT_URL',

      // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
      userPoolId: 'AUTHING_USER_POOL_ID'
    });
  },
  mounted() {
    // 校验当前 url 是否是登录回调地址
    if (this.authing.isRedirectCallback()) {
      console.log('redirect')

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      this.authing.handleRedirectCallback().then(res => {
        this.loginState = res
        // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
        // 处理 handleCallback 和最后 replace 的应该是两个不同的页面，这里模拟一下
        window.location.replace('/')
      })
    } else {
      console.log('normal')

      this.getLoginState()
    }
  },
  methods: {
    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    loginWithRedirect() {
      this.authing.loginWithRedirect()
    },
    /**
     * 获取用户的登录状态
     */
    async getLoginState() {
      const state = await this.authing.getLoginState()
      this.loginState = state
    },
    /**
     * 获取用户身份信息
     */
    async getUserInfo() {
      const userInfo = await this.authing.getUserInfo()
      this.userInfo = userInfo
    },
    /**
     * 登出
     */
    logout() {
      this.authing.logoutWithRedirect()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
