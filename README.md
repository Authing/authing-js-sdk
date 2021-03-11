# Authing - Node.js/JavaScript

Authing JavaScript/Node SDK 由两部分组成：`ManagementClient` 和 `AuthenticationClient`。`AuthenticationClient` 包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在浏览器和后端环境中使用。`ManagementClient` 适合在后端或者**可信任**的前端环境下使用。一般来说，你在 [Authing 控制台](https://console.authing.cn/console/userpool) 中能做的所有操作，都能用此 SDK 完成。

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
<script src="https://cdn.jsdelivr.net/npm/authing-js-sdk/build/browser/index.min.js"></script>

<script>
  /** 你可以通过全局变量 Authing 获取 AuthenticationClient 和 ManagementClient */
  var authing = new Authing.AuthenticationClient({
    appId: 'AUTHING_APP_ID',
  });
</script>
```

## 使用认证模块

### 初始化

`AuthenticationClient` 初始化需要传入`AppId` （应用 ID）：

> 你可以在控制台的 **应用** 中查看自己的应用列表。

```js
import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
});
```

完整参数列表如下:

- `appId`: Authing 应用 ID（必填）；
- `accessToken`: 通过用户的 `id_token` 初始化 SDK（可选，你可以在前端 localStorage 中缓存用户 `id_token`，实现记住登录的目的） 。
- `timeout`: 请求超时时间，单位为毫秒，默认为 10000 （10 秒）。
- `onError`: 错误处理函数，你可以用其来全局捕捉 Authing 客户端请求的所有异常。完整的错误代码请见[此文档](https://docs.authing.cn/v2/reference/error-code.html)。函数定义为：

```js
(code: number, message: string, data: any) => void
```

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
await authing.updateProfile((nickname: 'Bob'));
```

### 社会化登录

通过 `authenticationClient.social.authorize` 发送授权登录请求，该方法会直接打开一个新窗口，跳转到第三方社会化登录服务商（如 GitHub、微信、钉钉等）的登录授权页面，用户
完成授权之后，会自动关闭此窗口，并触发 `onSuccess` 回调函数，通过此函数，你可以获取到用户信息。

示例：

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
});

await authenticationClient.social.authorize('github', {
  onSuccess: (user) => {
    console.log(user);
  },
  onError: (code, message) => {},
  // 自定义弹出窗口的位置
  position: {
    w: 100,
    h: 100,
  },
});
```

<details><summary><b>查看支持的社会化登录列表及接入流程</b></summary>

Authing 目前一共支持国内外将近 20 余种社会化登录，如微信、GitHub、Sign in with Apple、支付宝等，以下是完整的列表：

!!!include(common/social-connections-table.md)!!!

</details>

### 小程序扫码登录

小程序扫码登录指使用 Authing 小程序`小登录`进行微信登录，[点此了解更多](https://authing.cn/verify)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.wxqrcode.startScanning('qrcode', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket);
  },
});
```

<img src="https://usercontents.authing.cn/wxapp-scaning-demo.gif" style="display:block;margin: 0 auto;">

完整的使用方式与参数请见 [扫码登录模块](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html)。

### App 扫码登录

