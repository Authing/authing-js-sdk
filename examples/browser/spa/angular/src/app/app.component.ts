import { Component } from '@angular/core';
import { Authing } from '@authing/browser';
import type {
  UserInfo,
  LoginState,
} from '@authing/browser/dist/types/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  loginState: LoginState | null = null;
  userInfo: UserInfo | null = null;
  resource: object | null = null;

  private sdk = new Authing({
    // 应用的认证地址，例如：https://domain.authing.cn
    domain: '认证地址',
    // 应用 ID
    appId: '应用 ID',
    // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
    redirectUri: '登录回调地址',
    // 登出回调地址，需要在控制台『应用配置 - 登出回调 URL』中指定
    logoutRedirectUri: '登出回调地址',
    // 应用侧向 Authing 请求的权限，以空格分隔，默认为 'openid profile'
    // 成功获取的权限会出现在 Access Token 的 scope 字段中
    scope: 'openid profile order:read'
  });

  ngOnInit() {
    // 校验当前 url 是否是登录回调地址
    if (this.sdk.isRedirectCallback()) {
      console.log('redirect');

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后需要配合 
       * handleRedirectCallback 方法，在回调端点处理 Authing 发送的
       * 授权码或 token，获取用户登录态
       */
      this.sdk.handleRedirectCallback().then((res) => {
        this.loginState = res;
        window.location.replace('/');
      });
    } else {
      this.getLoginState();
    }
  }

  /**
   * 以弹窗方式打开 Authing 托管的登录页
   */
  async loginWithPopup() {
    const res = await this.sdk.loginWithPopup();
    this.loginState = res;
  }

  /**
   * 以跳转方式打开 Authing 托管的登录页
   */
  loginWithRedirect() {
    this.sdk.loginWithRedirect();
  }

  /**
   * 获取用户的登录状态
   */
  async getLoginState() {
    const state = await this.sdk.getLoginState();
    this.loginState = state;
  }

  /**
   * 用 Access Token 获取用户身份信息
   */
  async getUserInfo() {
    if (!this.loginState) {
      alert('用户未登录');
      return;
    }
    const userInfo = await this.sdk.getUserInfo({
      accessToken: this.loginState.accessToken,
    });
    this.userInfo = userInfo;
  }

  /**
   * 登出
   */
  logout() {
    this.sdk.logoutWithRedirect();
  }

  /**
   * 使用 Access Token 调用资源 API
   */
  async handleResource() {
    try {
      let res = await fetch('http://localhost:5000/api/protected', {
        headers: {
          Authorization: `Bearer ${this.loginState?.accessToken}`,
        },
        method: "GET",
      });
      let data = await res.json();
      this.resource = data;
    } catch (err) {
      alert("无权访问接口");
    }
  }
}
