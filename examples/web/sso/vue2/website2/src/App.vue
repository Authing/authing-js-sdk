<template>
  <div id="app">
    <h2>Website 2</h2>
    <div>
      <p>
        User Info:<br />
        <textarea
          cols="100"
          rows="15"
          readOnly
          :value="JSON.stringify(userInfo, null, 2)"
        ></textarea>
      </p>
      <p>
        Access Token Info:<br />
        <textarea
          v-if="loginState"
          cols="100"
          rows="15"
          readOnly
          :value="JSON.stringify(loginState.parsedAccessToken, null, 2)"
        ></textarea>
      </p>
      <p>
        Expire At: <code v-if="loginState">{{ loginState.expireAt }}</code>
      </p>
      <button @click="logout">Logout</button>
    </div>
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
      this.authing.handleRedirectCallback().then(() => {
        // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
        // 处理 handleCallback 和最后 replace 的应该是两个不同的页面，这里模拟一下
        window.location.replace('/?a=1')
      })
    } else {
      try {
        const a = +window.location.search.split('?')[1].split('=')[1]
        if (a === 1) {
          this.getUserInfo()
          this.getLoginState()
          return
        }

        console.log('normal')
        this.authing.getLoginStateWithRedirect()
      } catch (e) {
        console.log('normal')
        this.authing.getLoginStateWithRedirect()
      }
    }
  },
  methods: {
    logout() {
      this.authing.logoutWithRedirect()
    },

    async getUserInfo() {
      const userInfo = await this.authing.getUserInfo()
      this.userInfo = userInfo
    },

    async getLoginState () {
      const loginState = await this.authing.getLoginState()
      this.loginState = loginState
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