App 扫码登录指的是使用你自己的 App 扫码登录网站，[点此了解更多](https://docs.authing.cn/v2/guides/authentication/qrcode/use-self-build-app/)。

你可以使用 5 行代码实现一个完整的扫码登录表单：

```js
authenticationClient.qrcode.startScanning('qrcode', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket);
  },
});
```

### 模块列表

- [AuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/AuthenticationClient.html) 核心模块
- [QrCodeAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html) 小程序扫码登录和 APP 扫码登录
- [MfaAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/MfaAuthenticationClient.html) 多因素认证模块
- [SocialAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/SocialAuthenticationClient.html) 社会化登录模块

## 使用管理模块

### 初始化

`ManagementClient` 初始化需要传入用户池 ID `userPoolId` 和用户池密钥`secret`：

> 你可以在此了解[如何获取 userPoolId 和 secret](https://docs.authing.cn/v2/guides/faqs/get-userpool-id-and-secret.html)。

```js
import { ManagementClient } from 'authing-js-sdk';

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
});
```

完整参数列表如下:

- `userPoolId`: 用户池 ID。
- `secret`: 用户池密钥。
- `accessToken`: 通过管理员的 token 初始化 SDK。（可选，**secret 和 accessToken 必须填其中一种**）。
- `timeout`: 请求超时时间，单位为毫秒，默认为 10000 （10 秒）。
- `onError`: 错误处理函数，你可以用其来全局捕捉 Authing 客户端请求的所有异常。函数定义为：

```js
(code: number, message: string, data: any) => void
```

> 完整的错误代码请见[此文档](https://docs.authing.cn/v2/reference/error-code.html)。

- `host`: Authing 服务器地址。如果你使用的是公有云版本，请忽略请参数。如果你使用的是私有化部署的版本，此参数必填。格式如下: `https://authing-api.mydomain.com`，最后不带 `/`。
- `preflight`: 是否开启网络状况预检，默认为 false。此参数适用于检查用户的网络是否屏蔽了 authing 服务器域名（某些企业的内网会屏蔽第三方网站），检查成功不进行任何通知，检查失败后会调用传入的错误处理函数。执行预检之后会导致 SDK 初始化速度变慢，请谨慎使用。
- `cdnPreflight`: 是否开启 CDN 网络状况预检，默认为 false。此参数适用于检查用户的网络是否可以访问七牛云 CDN（某些开了代理的场景下无法访问），检查成功不进行任何通知，检查失败后调用传入的错误处理函数。执行 CDN 预检之后会导致 SDK 初始化速度变慢，请谨慎使用。

### 使用方法

`ManagementClient` 可以  用于管理用户、角色、策略、分组、组织机构、用户池配置，理论上任何你在 [Authing 控制台](https://console.authing.cn/console/userpool) 中能做的操作，都能用此 SDK 完成。

获取用户目录列表:

```js
// list 当前页的用户列表
// totalCount 用户总数
const { list, totalCount } = await managementClient.users.list();
```

创建角色:

```js
const role = await managementClient.roles.create('code', '角色名称');
```

修改用户池配置:

```js
const userpool = await managementClient.userpool.update({
  registerDisabled: true, // 关闭用户池注册
});
```

### 模块列表

- [UsersManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UsersManagementClient.html) 管理模块
- [RolesManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/RolesManagementClient.html) 角色管理模块
- [GroupsManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/GroupsManagementClient.html) 分组管理模块
- [OrgManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/OrgManagementClient.html) 组织机构管理模块
- [PoliciesManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/PoliciesManagementClient.html) 策略管理模块
- [AclManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/AclManagementClient.html) 访问控制模块
- [UdfManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UdfManagementClient.html) 自定义字段元数据管理模块
- [WhitelistManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/WhitelistManagementClient.html) 白名单管理模块
- [UserPoolManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UserpoolManagementClient.html) 用户池设置管理模块

## 错误处理

你可以使用 `try catch` 进行错误处理:

```js
try {
  const user = await authing.loginByEmail('test@example.com', 'passw0rd');
} catch (error) {
  console.log(error.code); // 2004
  console.log(error.message); // 用户不存在
}
```

> 完整的错误代码请见[此文档](https://docs.authing.cn/v2/reference/error-code.html)。

你还可以指定 `onError` 统一捕捉所有 Authing 请求异常，如使用 `antd` 等前端组件显示错误提示。

```js
import { message } from 'antd';
const authing = new AuthenticationClient({
  userPoolId,
  onError: (code, msg: any) => {
    message.error(msg);
  },
});
```

## 私有化部署

**私有化部署**场景需要指定你私有化的 Authing 服务的 GraphQL 端点（**不带协议头和 Path**），如果你不清楚可以联系 Authing IDaaS 服务管理员。

```js
import { AuthenticationClient, ManagementClient } from 'authing-js-sdk';

const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
  host: 'https://core.you-authing-service.com',
});

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
  host: 'https://core.you-authing-service.com',
});
```

## 接口索引

认证模块：

[认证核心模块](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/AuthenticationClient.html)

[扫码登录模块](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html)

[多因素认证模块](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/MfaAuthenticationClient.html)

[社会化登录模块](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/SocialAuthenticationClient.html)

管理模块：

[管理用户](https://docs.authing.cn/v2/reference/sdk-for-node/management/UsersManagementClient.html)

[管理角色](https://docs.authing.cn/v2/reference/sdk-for-node/management/RolesManagementClient.html)

[管理策略](https://docs.authing.cn/v2/reference/sdk-for-node/management/PoliciesManagementClient.html)

[管理权限、访问控制](https://docs.authing.cn/v2/reference/sdk-for-node/management/AclManagementClient.html)

[管理分组](https://docs.authing.cn/v2/reference/sdk-for-node/management/GroupsManagementClient.html)

[管理组织机构](https://docs.authing.cn/v2/reference/sdk-for-node/management/OrgManagementClient.html)

[管理用户自定义字段](https://docs.authing.cn/v2/reference/sdk-for-node/management/UdfManagementClient.html)

[管理注册白名单](https://docs.authing.cn/v2/reference/sdk-for-node/management/WhitelistManagementClient.html)

[管理用户池配置](https://docs.authing.cn/v2/reference/sdk-for-node/management/UserpoolManagementClient.html)

## 获取帮助

Join us on Gitter: [#authing-chat](https://gitter.im/authing-chat/community)
