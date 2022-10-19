<template>
  <div>
    <h2>Website 1</h2>
    <p>
      <a href="https://localhost:8001" rel="noreferrer" target="_blank">
        redirect to website2
      </a>
    </p>
    <p>
      <button @click="loginWithPopup">loginWithPopup</button>
    </p>
    <p>
      <button @click="loginWithRedirect">loginWithRedirect</button>
      <button @click="logout">logout</button>
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
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { Authing } from "@authing/web";

export default defineComponent({
  name: "App",
  setup() {
    const authing = new Authing({
      // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
      domain: 'AUTHING_DOMAIN_URL',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
      appId: 'AUTHING_APP_ID',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
      redirectUri: 'YOUR_REDIRECT_URL',

      // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
      userPoolId: 'AUTHING_USER_POOL_ID'
    });

    const state = reactive({
      loginState: null,
      userInfo: null,
    });

    /**
     * 以弹窗方式打开 Authing 托管的登录页
     */
    const loginWithPopup = async () => {
      const res = await authing.loginWithPopup();
      state.loginState = res;
    };

    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    const loginWithRedirect = () => {
      authing.loginWithRedirect({
        forced: true
      });
    };

    /**
     * 用 Access Token 获取用户身份信息
     */
    const getUserInfo = async () => {
      if (!state.loginState) {
        alert("用户未登录");
        return;
      }
      const userInfo = await authing.getUserInfo({
        accessToken: state.loginState.accessToken,
      });
      state.userInfo = userInfo;
    };

    /**
     * 获取用户的登录状态
     */
     const getLoginState = async () => {
      const res = await authing.getLoginState({ ignoreCache: true });
      state.loginState = res;

      if (res) {
        getUserInfo()
      }
    };

    /**
     * 登出
     */
    const logout = () => {
      console.log(authing.logoutWithRedirect)
      authing.logoutWithRedirect();
    };

    onMounted(() => {
      // 校验当前 url 是否是登录回调地址
      if (authing.isRedirectCallback()) {
        console.log("redirect");

        /**
         * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
         * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
         */
        authing.handleRedirectCallback().then((res) => {
          state.loginState = res;
          window.location.replace("/");
        });
      } else {
        getLoginState();
      }
    });

    return {
      ...toRefs(state),
      getLoginState,
      loginWithPopup,
      loginWithRedirect,
      getUserInfo,
      logout,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
