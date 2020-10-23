
# 多因素认证模块

[[toc]]

> 此模块用于进行绑定 MFA 认证器、解绑 MFA 认证器、用户二次认证。

请求绑定 MFA 认证器：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
await authenticationClient.mfa.assosicateMfaAuthenticator({authenticatorType: 'totp'})
```

验证 MFA 二次口令：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
await authenticationClient.mfa.verifyTotpMfa({totp: '112233', mfaToken: 'xxx'})
```





## 获取 MFA 认证器

MfaAuthenticationClient().getMfaAuthenticators()

> 获取 MFA 认证器


#### 参数



#### 返回值

-  `Promise<IMfaAuthenticators>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.getMfaAuthenticators({ type: 'totp' })
```
      

## 请求 MFA 二维码和密钥信息

MfaAuthenticationClient().assosicateMfaAuthenticator()

> 请求 MFA 二维码和密钥信息


#### 参数



#### 返回值

-  `Promise<IMfaAssociation>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.assosicateMfaAuthenticator({ authenticatorType: 'totp' })
```
      

## 解绑 MFA

MfaAuthenticationClient().deleteMfaAuthenticator()

> 解绑 MFA


#### 参数



#### 返回值

-  `Promise<IMfaDeleteAssociation>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.deleteMfaAuthenticator()
```
      

## 确认绑定 MFA

MfaAuthenticationClient().confirmAssosicateMfaAuthenticator()

> 确认绑定 MFA


#### 参数



#### 返回值

-  `Promise<IMfaConfirmAssociation>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator({ authenticatorType: 'totp', totp: '112233' })
```
      

## 检验二次验证 MFA 口令

MfaAuthenticationClient().verifyTotpMfa()

> 检验二次验证 MFA 口令


#### 参数



#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.verifyTotpMfa({ authenticatorType: 'totp', totp: '112233' })
```
      

## 检验二次验证 MFA 恢复代码

MfaAuthenticationClient().verifyTotpRecoveryCode()

> 检验二次验证 MFA 恢复代码


#### 参数



#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
const authenticators = await authenticationClient.mfa.verifyTotpRecoveryCode({ authenticatorType: 'totp', totp: '112233' })
```
      