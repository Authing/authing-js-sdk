<template>
  <div id="app">
    <h2>Website 2</h2>
    <div v-if="!loginState">Not Logged In</div>
    <div v-else>
      <p>
        Access Token: <br />
        <textarea
          cols="100"
          rows="10"
          readOnly
          :value="JSON.stringify(loginState.accessToken, null, 2)"
        ></textarea>
      </p>
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
        Expire At: <code>{{ loginState.expireAt }}</code>
      </p>
    </div>
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
      userInfo: null
    };
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
      console.log("normal");
      this.getLoginState();
    }
  },
  methods: {
    async getLoginState() {
      const res = await this.authing.getLoginState();
      if (res) {
        this.loginState = res;
        this.getUserInfo();
      } else {
        // 静默登录。取不到用户信息直接跳转到授权中心
        this.authing.loginWithRedirect();
      }
    },
    async getUserInfo () {
      if (!this.loginState) {
        alert("用户未登录");
        return;
      }
      const userInfo = await this.authing.getUserInfo({
        accessToken: this.loginState.accessToken,
      });
      this.userInfo = userInfo;
    }
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
