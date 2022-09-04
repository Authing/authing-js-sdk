# @authing/weixin-official-account

English | [简体中文](./README-zh_CN.md)

## Start

- Go to [wechat official account](https://mp.weixin.qq.com/) to register an account
- Must be a Service Account
- Must pass wechat authentication
- Log in to wechat official account, `Settings and Development` -> `Basic configuration`, get Developer ID(AppID) and Developer Password(AppSecret).
- Go to `Settings and Development` -> `Account Info` -> `Function setting`页面添加`Webpage authorization domain name`. Domain name fill in the unified callback domain name of authoring：`core.authing.cn`. For security verification, wechat server needs to verify the request with authing server, Developers need to download the `txt file` and record the `file name` and `txt content`

<img src="./assets/1.png" width="650" />

- Go to [Authing Console](https://console.authing.cn), `Authentication` -> `Social` -> -> `Create Connection` -> `Wechat` -> `Wechat Web Page`, And fill in the following information:

  - 唯一标识： 这是此连接的唯一标识，设置之后不能修改。
  - 显示名称： Authing 登录表单将会显示一个“{Display Name} 登录”的按钮。
  - 开发者ID：微信提供的 AppID
  - 开发者密码：微信提供的 AppSecret
  - 域名校验文件名：前面记录的 txt 文件名
  - 域名校验文件内容：前面记录的 txt 文本内容
  - Callback URL：你的业务回调链接，必填。配置的回调地址支持使用通配符，例如你配置的回调地址为`https://*.example.com/*`，下面的回调地址也是允许的：`https://forum.example.com/t/topic/1234`。

## 安装

使用 NPM:
``` shell
npm install --save @authing/weixin-official-account
```

使用 CDN:
```html
<script src="https://cdn.authing.co/packages/weixin-official-account/5.0.0/weixin-official-account.min.js"></script>
```

## 使用
### 初始化

``` typescript
import { AuthingWxmp } from '@authing/weixin-official-account'

const authingWx = new AuthingWxmp({
  // 此社会化身份源的唯一标志，你在 Authing 控制台创建微信身份源的时候填写的
  identifier: "authing-official-account",
  // Authing 应用 ID
  appId: "62e7f0c91073aaba0db4d65b",
  // Authing 应用域名，如 https://my-awesome-app.authing.cn
  host: "https://test-application-2022.authing.cn",
  // 指定的回调链接，选填，默认使用控制台配置的回调地址
  redirectUrl: 'http://localhost:3001'
})
```
### 判断当前环境是否为微信客户端
``` typescript
const isWeixin = authingWx.checkWechatUA()
```

### 发起微信授权

``` typescript
// login.js
window.location = authingWx.getAuthorizationUrl()
```

### 获取用户信息
``` typescript
// callback.js
const { ok, userInfo, message } = authingWx.getUserInfo()

if (ok) {
  console.log('userInfo: ', userInfo)
} else if (message) {
  console.log(message)
}
```

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 开源许可

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 Authing