import { Component } from '@angular/core';
import { Authing } from '@authing/browser';
import type {
  LoginState,
  UserInfo,
} from '@authing/browser/dist/types/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website2';

  loginState: LoginState | null = null;
  userInfo: UserInfo | null = null;

  private sdk = new Authing({
    // 很重要，请仔细填写！
    // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
    domain: 'enccibbmkpbhiman.pre.authing.cn',

    // 应用 ID
    appId: '62c3b5aec67b1553af9de3f8',

    // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
    redirectUri: 'https://localhost:8001',
  });

  ngOnInit() {
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
      console.log('normal');

      this.getLoginState();
    }
  }

  /**
   * 获取用户的登录状态
   */
  async getLoginState() {
    const res = await this.sdk.getLoginState();
    if (res) {
      this.loginState = res;
    } else {
      // 静默登录。取不到用户信息直接跳转到授权中心
      this.sdk.loginWithRedirect();
    }
  }
}
