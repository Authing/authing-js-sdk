import { Component } from '@angular/core';
import { Authing } from '@authing/web';
import type {
  IUserInfo,
  LoginState,
  NormalError
} from '@authing/web/dist/typings/src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website2'

  loginState: LoginState | null = null
  userInfo: IUserInfo | NormalError | string = ''

  private authing = new Authing({
    domain: 'https://sdfsdfsdfsdfsdfsdfsdf.authing.cn',
    appId: '632313cf2289a4e243b0ca1a',
    redirectUri: 'https://localhost:8001',
    userPoolId: '62e221f85f5ac5cc47037a39'
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
    this.loginState = await this.authing.getLoginState()
  }

  async getUserInfo () {
    const userInfo = await this.authing.getUserInfo()
    this.userInfo = JSON.stringify(userInfo, null, 4)
  }

  logoutWithRedirect () {
    this.authing.logoutWithRedirect()
  }
}
