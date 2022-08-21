<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

<div align="center">
  <a href="https://badge.fury.io/js/authing-js-sdk"><img src="https://badge.fury.io/js/authing-js-sdk.svg" alt="npm version" height="18"></a>
  <a href="https://npmcharts.com/compare/authing-js-sdk" target="_blank"><img src="https://img.shields.io/npm/dm/authing-js-sdk" alt="download"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standardjs"></a>
  <a href="https://github.com/authing-js-sdk" target="_blank"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="javascript:;" target="_blank"><img src="https://img.shields.io/badge/node-%3E=12-green.svg" alt="Node"></a>
</div>

<br/>

English | [简体中文](./README-zh_CN.md)

The Authing JavaScript / node SDK consists of two parts：`ManagementClient` and `AuthenticationClient`。

- `Authenticationclient` includes the methods of registering and logging in, resetting the mobile phone number mailbox, and modifying the account information. It requests as your end user and is suitable for use in the browser and back-end environment.

- `Managementclient` is suitable for use in the back-end or **trusted** front-end environment. Generally speaking, 
All the operations you can do in the [Authing Console](https://console.authing.cn/console/userpool) can be completed with this SDK

## Install

Use `npm`:

```
npm install authing-js-sdk
```

Use `yarn`:

```
yarn add authing-js-sdk
```

> If you want to use it in the react native environment, you need to run it in the RN project root directory first: `npx rn-nodeify --install "crypto,stream"`，after that, a `shim.js` file will be generated in the project root directory, and then in the App.js first line introduction `import './shim.js'`.

Use CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/authing-js-sdk/build/browser/index.min.js"></script>

<script>
  /** You can obtain the Authenticationclient and Managementclient through the global variable authenticating */
  var authing = new Authing.AuthenticationClient({
    appId: 'AUTHING_APP_ID',
  });
</script>
```

## Use Authentication module

### Initialize

`Authenticationclient` needs to pass in 'appId' for initialization:

> You can view your application list in **Applications** on the console

```js
import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
});
```

The complete parameter list is as follows:

- `appId`: Authing appId, required；
- `accessToken`: By user's `id_token` initializes the SDK (optional. You can cache the user's `id_token` in the front-end localstorage to realize the purpose of remembering login).
- `timeout`: Request timeout, default: 10000 (10 seconds)。
- `onError`: Error handling function, you can use it to catch all exceptions requested by the authoring client globally. See for complete error codes [doc](https://docs.authing.cn/v2/reference/error-code.html)。The function is defined as:

```js
(code: number, message: string, data: any) => void
```

- `host`: Authing server address. If you are using the public cloud version, please ignore the parameter. This parameter is required if you are using the version of privatized deployment. The format is as follows: `https://authing-api.mydomain.com`，No `/' at the end.
- `preflight`: Whether to enable network status pre check. The default value is false. This parameter is used to check whether the user's network shields the domain name of the authing server (the intranet of some enterprises shields the third-party websites). No notification will be given if the check is successful, and the incoming error handling function will be called if the check fails. The SDK initialization speed will be slow after the pre check. Please use it with caution.
- `cdnPreflight`: Whether to enable CDN network status pre check. The default value is false. This parameter is used to check whether the user's network can access the qiniu cloud CDN (which cannot be accessed in some scenarios where the agent is enabled). If the check succeeds, no notification will be given. If the check fails, the incoming error handling function will be called. After performing CDN pre check, the SDK initialization speed will be slow. Please use it with caution.

### Usage

If the SDK is used in the browser environment, after the user completes the login, the SDK will write the user's ` token` to `localStorage`, and subsequent requests will carry the `token` for access.

```js
const email = 'test@example.com';
const password = 'passw0rd';
const user = await authing.loginByEmail(email, password); // Log in successfully and write the token to localStorage

//You can do this after logging in
await authing.updateProfile((nickname: 'Bob'));
```

### Social Login

Through `authenticationclient.social.authorize` send an authorized login request. This method will directly open a new window and jump to the login authorization page of a third-party social login service provider (such as GitHub, wechat, dingpin, etc.). The user after the authorization is completed, this window will be automatically closed and the 'onsuccess' callback function will be triggered. Through this function, you can obtain the user information.

Example：

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
});

