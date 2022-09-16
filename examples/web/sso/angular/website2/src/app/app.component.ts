import { Component } from '@angular/core';
import { Authing } from '@authing/web';
import type {
  IUserInfo,
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
    domain: "",
    appId: "",
    redirectUri: "",
    userPoolId: ''
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
