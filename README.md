---
meta:
  - name: description
    content: Node.js/JavaScript SDK
---

# {{$localeConfig.brandName}} - Node.js/JavaScript

<LastUpdated/>

{{$localeConfig.brandName}} JavaScript/Node SDK 由两部分组成：`ManagementClient` 和 `AuthenticationClient`。

`AuthenticationClient` 以终端用户（End User）的身份进行请求，提供了登录、注册、登出、管理用户资料、获取授权资源等所有管理用户身份的方法；此模块还提供了各种身份协议的 SDK，如 [OpenID Connect](/guides/federation/oidc.md), [OAuth 2.0](/guides/federation/oauth.md), [SAML](/guides/federation/saml.md) 和 [CAS](/guides/federation/cas.md)。此模块适合用于非受信任的浏览器环境和纯后端交互的服务器环境。

`ManagementClient` 以管理员（Administrator）的身份进行请求，用于管理用户池资源和执行管理任务，提供了管理用户、角色、应用、资源等方法；一般来说，你在 [{{$localeConfig.brandName}} 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此模块完成。此模块适合在后端或者**可信任**的前端环境下使用。

你应该将初始化过后的 `ManagementClient` 实例设置为一个全局变量（只初始化一次），而 `AuthenticationClient` 应该每次请求初始化一个。


## GitHub 下载地址

| 条目     | 说明                                        |
| -------- | ------------------------------------------- |
| 支持版本 | Node 12.0.0 +                                    |
| 仓库地址 | [https://github.com/Authing/authing.js](https://github.com/Authing/authing.js) |

## 安装

使用 `npm`:

```
npm install authing-js-sdk
```

使用 `yarn`:

```
yarn add authing-js-sdk
```

> 如果你要在 React Native 环境中使用，需要先在 RN 项目根目录运行：`npx rn-nodeify --install "crypto,stream"`，之后会在项目根目录生成一个 `shim.js` 文件，然后在 App.js 第一行引入 `import './shim.js'`。

使用 CDN:

```html
<script src="https://cdn.authing.co/packages/authing-js-sdk/4.23.4/umd/index.js"></script>

<script>
  /** 你可以通过全局变量 Authing 获取 AuthenticationClient 和 ManagementClient */
  var authing = new Authing.AuthenticationClient({
    appId: 'AUTHING_APP_ID',
    appHost: 'https://xxx.authing.cn',
  })
</script>
```

## 使用认证模块

`AuthenticationClient` 以终端用户（End User）的身份进行请求，提供了登录、注册、登出、管理用户资料、获取授权资源等所有管理用户身份的方法；此模块还提供了各种身份协议的 SDK，如 [OpenID Connect](/guides/federation/oidc.md), [OAuth 2.0](/guides/federation/oauth.md), [SAML](/guides/federation/saml.md) 和 [CAS](/guides/federation/cas.md)。此模块适合用于非受信任的浏览器环境和纯后端交互的服务器环境。

### 初始化

`AuthenticationClient` 初始化需要传入 `appId` （应用 ID）和 `appHost`（应用域名，格式为 `https://YOUR_DOMAIN.authing.cn`）：

> 你可以在此[获取 appId 和 appHost](/guides/faqs/get-app-id-and-secret.md)。

```js
import { AuthenticationClient } from 'authing-js-sdk'

const authing = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
  appHost: 'YOUR_APP_HOST', // https://YOUR_DOMAIN.authing.cn e.g.
})
```

完整参数列表如下:

- `appId`: {{$localeConfig.brandName}} [应用 ID](/guides/faqs/get-app-id-and-secret.md)（必填）；
- `appHost`: {{$localeConfig.brandName}} [应用地址](/guides/faqs/get-app-id-and-secret.md)（必填），格式为 `https://YOUR_DOMAIN.authing.cn`；
- `token`: 用户的 [id_token](/concepts/id-token.md)（可选），你可以在前端 localStorage 中缓存用户 `id_token`，然后使用 `id_token` 初始化 SDK，从而实现记住登录的目的；
- `timeout`: 请求超时时间（可选），位为毫秒，默认为 10000（10 秒）；
- `onError`: 错误处理函数（可选），你可以用其来全局捕捉 {{$localeConfig.brandName}} 客户端请求的所有异常。完整的错误代码请见[此文档](/reference/error-code.md)。函数定义为：

```js
(code: number, message: string, data: any) => void
```

- `publicKey`: 密码非对称加密公钥（可选），如果你使用的是 {{$localeConfig.brandName}} 公有云服务，可以忽略；如果你使用的是私有化部署的 {{$localeConfig.brandName}}，请联系 {{$localeConfig.brandName}} IDaaS 服务管理员。
- `lang`: 接口 Message 返回语言格式（可选），可选值为 `zh-CN` 和 `en-US`，默认为 `zh-CN`。

### 快速开始

如果在浏览器环境下使用该 SDK，在用户完成登录之后，SDK 会将用户的 [id_token](/concepts/id-token.md) 写入到 `localStorage`，后续请求会携带 此 `id_token` 访问。

```js
const email = 'test@example.com'
const password = 'passw0rd'
const user = await authing.loginByEmail(email, password) // 成功登录，将 id_token 写入 localStorage

// 登录之后可以进行此操作
await authing.updateProfile((nickname: 'Bob'))
```

如果在后端服务器环境下使用，我们推荐每次请求初始化一个新的 `AuthenticationClient`，保证不同请求之间完全隔离。当用户登录之后，前端可以将用户的 `id_token` 放在 `Authorization` 请求头中，用于标志当前请求用户的身份，示例：

```js
const axios = require('axios')
axios
  .get({
    url: 'https://yourdomain.com/api/v1/your/resources',
    headers: {
      Authorization: 'Bearer ID_TOKEN',
    },
  })
  .then((res) => {
    // custom codes
  })
```

后端解析请求头 `Authorization` 中的 `id_token`，然后验证此 `id_token` 的合法性。

### 社会化登录

通过 `authenticationClient.social.authorize` 发送授权登录请求，该方法会直接打开一个新窗口，跳转到第三方社会化登录服务商（如 GitHub、微信、钉钉等）的登录授权页面，用户完成授权之后，会自动关闭此窗口，并触发 `onSuccess` 回调函数，通过此函数，你可以获取到用户信息。示例：

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
  appHost: 'https://xxx.authing.cn',
})