await authenticationClient.social.authorize('github', {
  onSuccess: (user) => {
    console.log(user);
  },
  onError: (code, message) => {},
  // Customize the location of the pop-up window
  position: {
    w: 100,
    h: 100,
  },
});
```

Authing currently supports nearly 20 kinds of social logins at home and abroad, such as wechat, GitHub, sign in with apple, Alipay.

### Small program code scanning login

Small program code scanning login refers to wechat login using authing small program `Small Login`, [click here to learn more](https://docs.authing.cn/v2/reference/sdk-for-wxapp.html)。

You can use 5 lines of code to realize a complete code scanning login form:

```js
authenticationClient.wxqrcode.startScanning('qrcode', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket);
  },
});
```

<img src="https://usercontents.authing.cn/wxapp-scaning-demo.gif" style="display:block;margin: 0 auto;">

For complete usage and parameters, please refer to [Code scanning login module](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html)。

### App scan code login

App scanning login refers to using your own app scanning to login to the website，[click here to learn more](https://docs.authing.cn/v2/guides/authentication/qrcode/use-self-build-app/)。

ou can use 5 lines of code to realize a complete code scanning login form:

```js
authenticationClient.qrcode.startScanning('qrcode', {
  onSuccess: (userInfo, ticket) => {
    console.log(userInfo, ticket);
  },
});
```

### Module list

- [AuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/AuthenticationClient.html) Core module
- [QrCodeAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html) Small program code scanning login and app code scanning login
- [MfaAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/MfaAuthenticationClient.html) Multi factor authentication module
- [SocialAuthenticationClient](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/SocialAuthenticationClient.html) Social login module

## Use management module

### Initialize

`ManagementClient` initialization requires the user pool ID to be passed in `userPoolId` and user pool key `secret`：

> Click here to learn [how to get userPoolId and secret](https://docs.authing.cn/v2/guides/faqs/get-userpool-id-and-secret.html)。

```js
import { ManagementClient } from 'authing-js-sdk';

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
});
```

The complete parameter list is as follows:

- `userPoolId`: User pool ID.
- `secret`: User pool key.
- `accessToken`: Initialize the SDK through the administrator's token。（Optional，**Either secret or accesstoken must be filled in**）。
- `timeout`: Request timeout, in milliseconds; the default is 10000 (10 seconds).
- `onError`: Error handling function, you can use it to catch all exceptions requested by the authoring client globally. The function is defined as:

```js
(code: number, message: string, data: any) => void
```

> See for complete error codes: [doc](https://docs.authing.cn/v2/reference/error-code.html)。

- `host`: Authing server address. If you are using the public cloud version, please ignore the parameter. This parameter is required if you are using the version of privatized deployment. The format is as follows: `https://authing-api.mydomain.com`，No `/` at the end。
- `preflight`: Whether to enable network status pre check. The default value is false. This parameter is used to check whether the user's network shields the domain name of the authing server (the intranet of some enterprises shields the third-party websites). No notification will be given if the check is successful, and the incoming error handling function will be called if the check fails. The SDK initialization speed will be slow after the pre check. Please use it with caution.
- `cdnPreflight`: Whether to enable CDN network status pre check. The default value is false. This parameter is used to check whether the user's network can access the qiniu cloud CDN (which cannot be accessed in some scenarios where the agent is enabled). If the check succeeds, no notification will be given. If the check fails, the incoming error handling function will be called. After performing CDN pre check, the SDK initialization speed will be slow. Please use it with caution.

### Usage

`ManagementClient`. It can be used to manage users, roles, policies, groups, organizations, and user pool configurations. Theoretically, any operation you can do in the [Authing Console](https://console.authing.cn/console/userpool) can be completed with this SDK

Get user directory list:

```js
// list: list of users on the current page
// totalCount: total users
const { list, totalCount } = await managementClient.users.list();
```

Create role:

```js
const role = await managementClient.roles.create('code', 'Role name');
```

Modify user pool configuration:

```js
const userpool = await managementClient.userpool.update({
  registerDisabled: true, // Close user pool registration
});
```

### Module list

- [UsersManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UsersManagementClient.html) Management module
- [RolesManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/RolesManagementClient.html) Role management module
- [GroupsManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/GroupsManagementClient.html) Group management module
- [OrgManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/OrgManagementClient.html) Organization management module
- [PoliciesManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/PoliciesManagementClient.html) Policy management module
- [AclManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/AclManagementClient.html) Access control module
- [UdfManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UdfManagementClient.html) Custom field metadata management module
- [WhitelistManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/WhitelistManagementClient.html) White list management module
- [UserPoolManagementClient](https://docs.authing.cn/v2/reference/sdk-for-node/management/UserpoolManagementClient.html) User pool setting management module

## Error handling

You can use `try catch` to handle errors:

```js
try {
  const user = await authing.loginByEmail('test@example.com', 'passw0rd');
} catch (error) {
  console.log(error.code); // 2004
  console.log(error.message); // user does not exist
}
```

> See for complete error codes [doc](https://docs.authing.cn/v2/reference/error-code.html)。

You can also specify `onerror` to uniformly catch all authing request exceptions, such as using `antd` and other front-end components to display error prompts

```js
import { message } from 'antd';
const authing = new AuthenticationClient({
  userPoolId,
  onError: (code, msg: any) => {
    message.error(msg);
  },
});
```

## Privatization deployment

In the **scenario of privatization deployment**, you need to specify the graphql endpoint of your privatized authoring service (**without protocol header and path**). If you are unclear, you can contact the authoring idaas service administrator.

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

## Interface index

Authentication module:

[Authentication core module](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/AuthenticationClient.html)

[Code scanning login module](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/QrCodeAuthenticationClient.html)

[Multi factor authentication module](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/MfaAuthenticationClient.html)

[Social login module](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/SocialAuthenticationClient.html)

Management module:

[Manage users](https://docs.authing.cn/v2/reference/sdk-for-node/management/UsersManagementClient.html)

[Management role](https://docs.authing.cn/v2/reference/sdk-for-node/management/RolesManagementClient.html)

[Management policy](https://docs.authing.cn/v2/reference/sdk-for-node/management/PoliciesManagementClient.html)

[Management authority and access control](https://docs.authing.cn/v2/reference/sdk-for-node/management/AclManagementClient.html)

[Management Group](https://docs.authing.cn/v2/reference/sdk-for-node/management/GroupsManagementClient.html)

[Management organization](https://docs.authing.cn/v2/reference/sdk-for-node/management/OrgManagementClient.html)

[Manage user defined fields](https://docs.authing.cn/v2/reference/sdk-for-node/management/UdfManagementClient.html)

[Manage registration white list](https://docs.authing.cn/v2/reference/sdk-for-node/management/WhitelistManagementClient.html)

[Manage user pool configuration](https://docs.authing.cn/v2/reference/sdk-for-node/management/UserpoolManagementClient.html)

## Log

Detailed changes for each version are recorded in the [document](https://github.com/Authing/authing.js/releases).

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create new Pull Request
