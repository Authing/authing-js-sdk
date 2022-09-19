<template>
  <div>
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
      <button @click="getUserInfo">获取用户信息</button>
      <p v-if="userInfo">
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
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { Authing } from "@authing/web";

export default defineComponent({
  name: "App",
  setup() {
    const sdk = new Authing({
      domain: "",
      appId: "",
      redirectUri: "",
      userPoolId: ''
    });

    const state = reactive({
      loginState: null,
      userInfo: null
    });

    /**
     * 获取用户的登录状态
     */
    const getLoginState = async () => {
      const res = await sdk.getLoginState();
      state.loginState = res;

      if (!res) {
        sdk.loginWithRedirect();
      }
    };

    const logout = () => sdk.logoutWithRedirect({
      redirectUri: 'https://www.so.com'
    })

    const getUserInfo = async () => {
      const userInfo = await sdk.getUserInfo()
      state.userInfo = userInfo
    }

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
        console.log("normal");

        getLoginState();
      }
    });

    return {
      ...toRefs(state),
      logout,
      getUserInfo
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
