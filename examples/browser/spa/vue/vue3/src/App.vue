<template>
  <h2>Vue 3.x 快速集成 Authing Demo</h2>
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
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { Authing } from "@authing/browser";

export default defineComponent({
  name: "App",
  setup() {
    const sdk = new Authing({
      // 应用的认证地址，例如：https://domain.authing.cn
      domain: process.env.VUE_APP_SDK_DOMAIN,

      // 应用 ID
      appId: process.env.VUE_APP_SDK_APPID,

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: process.env.VUE_APP_SDK_REDIRECT_URI,
      scope: process.env.VUE_APP_SDK_SCOPE,
    });

    const state = reactive({
      loginState: null,
      userInfo: null,
      resource: null,
    });

    /**
     * 获取用户的登录状态
     */
    const getLoginState = async () => {
      const res = await sdk.getLoginState();
      state.loginState = res;
    };

    /**
     * 以弹窗方式打开 Authing 托管的登录页
     */
    const loginWithPopup = async () => {
      const res = await sdk.loginWithPopup();
      state.loginState = res;
    };

    /**
     * 以跳转方式打开 Authing 托管的登录页
     */
    const loginWithRedirect = () => {
      sdk.loginWithRedirect();
    };

    /**
     * 用 Access Token 获取用户身份信息
     */
    const getUserInfo = async () => {
      if (!state.loginState) {
        alert("用户未登录");
        return;
      }
      const userInfo = await sdk.getUserInfo({
        accessToken: state.loginState.accessToken,
      });
      state.userInfo = userInfo;
    };

    /**
     * 登出
     */
    const logout = () => {
      sdk.logoutWithRedirect();
    };

    /**
     * 使用 Access Token 调用资源 API
     */
    const handleResource = async () => {
      try {
        let res = await fetch(process.env.VUE_APP_RESOURCE_API, {
          headers: {
            Authorization: `Bearer ${state.loginState.accessToken}`,
          },
          method: "GET",
        });
        let data = await res.json();
        state.resource = data;
      } catch (err) {
        alert("无权访问接口");
      }
    };

    onMounted(() => {
      // 校验当前 url 是否是登录回调地址
      if (sdk.isRedirectCallback()) {
        console.log("redirect");

        /**
         * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
         * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
         */
        sdk.handleRedirectCallback().then((res) => {
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
      handleResource,
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
p button {
  margin-right: 8px;
}
</style>
