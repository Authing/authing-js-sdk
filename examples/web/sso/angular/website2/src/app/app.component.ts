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

  private authing = new Authing({
    // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
    domain: 'AUTHING_DOMAIN_URL',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
    appId: 'AUTHING_APP_ID',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
    redirectUri: 'YOUR_REDIRECT_URL',

    // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
    userPoolId: 'AUTHING_USER_POOL_ID'
  });

  ngOnInit() {
    // 校验当前 url 是否是登录回调地址
    if (this.authing.isRedirectCallback()) {
      console.log('redirect')
      this.authing.handleRedirectCallback().then(() => {
        // 因 code 只能使用一次，所以这里需要将页面重定向到其他地址，这里以刷新当前页面为例：
        // 处理 handleCallback 和最后 replace 的应该是两个不同的页面，这里模拟一下
        window.location.replace('/?a=1')
      })
    } else {
      try {
        const a = +window.location.search.split('?')[1].split('=')[1]
        if (a === 1) {
          this.getLoginState()
          return
        }

        console.log('normal')
        this.authing.getLoginStateWithRedirect()
      } catch (e) {
        console.log('normal')
        this.authing.getLoginStateWithRedirect()
      }
    }
  }


  /**
   * 获取用户的登录状态
   */
  async getLoginState () {
    const loginState = await this.authing.getLoginState()
      this.loginState = loginState
      this.loginState = loginState
      const userInfo = await this.authing.getUserInfo()
      this.userInfo = JSON.stringify(userInfo, null, 4)
      console.log('this.userInfo: ', this.userInfo)
    } else {
      // 取不到用户信息直接跳转到授权中心
      this.authing.loginWithRedirect()
    this.loginState = loginState
      const userInfo = await this.authing.getUserInfo()
      this.userInfo = JSON.stringify(userInfo, null, 4)
      console.log('this.userInfo: ', this.userInfo)
    } else {
      // 取不到用户信息直接跳转到授权中心
      this.authing.loginWithRedirect()
  }

  logoutWithRedirect () {
    this.authing.logoutWithRedirect()
  }
}
