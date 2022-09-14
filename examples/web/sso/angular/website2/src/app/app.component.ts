import { Component } from '@angular/core';
import { Authing } from '@authing/web';
import type {
  GetUserInfoRes,
  LoginState
} from '@authing/web/dist/typings/src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website2';

  loginState: LoginState | null = null;
  userInfo: String = ''

  private sdk = new Authing({
    // 很重要，请仔细填写！
    // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
    domain: "https://mlbkhepjgjiihaap.authing.cn",

    // 应用 ID
    appId: "62e22721c889dd44bad1dda2",

    // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
    redirectUri: "https://localhost:8001",

    // 用户池 ID
    userPoolId: '62e221f85f5ac5cc47037a39'
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
    const loginState = await this.sdk.getLoginState()
    
    if (loginState) {
      this.loginState = loginState
      const userInfo = await this.sdk.getUserInfo()
      this.userInfo = JSON.stringify(userInfo, null, 4)
    } else {
      // 静默登录。取不到用户信息直接跳转到授权中心
      this.sdk.loginWithRedirect()
    }
  }
}
