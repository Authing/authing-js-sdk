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
    // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
    domain: 'AUTHING_DOMAIN_URL',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
    appId: 'AUTHING_APP_ID',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
    redirectUri: 'YOUR_REDIRECT_URL',

    // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
    userPoolId: 'AUTHING_USER_POOL_ID'
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
   * 以弹窗方式打开 Authing 托管的登录页
   */
  async loginWithPopup() {
    const loginState = await this.authing.loginWithPopup()
    console.log('loginWithPopup loginState: ', loginState)
    this.loginState = loginState
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
    this.authing.logoutWithRedirect({
      redirectUri: 'https://www.baidu.com'
    })
  }
}
