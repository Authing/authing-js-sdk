
# 认证核心模块

[[toc]]

> 此模块包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在**浏览器**和后端环境中使用。

使用方法：

```javascript
import { AuthenticationClient } from "authing-js-sdk"
const authenticationClient = new AuthenticationClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
})
authenticationClient.registerByEmail // 使用邮箱注册
authenticationClient.loginByEmail // 使用邮箱登录
```

## 使用邮箱注册

AuthenticationClient().registerByEmail(email, password, profile, options)

> 使用邮箱注册，此接口不要求用户对邮箱进行验证，用户注册之后 emailVerified 字段会为 false 。如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。


#### 参数

- `email` \<string\> 邮箱 
- `password` \<string\> 密码 
- `profile` \<RegisterProfile\> 用户资料 
- `options` \<Object\>  
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。 
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.registerByEmail(
 'test@example.com',
 'passw0rd',
 {
   nickname: 'Nick'
 },
 {
   generateToken: true
 }
)
```
```javascript
authenticationClient.registerByEmail('test@example.com', 'passw0rd')
```
      

## 使用用户名注册

AuthenticationClient().registerByUsername(username, password, profile, options)

> 使用用户名注册


#### 参数

- `username` \<string\> 用户名 
- `password` \<string\> 密码 
- `profile` \<RegisterProfile\> 用户资料 
- `options` \<Object\>  
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。 
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.registerByUsername(
 'bob',
 'passw0rd',
 {
   nickname: 'Nick'
 },
 {
   generateToken: true
 }
)
```
```javascript
authenticationClient.registerByUsername('bob', 'passw0rd')
```
      

## 使用手机号注册

AuthenticationClient().registerByPhoneCode(phone, code, password, profile, options)

> 使用手机号注册，你可以同时设置该账号的初始密码。发送短信的接口请见 sendSmsCode


#### 参数

- `phone` \<string\> 手机号 
- `code` \<string\> 短信验证码 
- `password` \<string\> 初始密码 
- `profile` \<RegisterProfile\> 用户资料 
- `options` \<Object\>  
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。 
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.registerByPhoneCode(
 '176xxxx7041',
 '1234',
 'passw0rd',
 {
   nickname: 'Nick'
 },
 {
   generateToken: true
 }
)
```
```javascript
authenticationClient.registerByPhoneCode('176xxxx7041', '1234')
```
      

## 检查密码强度

AuthenticationClient().checkPasswordStrength(password)

> 检查密码强度，详情请见: https://docs.authing.co/security/config-user-pool-password-level.html


#### 参数

- `password` \<string\>  

#### 返回值

-  `Promise<CheckPasswordStrengthResult>` 

#### 示例

```javascript
authenticationClient.checkPasswordStrength('weak')
```
```javascript
authenticationClient.checkPasswordStrength('strongPassw0rd!')
```
      

## 发送短信验证码

AuthenticationClient().sendSmsCode(phone)

> 发送短信验证码, 短信验证码的有效时间为 60 s。


#### 参数

- `phone` \<string\>  

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
authenticationClient.sendSmsCode('176xxxx6754')
```
      

## 使用邮箱登录

AuthenticationClient().loginByEmail(email, password, options)

> 使用邮箱登录，该接口默认不会限制未验证的邮箱进行登录，如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。

如果你的用户池配置了登录失败检测，当同一  IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。


#### 参数

- `email` \<string\> 邮箱 
- `password` \<string\> 密码 
- `options` \<Object\>  
- `options.autoRegister` \<boolean\> 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。 
- `options.captchaCode` \<string\> 图形验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```
```javascript
authenticationClient.loginByEmail('test@example.com', 'passw0rd')
```
      

## 使用用户名登录

AuthenticationClient().loginByUsername(username, password, options)

> 使用用户名登录。

如果你的用户池配置了登录失败检测，当同一  IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。


#### 参数

- `username` \<string\> 用户名 
- `password` \<string\> 密码 
- `options` \<Object\>  
- `options.autoRegister` \<boolean\> 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。 
- `options.captchaCode` \<string\> 图形验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```
```javascript
authenticationClient.loginByEmail('test@example.com', 'passw0rd')
```
      

## 使用手机号验证码登录

AuthenticationClient().loginByPhoneCode(phone, code)

> 使用手机号验证码登录。


#### 参数

- `phone` \<string\> 手机号 
- `code` \<string\> 短信验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.loginByPhoneCode(
 '176xxxx7041',
 '1234',
)
```
      

## 使用手机号密码登录

AuthenticationClient().loginByPhonePassword(phone, password, options)

> 使用手机号密码登录。


#### 参数

- `phone` \<string\> 手机号 
- `password` \<string\> 密码 
- `options` \<Object\>  
- `options.captchaCode` \<string\> 图形验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.loginByPhonePassword(
 '176xxxx7041',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```