await authenticationClient.social.authorize('github', {
  onSuccess: (user) => {
    console.log(user)
  },
  onError: (code, message) => {},
  // 自定义弹出窗口的位置
  position: {
    w: 100,
    h: 100,
  },
})
```

<details><summary><b>查看支持的社会化登录列表及接入流程</b></summary>

{{$localeConfig.brandName}} 目前一共支持国内外将近 20 余种社会化登录，如微信、GitHub、Sign in with Apple、支付宝等，以下是完整的列表：

!!!include(common/social-connections-table.md)!!!

</details>

### 小程序扫码登录

这是 Authing 的一个开创性的设计，在 Authing 中开启扫描小登录二维码登录后可以获得微信官方的实名用户信息， 用户一键授权即可以真实号码完成注册或者登录，为开发者建立**以手机号码为基础的账号体系**。[点此了解更多](https://authing.cn/verify)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.wxqrcode.startScanning('DOM_ID', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket)
  },
})
```

<img src="https://usercontents.authing.cn/wxapp-scaning-demo.gif" style="display:block;margin: 0 auto;">

完整的使用方式与参数请见 [扫码登录模块](/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.md)。

### App 扫码登录

随着移动互联网的普及，手机已经成为人们生活中的必需品，通过手机扫描二维码完成认证的方式变得越来越常见。越来越多的移动应用集成了扫描二维码登录 PC 端网站应用的功能，这对于用户来说是一种既方便又安全的体验。借助 Authing 提供的扫描登录能力，可以帮助快速、安全地实现此功能。[点此了解更多](/guides/authentication/qrcode/use-self-build-app/)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.qrcode.startScanning('DOM_ID', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket)
  },
})
```

### 模块列表

- [核心模块](./authentication/AuthenticationClient.md)
- [标准协议模块](./authentication/StandardProtocol.md)
- [小程序扫码登录和 APP 扫码登录模块](./authentication/QrCodeAuthenticationClient.md)
- [多因素认证模块](./authentication/MfaAuthenticationClient.md)
- [社会化登录模块](./authentication/SocialAuthenticationClient.md)
- [企业身份源登录模块](./authentication/EnterpriseAuthenticationClient.md)

## 使用管理模块

`ManagementClient` 以管理员（Administrator）的身份进行请求，用于管理用户池资源和执行管理任务，提供了管理用户、角色、应用、资源等方法；一般来说，你在 [{{$localeConfig.brandName}} 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此模块完成。此模块适合在后端或者**可信任**的前端环境下使用。

### 初始化

`ManagementClient` 初始化需要传入用户池 ID `userPoolId` 和用户池密钥 `secret`：

> 你可以在此了解[如何获取 userPoolId 和 secret](/guides/faqs/get-userpool-id-and-secret.md)。

```js
import { ManagementClient } from 'authing-js-sdk'

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
```

完整参数列表如下:

- `userPoolId`: 用户池 ID（必填）。
- `secret`: 用户池密钥（必填）。
- `timeout`: 请求超时时间（可选）。单位为毫秒，默认为 10000（10 秒）。
- `onError`: 错误处理函数，你可以用其来全局捕捉 {{$localeConfig.brandName}} 客户端请求的所有异常。函数定义为：

```js
(code: number, message: string, data: any) => void
```

> 完整的错误代码请见[此文档](/reference/error-code.md)。

- `host`: {{$localeConfig.brandName}} 服务器地址。如果你使用的是公有云版本，请忽略此参数。如果你使用的是私有化部署的版本，此参数必填。格式如下: `https://authing-api.mydomain.com`，最后不带 `/`。
- `publicKey`: 密码非对称加密公钥（可选），如果你使用的是 {{$localeConfig.brandName}} 公有云服务，可以忽略；如果你使用的是私有化部署的 {{$localeConfig.brandName}}，请联系 {{$localeConfig.brandName}} IDaaS 服务管理员。
- `lang`: 接口 Message 返回语言格式（可选），可选值为 `zh-CN` 和 `en-US`，默认为 `zh-CN`。

