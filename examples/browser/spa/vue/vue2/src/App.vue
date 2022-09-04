<template>
  <div id="app">
    <h2>Vue 2.x 快速集成 Authing Demo</h2>
    <p>
      <button @click="loginWithPopup">login with popup</button>
      <button @click="loginWithRedirect">loginWithRedirect</button>
      <button @click="logout">logout</button>
      <button @click="getLoginState">getLoginState</button>
      <button @click="getUserInfo">getUserInfo</button>
      <button @click="handleResource">handleResource</button>
    </p>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
    <p v-if="userInfo">
      <textarea
        cols="100"
        rows="15"
        readOnly
        :value="JSON.stringify(userInfo, null, 2)"
      ></textarea>
    </p>
    <p v-if="resource">{{ resource }}</p>
  </div>
</template>

<script>
import { Authing } from "@authing/browser";

export default {
  name: "App",
  data() {
    return {
      sdk: null,
      loginState: null,
      userInfo: null,
      resource: null,
    };
  },
  created() {
    this.sdk = new Authing({
      // 应用的认证地址，例如：https://domain.authing.cn
      domain: process.env.VUE_APP_SDK_DOMAIN,

      // 应用 ID
      appId: process.env.VUE_APP_SDK_APPID,

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: process.env.VUE_APP_SDK_REDIRECT_URI,
      scope: process.env.VUE_APP_SDK_SCOPE,
    });
  },
  mounted() {
    // 校验当前 url 是否是登录回调地址
    if (this.sdk.isRedirectCallback()) {
      console.log("redirect");

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      this.sdk.handleRedirectCallback().then((res) => {
        this.loginState = res;
        window.location.replace("/");
      });
    } else {
      this.getLoginState();
    }
  },
  methods: {
    /**
     * 以弹窗方式打开 Authing 托管的登录页
     */
    async loginWithPopup() {
      const res = await this.sdk.loginWithPopup();
      this.loginState = res;
    },
    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    loginWithRedirect() {
      this.sdk.loginWithRedirect();
    },
    /**
     * 获取用户的登录状态
     */
    async getLoginState() {
      const state = await this.sdk.getLoginState();
      this.loginState = state;
      console.log('this.loginState: ', this.loginState)
    },
    /**
     * 用 Access Token 获取用户身份信息
     */
    async getUserInfo() {
      if (!this.loginState) {
        alert("用户未登录");
        return;
      }
      const userInfo = await this.sdk.getUserInfo({
        accessToken: this.loginState.accessToken,
      });
      this.userInfo = userInfo;
      console.log('this.userInfo: ', this.userInfo)
    },
    /**
     * 登出
     */
    logout() {
      this.sdk.logoutWithRedirect();
    },
    /**
     * 使用 Access Token 调用资源 API
     */
    async handleResource() {
      try {
        let res = await fetch(process.env.VUE_APP_RESOURCE_API, {
          headers: {
            Authorization: `Bearer ${this.loginState.accessToken}`,
          },
          method: "GET",
        });
        let data = await res.json();
        this.resource = data;
      } catch (err) {
        alert("无权访问接口");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
p button {
  margin-right: 8px;
}
</style>
