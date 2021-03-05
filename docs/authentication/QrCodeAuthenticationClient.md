
# 扫码登录模块

[[toc]]

> 此模块用于进行扫码登录，扫码登录分为两种小程序扫码登录（wxqrcode）和 APP 扫码登录（qrcode）。两种扫码登录方式 API 完全一致。

使用小程序扫码登录：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
authenticationClient.wxqrcode.startScanning() # 开始扫码登录
```

使用 APP 扫码登录

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
authenticationClient.qrcode.startScanning() # 开始扫码登录
```





## 一键开始扫码

QrCodeAuthenticationClient().startScanning(domId, options)

> 一键开始扫码


#### 参数

- `domId` \<string\> DOM 元素的 ID。 
- `options` \<Object\>  
- `options.autoExchangeUserInfo` \<boolean\> 是否自定义使用 ticket 换取用户信息 
- `options.interval` \<number\> 间隔时间，单位为毫秒，默认为 800 毫秒 
- `options.onStart` \<Function\> 开始轮询的事件回调函数, 第一个参数为 setInterval 返回的计时器，可以用 clearInterval 取消此计时器 
- `options.onResult` \<Function\> 获取到二维码最新状态事件回调函数，第一个参数为的类型为 QRCodeStatus。 
- `options.onScanned` \<Function\> 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的。
出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息， 
- `options.onSuccess` \<Function\> 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。第一个参数为 userInfo 用户信息，第二个参数为 ticket，用于换取用户的详情。
详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。 
- `options.onCancel` \<Function\> 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。 
- `options.onError` \<Function\> 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在" } 
- `options.onExpired` \<Function\> 二维码失效时被回调，只回调一次，之后轮询结束。 
- `options.onCodeShow` \<Function\> 二维码首次成功显示的事件。 
- `options.onCodeLoaded` \<Function\> 二维码首次成功 Load 的事件。 
- `options.onCodeLoadFailed` \<Function\> 二维码加载失败的事件。 
- `options.onCodeDestroyed` \<Function\> 二维码被销毁的事件。 
- `options.size` \<Object\> 二维码图片大小，默认为 240 * 240，单位为 px 。 
- `options.size.height` \<number\> 高度 
- `options.size.width` \<number\> 宽度 
- `options.containerSize` \<Object\> DOM 容器大小，默认为 300 * 300，单位为 px 。 
- `options.containerSize.height` \<number\> 高度 
- `options.containerSize.width` \<number\> 宽度 
- `options.tips` \<Object\> 自定义提示信息 
- `options.tips.title` \<number\>  
- `options.tips.scanned` \<number\>  
- `options.tips.succeed` \<Object\>  
- `options.tips.canceled` \<number\>  
- `options.tips.expired` \<number\>  
- `options.tips.retry` \<number\>  
- `options.tips.failed` \<number\>  

#### 示例

```javascript
authenticationClient.wxqrcode.startScanning("qrcode", {
 onSuccess: (userInfo, ticket) => {
   console.log(userInfo, ticket)
 },
 onError: (message) => onFail && onFail(`${message}`),
});
```

#### 返回值

-  `null` 


      

## 生成二维码

QrCodeAuthenticationClient().geneCode()

> 生成二维码


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const { url, random } = await authenticationClient.wxqrcode.geneCode()

# random 二维码唯一 ID
# url 二维码链接
```

#### 返回值

-  `Promise<QRCodeGenarateResult>` 


      

## 检测扫码状态

QrCodeAuthenticationClient().checkStatus(random)

> 检测扫码状态


#### 参数

- `random` \<string\>  

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const { random, status, ticket, userInfo } = await authenticationClient.wxqrcode.checkStatus('RANDOM')
# status: 二维码状态: 0 - 未使用, 1 - 已扫码, 2 - 已授权, 3 - 取消授权, -1 - 已过期
# ticket: 用于换取用户信息的一个随机字符串
# userInfo: 用户信息
```

#### 返回值

-  `Promise<QRCodeStatus>` 


      

## 使用 ticket 交换用户信息

QrCodeAuthenticationClient().exchangeUserInfo(ticket)

> 使用 ticket 交换用户信息


#### 参数

- `ticket` \<string\> ticket 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const user = await authenticationClient.wxqrcode.exchangeUserInfo('TICKET')
# user: 完整的用户信息，其中 user.token 为用户的登录凭证。
```

#### 返回值

-  `Promise<Partial<User>>` 


      

## 开始轮询二维码状态

QrCodeAuthenticationClient().startPolling(random, options)

> 开始轮询二维码状态


#### 参数

- `random` \<string\> 二维码唯一 ID 
- `options` \<Object\>  
- `options.interval` \<number\> 间隔时间，单位为毫秒，默认为 800 毫秒 
- `options.onStart` \<Function\> 开始轮询的事件回调函数, 第一个参数为 setInterval 返回的计时器，可以用 clearInterval 取消此计时器 
- `options.onResult` \<Function\> 获取到二维码最新状态事件回调函数，第一个参数为的类型为 QRCodeStatus。 
- `options.onScanned` \<Function\> 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的。
出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息， 
- `options.onSuccess` \<Function\> 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。第一个参数为 userInfo 用户信息，第二个参数为 ticket，用于换取用户的详情。
详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。 
- `options.onCancel` \<Function\> 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。 
- `options.onError` \<Function\> 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在" } 
- `options.onExpired` \<Function\> 二维码失效时被回调，只回调一次，之后轮询结束。 

#### 示例



#### 返回值

-  `null` 


      