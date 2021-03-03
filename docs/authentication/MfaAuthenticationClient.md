
# 多因素认证模块

[[toc]]

> 此模块用于进行绑定 MFA 认证器、解绑 MFA 认证器、用户二次认证。

请求绑定 MFA 认证器：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
await authenticationClient.mfa.assosicateMfaAuthenticator({authenticatorType: 'totp'})
```

验证 MFA 二次口令：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
await authenticationClient.mfa.verifyTotpMfa({totp: '112233', mfaToken: 'xxx'})
```





## 获取 MFA 认证器

MfaAuthenticationClient().getMfaAuthenticators()

> 获取 MFA 认证器


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.getMfaAuthenticators({ type: 'totp' })
```

#### 返回值

-  `Promise<IMfaAuthenticators>` 


      

## 请求 MFA 二维码和密钥信息

MfaAuthenticationClient().assosicateMfaAuthenticator()

> 请求 MFA 二维码和密钥信息


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.assosicateMfaAuthenticator({ authenticatorType: 'totp' })
```

#### 返回值

-  `Promise<IMfaAssociation>` 


      

## 解绑 MFA

MfaAuthenticationClient().deleteMfaAuthenticator()

> 解绑 MFA


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.deleteMfaAuthenticator()
```

#### 返回值

-  `Promise<IMfaDeleteAssociation>` 


      

## 确认绑定 MFA

MfaAuthenticationClient().confirmAssosicateMfaAuthenticator()

> 确认绑定 MFA


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator({ authenticatorType: 'totp', totp: '112233' })
```

#### 返回值

-  `Promise<IMfaConfirmAssociation>` 


      

## 检验二次验证 MFA 口令

MfaAuthenticationClient().verifyTotpMfa()

> 检验二次验证 MFA 口令


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.verifyTotpMfa({ authenticatorType: 'totp', totp: '112233' })
```

#### 返回值

-  `Promise<User>` 


      

## 检验二次验证 MFA 短信验证码

MfaAuthenticationClient().verifyAppSmsMfa(options)

> 检验二次验证 MFA 短信验证码


#### 参数

- `options` \<object\>  
- `options.phone` \<string\> 用户手机号 
- `options.code` \<string\> 手机验证码 
- `options.token` \<string\> 登录接口返回的 mfaToken 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.verifySmsMfa({ mfaToken: 'xxxxxx', phone: '173xxxxxxxx' })
```

#### 返回值

-  `Promise<User>` 


      

## 检验二次验证 MFA 邮箱验证码

MfaAuthenticationClient().verifyAppEmailMfa(options)

> 检验二次验证 MFA 邮箱验证码


#### 参数

- `options` \<object\>  
- `options.email` \<string\> 用户邮箱 
- `options.code` \<string\> 邮箱验证码 
- `options.token` \<string\> 登录接口返回的 mfaToken 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.verifyAppEmailMfa({ mfaToken: 'xxxx', email: 'example@authing.com' })
```

#### 返回值

-  `Promise<User>` 


      

## 检测手机号或邮箱是否已被绑定

MfaAuthenticationClient().phoneOrEmailBindable(options)

> 当需要手机或邮箱 MFA 登录，而用户未绑定手机或邮箱时，可先让用户输入手机号或邮箱，用此接口先检测手机或邮箱是否可绑定，再进行 MFA 验证


#### 参数

- `options` \<object\>  
- `options.mfaToken` \<string\> 后端返回的 mfaToken 
- `options.phone` \<string\> 需要检测的手机号 
- `options.email` \<string\> 需要检测的邮箱 

#### 示例

```javascript
authenticationClient.phoneOrEmailBindable({
 phone: '173xxxxxxxx',
 mfaToken: 'xxxxx'
})
```

#### 返回值

-  `Promise<boolean>` 


      

## 检验二次验证 MFA 恢复代码

MfaAuthenticationClient().verifyTotpRecoveryCode()

> 检验二次验证 MFA 恢复代码


#### 参数



#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const authenticators = await authenticationClient.mfa.verifyTotpRecoveryCode({ authenticatorType: 'totp', totp: '112233' })
```

#### 返回值

-  `Promise<User>` 


      