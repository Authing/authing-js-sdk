import { Component } from '@angular/core'
import { Authing } from '@authing/web'
import type {
  LoginState,
  IUserInfo,
  NormalError
} from '@authing/web/dist/typings/src/global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website1'

  loginState: LoginState | null = null
  userInfo: IUserInfo | NormalError | null = null

  private authing = new Authing({
    domain: 'https://test-auth-zhaoyiming.authing.cn',
    appId: '630ed3137dd6f2fd7001da24',
    redirectUri: 'https://localhost:8000',
    userPoolId: '62e221f85f5ac5cc47037a39'
  })

  async ngOnInit() {
    // 校验当前 url 是否是登录回调地址
    if (this.authing.isRedirectCallback()) {
      console.log('redirect')

      /**
       * 以跳转方式打开 Authing 托管的登录页，认证成功后，需要配合 handleRedirectCallback，
       * 在回调端点处理 Authing 发送的授权码或 token，获取用户登录态
       */
      this.authing.handleRedirectCallback().then(res => {
        this.loginState = res
        window.location.replace('/')
      })
    } else {
      await this.getLoginState()
    }
  }

  /**
   * 以跳转方式打开 Authing 托管的登录页
   */
  loginWithRedirect() {
    this.authing.loginWithRedirect()
  }

  /**
   * 获取用户的登录状态
   */
  async getLoginState() {
    const state = await this.authing.getLoginState()
    console.log('state: ', state)
    this.loginState = state
  }

  /**
   * 获取用户身份信息
   */
  async getUserInfo() {
    const userInfo = await this.authing.getUserInfo()

    console.log('userInfo: ', userInfo)

    this.userInfo = userInfo
  }

  /**
   * 登出
   */
  logoutWithRedirect() {
    this.authing.logoutWithRedirect()
  }
}