```javascript
authenticationClient.loginByPhonePassword('176xxxx7041', 'passw0rd')
```
      

## 检测 Token 登录状态

AuthenticationClient().checkLoginStatus(token)

> 检测 Token 登录状态


#### 参数

- `token` \<string\> 用户的登录凭证 token 

#### 返回值

-  `Promise<JwtTokenStatus>` 

#### 示例

```javascript
authenticationClient.checkLoginStatus('TOKEN')
```
      

## 发送邮件

AuthenticationClient().sendEmail(email, scene)

> 发送邮件


#### 参数

- `email` \<string\> 邮箱 
- `scene` \<EmailScene\> 发送场景，可选值为 RESET_PASSWORD（发送重置密码邮件，邮件中包含验证码）、VerifyEmail（发送验证邮箱的邮件）、ChangeEmail（发送修改邮箱邮件，邮件中包含验证码） 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
import { EmailScene } from "authing-js-sdk"
authenticationClient.sendEmail('test@example.com', EmailScene.RESET_PASSWORD)
```
      

## 通过短信验证码重置密码

AuthenticationClient().resetPasswordByPhoneCode(phone, code, newPassword)

> 通过短信验证码重置密码，你需要先调用 sendSmsCode 接口发送重置密码邮件。


#### 参数

- `phone` \<string\> 手机号 
- `code` \<string\> 验证码 
- `newPassword` \<string\> 新的密码 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
authenticationClient.resetPasswordByPhoneCode('176xxxx7041', '1234', 'passw0rd')
```
      

## 通过邮件验证码重置密码

AuthenticationClient().resetPasswordByEmailCode(phone, code, newPassword)

> 通过邮件验证码重置密码，你需要先调用 sendEmail 接口发送重置密码邮件。


#### 参数

- `phone` \<string\> 手机号 
- `code` \<string\> 验证码 
- `newPassword` \<string\> 新的密码 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
authenticationClient.resetPasswordByEmailCode('test@example.com', '1234', 'passw0rd')
```
      

## 修改用户资料

AuthenticationClient().updateProfile(updates)

> 修改用户资料，此接口不能用于修改手机号、邮箱、密码，如果需要请调用 updatePhone、updateEmail、updatePassword 接口。


#### 参数

- `updates` \<UpdateUserInput\> 修改的用户资料 
- `updates.username` \<string\> 用户名 
- `updates.nickname` \<string\> 昵称 
- `updates.photo` \<string\> 头像 
- `updates.company` \<string\> 公司 
- `updates.browser` \<string\> 浏览器 
- `updates.device` \<string\> 设备 
- `updates.lastIP` \<string\> 最近登录的 IP 
- `updates.name` \<string\> Name 
- `updates.givenName` \<string\> Given Name 
- `updates.familyName` \<string\> Family Name 
- `updates.middleName` \<string\> Middle Name 
- `updates.profile` \<string\> Profile Url 
- `updates.preferredUsername` \<string\> Preferred Name 
- `updates.website` \<string\> 个人网站 
- `updates.gender` \<string\> 性别, F 表示男性、W 表示女性、未知表示 U 
- `updates.birthdate` \<string\> 生日 
- `updates.zoneinfo` \<string\> 时区 
- `updates.locale` \<string\> 语言 
- `updates.address` \<string\> 地址 
- `updates.streetAddress` \<string\> 街道地址 
- `updates.locality` \<string\>  
- `updates.region` \<string\> 地域 
- `updates.postalCode` \<string\> 邮编 
- `updates.city` \<string\> 城市 
- `updates.province` \<string\> 省份 
- `updates.country` \<string\> 国家 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.updateProfile({
 nickname: "Nick",
 lastIp: "111.111.111.111"
})
```
      

## 更新用户密码

AuthenticationClient().updatePassword(newPassword, oldPassword)

> 更新用户密码


#### 参数

