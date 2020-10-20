# Authing - Node/JavaScript

Authing JavaScript/Node SDK 由两部分组成：`ManagementClient` 和 `AuthenticationClient`。`AuthenticationClient` 包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在浏览器和后端环境中使用。`ManagementClient` 适合在后端或者**可信任**的前端环境下使用。一般来说，你在 [Authing 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此 SDK 完成。

> Authing SDK for NodeJS/JavaScript 已经更新至 `4.0.0` 版本，如果你需要使用 `v3` 版本文档，请见 [https://docs.authing.co/sdk/sdk-for-node/old.html](https://docs.authing.co/sdk/sdk-for-node/old.html)

- [安装](#安装)
- [使用用户认证模块](#使用用户认证模块)
  - [初始化](#初始化)
  - [使用方法](#使用方法)
  - [小程序扫码登录](#小程序扫码登录)
  - [App 扫码登录](#app-扫码登录)
  - [模块列表](#模块列表)
- [使用用户管理模块](#使用用户管理模块)
  - [初始化](#初始化-1)
  - [使用方法](#使用方法-1)
  - [模块列表](#模块列表-1)
- [错误处理](#错误处理)
- [获取帮助](#获取帮助)
- [接口索引](#接口索引)

## 安装

使用 `npm`:

```
npm install authing-js-sdk
```

使用 `yarn`:

```
yarn add authing-js-sdk
```

## 使用用户认证模块

### 初始化

`AuthenticationClient` 初始化需要传入用户池 ID `userPoolId`：

> 你可以在此了解[如何获取 UserPoolId](https://docs.authing.cn/others/faq.html)，如果你对用户池的概念不是很了解，可以在此[了解 Authing 系统的核心概念](https://docs.authing.cn/quickstart/basic.html)。

```js
import { AuthenticationClient } from "authing-js-sdk"

const authing = new AuthenticationClient({
  userPoolId: "YOUR_USERPOOL_ID"
})
```

完整参数列表如下:

- `userPoolId`: 用户池 ID。
- `accessToken`: 通过用户的 token 初始化 SDK 。
- `timeout`: 请求超时时间，单位为毫秒，默认为 10000 （10 秒）。
- `onError`: 错误处理函数，你可以用其来全局捕捉 Authing 客户端请求的所有异常。函数定义为：


```js
(code: number, message: string, data: any) => void
```

> 完整的错误代码请见[此文档](https://docs.authing.cn/advanced/error-code.html)。

- `host`: Authing 服务器地址。如果你使用的是公有云版本，请忽略请参数。如果你使用的是私有化部署的版本，此参数必填。格式如下: `https://authing-api.mydomain.com`，最后不带 `/`。
- `preflight`: 是否开启网络状况预检，默认为 false。此参数适用于检查用户的网络是否屏蔽了 authing 服务器域名（某些企业的内网会屏蔽第三方网站），检查成功不进行任何通知，检查失败后会调用传入的错误处理函数。执行预检之后会导致 SDK 初始化速度变慢，请谨慎使用。
- `cdnPreflight`: 是否开启 CDN 网络状况预检，默认为 false。此参数适用于检查用户的网络是否可以访问七牛云 CDN（某些开了代理的场景下无法访问），检查成功不进行任何通知，检查失败后调用传入的错误处理函数。执行 CDN 预检之后会导致 SDK 初始化速度变慢，请谨慎使用。

### 使用方法

如果在浏览器环境下使用该 SDK，在用户完成登录之后，SDK 会将用户的 `token` 写入到 `localStorage`，后续请求会携带 `token` 访问。

```js
const email = 'test@example.com';
const password = 'passw0rd';
const user = await authing.loginByEmail(email, password); // 成功登录，将 token 写入 localStorage

// 登录之后可以进行此操作
await authing.updateProfile(
  nickname: 'Bob'
)
```

### 小程序扫码登录

小程序扫码登录指使用 Authing 小程序`小登录`进行微信登录，[点此了解更多](https://authing.cn/verify)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.wxqrcode.startScanning("qrcode", {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket)
  },
});
```

![扫码 demo](https://usercontents.authing.cn/wxapp-scaning-demo.gif)

完整的使用方式与参数请见。

### App 扫码登录

App 扫码登录指的是使用你自己的 App 扫码登录网站，[点此了解更多](https://docs.authing.cn/scan-qrcode/app-qrcode/)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.qrcode.startScanning("qrcode", {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket)
  },
});
```

### 模块列表

- [AuthenticationClient](./docs/authentication/AuthenticationClient.md) 核心模块
- [QrCodeAuthenticationClient](./docs/authentication/QrCodeAuthenticationClient.md) 小程序扫码登录和 APP 扫码登录


## 使用用户管理模块

### 初始化

`ManagementClient` 初始化需要传入用户池 ID `userPoolId` 和用户池密钥`secret`：

> 你可以在此了解[如何获取 userPoolId 和 secret](https://docs.authing.cn/others/faq.html)，如果你对用户池的概念不是很了解，可以在此[了解 Authing 系统的核心概念](https://docs.authing.cn/quickstart/basic.html)。

```js
import { ManagementClient } from "authing-js-sdk"

const managementClient = new ManagementClient({
  userPoolId: "YOUR_USERPOOL_ID",
  secret: "YOUR_USERPOOL_SECRET"
})
```

完整参数列表如下:

- `userPoolId`: 用户池 ID。
- `secret`: 用户池密钥。
- `accessToken`: 通过管理员的 token 初始化 SDK。**secret 和 accessToken 必须填其中一种**。
- `timeout`: 请求超时时间，单位为毫秒，默认为 10000 （10 秒）。
- `onError`: 错误处理函数，你可以用其来全局捕捉 Authing 客户端请求的所有异常。函数定义为：


```js
(code: number, message: string, data: any) => void
```

> 完整的错误代码请见[此文档](https://docs.authing.cn/advanced/error-code.html)。

- `host`: Authing 服务器地址。如果你使用的是公有云版本，请忽略请参数。如果你使用的是私有化部署的版本，此参数必填。格式如下: `https://authing-api.mydomain.com`，最后不带 `/`。
- `preflight`: 是否开启网络状况预检，默认为 false。此参数适用于检查用户的网络是否屏蔽了 authing 服务器域名（某些企业的内网会屏蔽第三方网站），检查成功不进行任何通知，检查失败后会调用传入的错误处理函数。执行预检之后会导致 SDK 初始化速度变慢，请谨慎使用。
- `cdnPreflight`: 是否开启 CDN 网络状况预检，默认为 false。此参数适用于检查用户的网络是否可以访问七牛云 CDN（某些开了代理的场景下无法访问），检查成功不进行任何通知，检查失败后调用传入的错误处理函数。执行 CDN 预检之后会导致 SDK 初始化速度变慢，请谨慎使用。

### 使用方法

`ManagementClient` 可以用于管理用户、角色、策略、分组、组织机构、用户池配置，理论上任何你在 [Authing 控制台](https://console.authing.cn/console/userpool) 中能做的操作，都能用此 SDK 完成。

获取用户目录列表:

```js
// list 当前页的用户列表
// totalCount 用户总数
const { list, totalCount } = await managementClient.users.list()
```

创建角色:

```js
const role = await managementClient.roles.create('code', '角色名称')
```

修改用户池配置:

```js
const userpool = await managementClient.userpool.update({
  registerDisabled: true // 关闭用户池注册
})
```

### 模块列表

- [UsersManagementClient](./docs/management/UsersManagementClient.md) 用户管理模块
- [RolesManagementClient](./docs/management/RolesManagementClient.md) 角色管理模块
- [GroupsManagementClient](./docs/management/GroupsManagementClient.md) 分组管理模块
- [OrgManagementClient](./docs/management/OrgManagementClient.md) 组织机构管理模块
- [PoliciesManagementClient](./docs/management/PoliciesManagementClient.md) 策略管理模块
- [AclManagementClient](./docs/management/AclManagementClient.md) 访问控制模块
- [UdfManagementClient](./docs/management/UdfManagementClient.md) 自定义字段元数据管理模块
- [WhitelistManagementClient](./docs/management/WhitelistManagementClient.md) 白名单管理模块
- [UserPoolManagementClient](./docs/management/UserpoolManagementClient.md) 用户池设置管理模块

## 错误处理

你可以使用 `try catch` 进行错误处理:

```js
try {
  const user = await authing.loginByEmail('test@example.com', 'passw0rd')
} catch (error) {
  console.log(error.code); // 2004
  console.log(error.message); // 用户不存在
}
```

> 完整的错误代码请见[此文档](https://docs.authing.cn/advanced/error-code.html)。


你还可以指定 `onError` 统一捕捉所有 Authing 请求异常，如使用 `antd` 等前端组件显示错误提示。

```js
import { message } from "antd";
const authing = new AuthenticationClient({
  userPoolId,
  onError: (code, msg: any) => {
    message.error(msg);
  }
})
```

## 获取帮助

Join us on Gitter: [#authing-chat](https://gitter.im/authing-chat/community)
