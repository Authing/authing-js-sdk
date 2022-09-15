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
      sdk: null,
      loginState: null,
      userInfo: null
    };
  },
  created() {
    this.sdk = new Authing({
      domain: "",
      appId: "",
      redirectUri: "",
      userPoolId: ''
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
      console.log("normal");
      this.getLoginState();
      this.getUserInfo();
    }
  },
  methods: {
    async getLoginState() {
      const res = await this.sdk.getLoginState();
      if (res) {
        this.loginState = res;
      } else {
        // 静默登录。取不到用户信息直接跳转到授权中心
        this.sdk.loginWithRedirect();
      }
    },
    async getUserInfo () {
      this.userInfo = await this.sdk.getUserInfo()
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
