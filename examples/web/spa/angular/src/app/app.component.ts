import { Component } from '@angular/core';
import { Authing } from '@authing/web';
import type {
  IUserInfo,
  LoginState,
  NormalError,
} from '@authing/web/dist/typings/src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  loginState: LoginState | null = null;
  userInfo: IUserInfo | NormalError | null = null;
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
    scope: 'openid profile order:read',
    userPoolId: '用户池 ID'
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
    console.log('loginState: ', state)
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
    this.sdk.logoutWithRedirect({
      redirectUri: 'https://authing.cn'
    });
  }
}