### 快速开始

`ManagementClient` 以管理员（Administrator）的身份进行请求，用于管理用户池资源和执行管理任务，提供了管理用户、角色、应用、资源等方法；一般来说，你在 [{{$localeConfig.brandName}} 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此模块完成。例如：

1. 获取用户目录列表:

```js
const { list, totalCount } = await managementClient.users.list()
```

2. 创建角色:

```js
const role = await managementClient.roles.create('code', '角色名称')
```

3. 修改用户池配置:

```js
const userpool = await managementClient.userpool.update({
  registerDisabled: true, // 关闭用户池注册
})
```

### 模块列表

- [用户管理模块](./management/UsersManagementClient.md)
- [角色管理模块](./management/RolesManagementClient.md)
- [权限管理模块](./management/AclManagementClient.md)
- [分组管理模块](./management/GroupsManagementClient.md)
- [应用管理模块](./management/ApplicationManagementClient.md)
- [组织机构管理模块](./management/OrgManagementClient.md)
- [自定义字段元数据管理模块](./management/UdfManagementClient.md)
- [白名单管理模块](./management/WhitelistManagementClient.md)
- [用户池设置管理模块](./management/UserpoolManagementClient.md)
- [多租户管理模块](./management/TenantManagementClient.md)

## 错误处理

你可以使用 `try catch` 进行错误处理:

```js
try {
  const user = await authing.loginByEmail('test@example.com', 'passw0rd')
} catch (error) {
  console.log(error.code) // 2004
  console.log(error.message) // 用户不存在
}
```

> 完整的错误代码请见[此文档](/reference/error-code.md)。

你还可以指定 `onError` 统一捕捉所有 {{$localeConfig.brandName}} 请求异常，如使用 `antd` 等前端组件显示错误提示。

```js
import { message } from 'antd'
const authing = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
  appHost: 'https://core.you-authing-service.com',
  onError: (code, msg: any) => {
    message.error(msg)
  },
})
```

## 私有化部署

**私有化部署**场景需要指定你私有化的 Authing 服务的 API 端点（**不带协议头和 Path**）和密码加密公钥，如果你不清楚可以联系 Authing IDaaS 服务管理员。

```js
import { AuthenticationClient, ManagementClient } from 'authing-js-sdk'

const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
  appHost: 'https://your-app.you-authing-service.com',
  publicKey: 'YOUR_PUBLIC_KEY',
})

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
  host: 'https://core.you-authing-service.com',
  publicKey: 'YOUR_PUBLIC_KEY',
})
```

## 获取帮助

Join us on forum: [#authing-chat](https://forum.authing.cn/)
