import { Component } from '@angular/core';
import { Authing } from '@authing/web';
import type {
  LoginState,
  IUserInfo,
  NormalError
} from '@authing/web/dist/typings/src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website1';

  loginState: LoginState | null = null;
  userInfo: IUserInfo | NormalError | null = null;

  private sdk = new Authing({
    domain: "",
    appId: "",
    redirectUri: "",
    userPoolId: ''
  });

  async ngOnInit() {
    // 校验当前 url 是否是登录回调地址
    if (this.sdk.isRedirectCallback()) {
      console.log('redirect');

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      this.sdk.handleRedirectCallback().then((res) => {
        this.loginState = res;
        window.location.replace('/');
      });
    } else {
      await this.getLoginState();
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

    console.log('userInfo: ', userInfo)

    this.userInfo = userInfo;
  }

  /**
   * 登出
   */
  logoutWithRedirect() {
    this.sdk.logoutWithRedirect();
  }
}
