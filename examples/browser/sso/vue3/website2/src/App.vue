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
      <p>
        User Info:<br />
        <textarea
          cols="100"
          rows="15"
          readOnly
          :value="JSON.stringify(loginState.parsedIdToken, null, 2)"
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
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { Authing } from "@authing/browser";

export default defineComponent({
  name: "App",
  setup() {
    const sdk = new Authing({
      // 很重要，请仔细填写！
      // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
      domain: "应用面板地址",

      // 应用 ID
      appId: "应用 ID",

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: "登录回调地址",
    });

    const state = reactive({
      loginState: null,
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