- `newPassword` \<string\> 新密码 
- `oldPassword` \<string\> 旧密码，如果用户没有设置密码，可以不填。 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.updatePassword('passw0rd') // 由手机号、社会化登录等其他方式注册的，首次没有设置密码，oldPassword 留空。
```
```javascript
authenticationClient.updatePassword('passw0rd', 'oldPassw0rd') // 由手机号、社会化登录等其他方式注册的，首次没有设置密码，oldPassword 留空。
```
      

## 更新用户手机号

AuthenticationClient().updatePhone(phone, phoneCode, oldPhone, oldPhoneCode)

> 更新用户手机号。和修改邮箱一样，默认情况下，如果用户当前已经绑定了手机号，需要同时验证原有手机号（目前账号绑定的手机号）和当前邮箱（将要绑定的手机号）。
也就是说，用户 A 当前绑定的手机号为 15888888888，想修改为 15899999999，那么就需要同时验证这两个手机号。
开发者也可以选择不开启 “验证原有手机号“ ，可以在 Authing 控制台 的 设置目录下的安全信息模块进行关闭。
用户首次绑定手机号请使用 bindPhone 接口。


#### 参数

- `phone` \<string\> 新手机号 
- `phoneCode` \<string\> 新手机号的验证码 
- `oldPhone` \<string\> 旧手机号 
- `oldPhoneCode` \<string\> 旧手机号的验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.updatePhone('176xxxx7041', '1234') // 关闭了“验证原有手机号“选项
```
```javascript
authenticationClient.updatePhone('176xxxx7041', '1234', '156xxxx9876', '1234') // 开启了“验证原有手机号“选项
```
      

## 更新用户邮箱

AuthenticationClient().updateEmail(email, emailCode, oldEmail, oldEmailCode)

> 如果用户已经绑定了邮箱，默认情况下，需要同时验证原有邮箱（目前账号绑定的邮箱）和当前邮箱（将要绑定的邮箱）。也就是说，用户 A 当前绑定的邮箱为 123456@qq.com，想修改为 1234567@qq.com，那么就需要同时验证这两个邮箱。
开发者也可以选择不开启 “验证原有邮箱“ ，可以在 Authing 控制台 的 设置目录下的安全信息模块进行关闭。
用户首次绑定手机号请使用 bindEmail 接口。


#### 参数

- `email` \<string\> 新邮箱 
- `emailCode` \<string\> 新邮箱的验证码 
- `oldEmail` \<string\> 旧邮箱 
- `oldEmailCode` \<string\> 旧邮箱的验证码 

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.updateEmail('test@example.com', '1234') // 关闭了“验证原有邮箱“选项
```
```javascript
authenticationClient.updateEmail('test@example.com', '1234', 'test2@example.com', '1234') // 开启了“验证原有邮箱“选项
```
      

## 刷新当前用户的 token

AuthenticationClient().refreshToken()

> 刷新当前用户的 token，调用此接口要求先登录。


#### 参数



#### 返回值

-  `Promise<RefreshToken>` 

#### 示例

```javascript
authenticationClient.updateEmail()
```
      

## 绑定手机号

AuthenticationClient().bindPhone(phone, phoneCode)

> 用户初次绑定手机号，如果需要修改手机号请使用 updatePhone 接口。


#### 参数

- `phone` \<string\>  
- `phoneCode` \<string\>  

#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.bindPhone('176xxxx7041', '1234')
```
      

## 解绑手机号

AuthenticationClient().unbindPhone()

> 用户解绑手机号


#### 参数



#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.unbindPhone()
```
      

## 获取当前登录的用户信息

AuthenticationClient().currentUser()

> 获取当前登录的用户信息


#### 参数



#### 返回值

-  `Promise<User>` 

#### 示例

```javascript
authenticationClient.currentUser()
```
      

## 退出登录

AuthenticationClient().logout()

> 退出登录，清空 localStorage 里的 user 和 token


#### 参数



#### 返回值

-  `null` 

#### 示例

```javascript
authenticationClient.logout()
```
      

## 获取当前用户的自定义数据列表

AuthenticationClient().listUdv()

> 获取当前用户的自定义数据列表


#### 参数



#### 返回值

-  `Promise<Array<UserDefinedData>>` 

#### 示例

```javascript
authenticationClient.listUdv()
```
      

## 添加自定义数据

AuthenticationClient().addUdv(key:, value:)

> 添加自定义数据


#### 参数

- `key:` \<string\> 自定义字段的 key 
- `value:` \<any\> 自定义数据的值，值的类型必须要和用户池定义的自定义字段类型一致。 

#### 返回值

-  `Promise<Array<UserDefinedData>>` 

#### 示例

```javascript
authenticationClient.addUdv('school', '清华大学') // 要求用户必须定义了 school 这个字段。
```
      

## 删除自定义数据

AuthenticationClient().removeUdv(key:)

> 删除自定义数据


#### 参数

- `key:` \<null\> 自定义字段的 key 

#### 返回值

-  `Promise<Array<UserDefinedData>>` 

#### 示例

```javascript
authenticationClient.removeUdv('school')
```
      