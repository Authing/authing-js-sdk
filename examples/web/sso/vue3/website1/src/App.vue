<template>
  <div>
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
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Authing } from '@authing/web'

export default defineComponent({
  name: 'App',
  setup() {
    const authing = new Authing({
      domain: 'https://test-auth-zhaoyiming.authing.cn',
      appId: '630ed3137dd6f2fd7001da24',
      redirectUri: 'https://localhost:8000',
      userPoolId: '62e221f85f5ac5cc47037a39'
    })

    const state = reactive({
      loginState: null,
      userInfo: null
    })

    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    const loginWithRedirect = () => {
      authing.loginWithRedirect()
    }

    /**
     * 获取用户身份信息
     */
    const getUserInfo = async () => {
      const userInfo = await authing.getUserInfo()
      state.userInfo = userInfo
    }

    /**
     * 获取用户的登录状态
     */
    const getLoginState = async () => {
      const res = await authing.getLoginState()
      state.loginState = res
    }

    /**
     * 登出
     */
    const logout = () => {
      authing.logoutWithRedirect({
        // 可选项，如果传入此参数，需要在控制台配置【登出回调 URL】
        // redirectUri: 'YOUR_REDIRECT_URL'
      })
    }

    onMounted(() => {
      // 校验当前 url 是否是登录回调 URL
      if (authing.isRedirectCallback()) {
        console.log('redirect')

        /**
         * 以跳转方式打开 Authing 托管的登录页，认证成功后需要配合 handleRedirectCallback 方法，
         * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
         */
        authing.handleRedirectCallback().then(res => {
          state.loginState = res
          // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
          window.location.replace('/')
        })
      } else {
        console.log('normal')

        getLoginState()
      }
    })

    return {
      ...toRefs(state),
      getLoginState,
      loginWithRedirect,
      getUserInfo,
      logout
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
