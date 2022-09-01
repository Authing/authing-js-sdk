<template>
  <div id="app">
    <h2>Website 1</h2>
    <p>
      <a href="https://localhost:8001" rel="noreferrer" target="_blank">
        redirect to website2
      </a>
    </p>
    <p>
      <button @click="loginWithPopup">login with popup</button>
    </p>
    <p>
      <button @click="loginWithRedirect">loginWithRedirect</button>
      <button @click="logoutWithRedirect">logoutWithRedirect</button>
    </p>
    <p>
      <button @click="getLoginState">getLoginState</button>
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
      <button @click="getUserInfo">getUserInfo</button>
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
import { Authing } from "@authing/browser";

export default {
  name: "App",
  data() {
    return {
      sdk: null,
      loginState: null,
      userInfo: null,
    };
  },
  created() {
    this.sdk = new Authing({
      // 很重要，请仔细填写！
      // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
      domain: "https://mlbkhepjgjiihaap.authing.cn",

      // 应用 ID
      appId: "62e752f0d8c681db4ed3f743",

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: "https://localhost:8000",
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
      console.log(this.loginState);

      const userInfo = await this.sdk.getUserInfo({
        accessToken: state.accessToken
      });
      console.log('userInfo: ', userInfo);
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
    },
    /**
     * 登出
     */
    logoutWithRedirect() {
      this.sdk.logoutWithRedirect();
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
</style>
