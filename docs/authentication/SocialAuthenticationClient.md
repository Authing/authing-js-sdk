
# 社会化登录模块

[[toc]]

> 此模块封装了社会化登录的功能，可以通过简洁的 API 快速使用社会化登录获取用户信息。

发起社会化登录授权请求：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
await authenticationClient.social.authorize("github", {
   onSuccess: (user) => { console.log(user) },
   onError: (code, message) => {  }
})
```





## 发送授权登录请求

SocialAuthenticationClient().authorize(provider, options)

> 发送授权登录请求，该方法会直接打开一个新窗口，跳转到第三方社会化登录服务商（如 GitHub、微信、钉钉等）的登录授权页面，用户
完成授权之后，会自动关闭此窗口，并触发 onSuccess 回调函数，通过此函数，你可以获取到用户信息。


#### 参数

- `provider` \<string\> 社会化登录服务商的标志。 
- `options` \<object\>  
- `options.popup` \<boolean\> 是否通过弹窗的方式打开社会化登录窗口，如果设置为 false，将会以 window.open 的方式打开一个新的浏览器  tab 。 默认值为 : `true`。
- `options.onSuccess` \<Function\> 用户同意授权事件回调函数，第一个参数为用户信息。 
- `options.onError` \<Function\> 社会化登录失败事件回调函数，第一个参数 code 为错误码，第二个参数 message 为错误提示。详细的错误码列表请见：详细说明请见：[Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html) 
- `options.position` \<object\> 只有当 options.popup 为 ture 的时候有效，弹出窗口的位置，默认为 { w: 585, h: 649 } 。 

#### 示例

```javascript
// 使用 GitHub 登录

const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})

await authenticationClient.social.authorize("github", {
   onSuccess: (user) => { console.log(user) },
   onError: (code, message) => {  },
   // 自定义弹出窗口的位置
   position: {
     w: 100,
     h: 100
   }
})
```
```javascript
// 使用新建浏览器 tab 的形式打开社会化登录页面

const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})

await authenticationClient.social.authorize("github", {
   popup: false,
   onSuccess: (user) => { console.log(user) },
   onError: (code, message) => {  },
})
```

#### 返回值




      