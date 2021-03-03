
# 管理用户池配置

[[toc]]

> Authing 用户池配置管理模块。



请使用以下方式使用该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: "YOUR_USERPOOL_ID",
   secret: "YOUR_USERPOOL_SECRET",
})

managementClient.userpool.detail // 获取用户池配置
managementClient.userpool.update // 修改用户池配置
managementClient.userpool.env // 获取用户池配置的环境变量列表
```




## 查询用户池配置

UserPoolManagementClient().detail()

> 查询用户池配置


#### 参数



#### 示例

```javascript
const userpool = await managementClient.userpool.detail()
```

#### 返回值

-  `Promise<UserPool>` 


      

## 更新用户池配置

UserPoolManagementClient().update(updates)

> 更新用户池配置


#### 参数

- `updates` \<UpdateUserpoolInput\>  
- `updates.name` \<string\> 用户池名称 
- `updates.logo` \<string\> 用户池 logo 
- `updates.domain` \<string\> 用户池企业应用面板二级域名 
- `updates.description` \<string\> 描述信息 
- `updates.emailVerifiedDefault` \<boolean\> 设置邮箱默认为已验证状态（用户的 emailVerified 字段为 true） 
- `updates.appSsoEnabled` \<boolean\> 开启用户池下的应用之间单点登录 
- `updates.sendWelcomeEmail` \<boolean\> 用户注册之后是否发送欢迎邮件 
- `updates.registerDisabled` \<boolean\> 是否关闭注册，当用户池关闭注册之后，普通用户将无法注册账号，只有管理员能够手动创建账号。 
- `updates.allowedOrigins` \<string\> 安全域配置，安全域（Allowed Origins） 是允许从 JavaScript 向 Authing API 发出请求的 URL（通常与 CORS 一起使用）。 默认情况下，系统会允许你使用所有网址。 如果需要，此字段允许你输入其他来源。 你可以通过逐行分隔多个有效 URL，并在子域级别使用通配符（例如：https://*.sample.com）。
验证这些 URL 时不考虑查询字符串和哈希信息，如果带上了查询字符串和哈希信息系统会自动忽略整个域名。
如果有多条请以换行符分隔。 
- `updates.whitelist` \<Object\> 用户池白名单配置 
- `updates.whitelist.phoneEnabled` \<boolean\> 是否开启手机号白名单 
- `updates.whitelist.emailEnabled` \<boolean\> 是否开启邮箱白名单 
- `updates.whitelist.usernameEnabled` \<boolean\> 是否开启用户名白名单 
- `updates.tokenExpiresAfter` \<number\> token 过期时间 
- `updates.loginFailCheck` \<Object\> 频繁登录失败限制，开启之后，在规定时间内超过次数后再次登录需要验证码。如果你的业务存在同一区域同一时间段并发登录的场景，请将此检测关闭。 
- `updates.loginFailCheck.enabled` \<boolean\> 是否开启 
- `updates.loginFailCheck.timeInterval` \<number\> 检测周期，单位为秒。 
- `updates.loginFailCheck.limit` \<number\> 同一 IP 登录失败次数达到多少次的时候会触发限制条件。 
- `updates.frequentRegisterCheck` \<Object\> 频率注册限制，开启之后同一 IP 频繁注册账号时会触发频率限制，需要等一段时间之后才能重新注册。如果你的业务存在同一区域同一时间段并发注册的场景，请将此检测关闭。 
- `updates.frequentRegisterCheck.enabled` \<boolean\> 是否开启 
- `updates.frequentRegisterCheck.timeInterval` \<Object\> 检测周期，单位为秒。 
- `updates.frequentRegisterCheck.limit` \<Object\> 同一个周期内同一 IP 注册次数达到此数目时会触发频率限制。 

#### 示例

```javascript
const userpool = await managementClient.userpool.update({
   registerDisabled: true // 关闭系统注册
})
```

#### 返回值

-  `Promise<UserPool>` 


      

## 获取环境变量列表

UserPoolManagementClient().listEnv()

> 获取用户池环境变量列表。用户池配置的环境变量可以在 pipeline 场景下使用，详情请见：https://docs.authing.co/extensibility/pipeline/env.html


#### 参数



#### 示例

```javascript
const envList = await managementClient.userpool.listEnv()
```

#### 返回值

-  `Promise<Env[]>` 


      

## 添加环境变量

UserPoolManagementClient().addEnv(key, value)

> 添加环境变量


#### 参数

- `key` \<string\> 环境变量键 
- `value` \<any\> 环境变量值 

#### 示例

```javascript
const envList = await managementClient.userpool.addEnv('LARK_WEBHOOK', 'xxxxxxx') // 添加一个飞书群机器人 webhook 地址，之后可以在 pipeline 函数中使用（详细请见: https://docs.authing.co/extensibility/pipeline/usage.html）
```

#### 返回值

-  `Promise<Env[]>` 返回最新的环境变量列表


      

## 删除环境变量

UserPoolManagementClient().removeEnv(key)

> 删除环境变量


#### 参数

- `key` \<string\> 环境变量键 

#### 示例

```javascript
const envList = await managementClient.userpool.removeEnv('LARK_WEBHOOK')
```

#### 返回值

-  `Promise<Env[]>` 返回最新的环境变量列表


      