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
      domain: 'https://lljoanfkdaaphfih.authing.cn',
      appId: '634fb2d776ee8e6b35dc191d',
      redirectUri: 'https://localhost:8002/',
      userPoolId: '63466a5f4d528fa71040b0ee'
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
      const res = await this.authing.getLoginState({ ignoreCache: true });
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
