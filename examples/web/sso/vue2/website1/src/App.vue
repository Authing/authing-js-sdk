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
import { Authing } from "@authing/web";

export default {
  name: "App",
  data() {
    return {
      authing: null,
      loginState: null,
      userInfo: null,
    };
  },
  created() {
    this.authing = new Authing({
      domain: 'https://lljoanfkdaaphfih.authing.cn',
      appId: '634fb2b5721713dc06fc7696',
      redirectUri: 'https://localhost:8001/',
      userPoolId: '63466a5f4d528fa71040b0ee',
    });
  },
  mounted() {
   // 校验当前 url 是否是登录回调地址
   if (this.authing.isRedirectCallback()) {
      console.log("redirect");

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      this.authing.handleRedirectCallback().then((res) => {
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
      const res = await this.authing.loginWithPopup();
      this.loginState = res;
    },
    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    loginWithRedirect() {
      this.authing.loginWithRedirect();
    },
    /**
     * 获取用户的登录状态
     */
     async getLoginState() {
      const state = await this.authing.getLoginState({ ignoreCache: true });
      this.loginState = state;
      if (state) {
        this.getUserInfo()
      }

    },
    /**
     * 用 Access Token 获取用户身份信息
     */
    async getUserInfo() {
      if (!this.loginState) {
        alert("用户未登录");
        return;
      }
      const userInfo = await this.authing.getUserInfo({
        accessToken: this.loginState.accessToken,
      });
      this.userInfo = userInfo;
    },
    /**
     * 登出
     */
    logoutWithRedirect() {
      this.authing.logoutWithRedirect();
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
