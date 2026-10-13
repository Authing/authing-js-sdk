# @authing/miniapp-wx

Authing JS SDK for weixin minprogram

## Usage

reference [examples](../../examples/miniapp-wx/miniapp/pages/index/index.ts)

## HTTPDNS

如果小程序遇到 LocalDNS 解析异常，可以在初始化 SDK 时启用微信的 HTTPDNS 能力：

```js
import { Authing } from '@authing/miniapp-wx'

const authing = new Authing({
  appId: 'AUTHING_APP_ID',
  userPoolId: 'AUTHING_USER_POOL_ID',
  enableHttpDNS: true,
  httpDNSServiceId: '已开通的服务商 Service ID'
})
```

这两个可选参数会传递给该实例的所有微信 `wx.request` 请求，包括登录、刷新 token 和获取用户信息。不配置时保持原有请求行为，`enableHttpDNS: false` 可以显式关闭；抖音小程序不传递这两个微信专用参数。

需要在微信服务市场为该小程序开通 HTTPDNS 服务，并使用服务商提供的 Service ID；此 ID 不是 Authing 应用 ID，也不是 HTTPDNS 控制台的授权 ID。微信基础库需为 2.19.2 或以上。服务可用性、额度和回退行为由微信及服务商处理，详情参见 [微信 HTTPDNS 文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)。

## Doc

https://docs.authing.cn/v3/reference/sdk/miniapp/quick.html
