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

  - Unique Identifier: This is the unique ID of this connection and cannot be modified after setting.
  - Display name: the authing login form will display a {display name} login button.
  - AppID: appid provided by wechat.
  - Appsecret: appsecret provided by wechat.
  - Domain Verification Filename：Txt file name previously recorded.
  - Domain Verification File Content：Txt content recorded previously.
  - Callback URL：Your business callback link is required. The configured callback address supports the use of wildcards. For example, the callback address you configured is `https://*.example.com/*`，The following callback addresses are also allowed：`https://forum.example.com/t/topic/1234`.

## Install

Use NPM:
``` shell
npm install --save @authing/weixin-official-account
```

Use CDN:
```html
<script src="https://cdn.authing.co/packages/weixin-official-account/5.0.0/weixin-official-account.min.js"></script>
```

## Usage
### Init

``` typescript
import { AuthingWxmp } from '@authing/weixin-official-account'

const authingWx = new AuthingWxmp({
  // The unique logo of this social identity source, which you filled in when you created the wechat identity source on the Authing Console
  identifier: "authing-official-account",
  // Authing application ID
  appId: "62e7f0c91073aaba0db4d65b",
  // Authing application domain, etc: https://my-awesome-app.authing.cn
  host: "https://test-application-2022.authing.cn",
  // The specified callback link is optional. The callback address configured by the Console is used by default
  redirectUrl: 'http://localhost:3001'
})
```
### Determine whether the current environment is a wechat client
``` typescript
const isWeixin = authingWx.checkWechatUA()
```

### Initiate wechat authorization

``` typescript
// login.js
window.location = authingWx.getAuthorizationUrl()
```

### Get user information
``` typescript
// callback.js
const { ok, userInfo, message } = authingWx.getUserInfo()

if (ok) {
  console.log('userInfo: ', userInfo)
} else if (message) {
  console.log(message)
}
```
## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 Authing